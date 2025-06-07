import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculateYearsFromSep2020 = () => {
  const startDate = new Date("2020-09-01");
  const currentDate = new Date();
  const diff = currentDate.getTime() - startDate.getTime();

  const years = diff / (1000 * 60 * 60 * 24 * 365);

  return Math.floor(years) < years
    ? Math.floor(years) + "+"
    : Math.floor(years).toString();
};
