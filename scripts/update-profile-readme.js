const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const readmePath = path.join(repoRoot, "README.md");
const constantsPath = path.join(repoRoot, "src", "lib", "constants.ts");

function readExperienceConfig() {
  const constantsSource = fs.readFileSync(constantsPath, "utf8");

  const yearMatch = constantsSource.match(
    /export const EXPERIENCE_START_YEAR = (\d+);/,
  );
  const monthMatch = constantsSource.match(
    /export const EXPERIENCE_START_MONTH_INDEX = (\d+);/,
  );
  const labelMatch = constantsSource.match(
    /export const EXPERIENCE_START_LABEL = "([^"]+)";/,
  );

  if (!yearMatch || !monthMatch || !labelMatch) {
    throw new Error(
      "Could not read experience start configuration from src/lib/constants.ts",
    );
  }

  return {
    startYear: Number(yearMatch[1]),
    startMonthIndex: Number(monthMatch[1]),
    startLabel: labelMatch[1],
  };
}

function getExperienceYearsLabel(
  startYear,
  startMonthIndex,
  referenceDate = new Date(),
) {
  const years =
    referenceDate.getUTCFullYear() -
    startYear -
    (referenceDate.getUTCMonth() < startMonthIndex ? 1 : 0);

  return `${Math.max(years, 0)}+`;
}

function replaceMarkerBlock(source, markerName, replacement) {
  const pattern = new RegExp(
    `<!-- ${markerName}:START -->[\\s\\S]*?<!-- ${markerName}:END -->`,
    "m",
  );

  if (!pattern.test(source)) {
    throw new Error(`Marker block ${markerName} not found in README.md`);
  }

  return source.replace(
    pattern,
    `<!-- ${markerName}:START -->\n${replacement}\n<!-- ${markerName}:END -->`,
  );
}

function main() {
  const { startYear, startMonthIndex, startLabel } = readExperienceConfig();
  const yearsLabel = getExperienceYearsLabel(startYear, startMonthIndex);
  const yearsLabelEncoded = encodeURIComponent(yearsLabel);

  let readme = fs.readFileSync(readmePath, "utf8");

  readme = replaceMarkerBlock(
    readme,
    "EXPERIENCE_BADGE",
    `    <img src="https://img.shields.io/badge/Experience-${yearsLabelEncoded}%20years-065f46?style=flat-square" alt="Experience since ${startLabel}" />`,
  );

  fs.writeFileSync(readmePath, readme);
  console.log(`Updated README experience to ${yearsLabel} years since ${startLabel}`);
}

main();
