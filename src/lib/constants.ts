export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "ankitsinghmyself@gmail.com";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ankitsinghmyself.vercel.app";

export const EXPERIENCE_START_YEAR = 2020;
export const EXPERIENCE_START_MONTH_INDEX = 8;
export const EXPERIENCE_START_LABEL = "Aug 2020";

export function getExperienceYearsLabel(referenceDate = new Date()) {
  const years =
    referenceDate.getUTCFullYear() -
    EXPERIENCE_START_YEAR -
    (referenceDate.getUTCMonth() < EXPERIENCE_START_MONTH_INDEX ? 1 : 0);

  return `${Math.max(years, 0)}+`;
}

export function getExperienceYearsText(referenceDate = new Date()) {
  return `${getExperienceYearsLabel(referenceDate)} years`;
}
