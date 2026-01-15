import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculateYearsFromSep2020 = () => {
  const startDate = new Date("2020-09-01");
  const currentDate = new Date();
  
  let years = currentDate.getFullYear() - startDate.getFullYear();
  
  // Check if we haven't reached September yet this year
  if (currentDate.getMonth() < startDate.getMonth() || 
      (currentDate.getMonth() === startDate.getMonth() && currentDate.getDate() < startDate.getDate())) {
    years--;
  }
  
  return years + "+";
};
