export function enforceRange(num: number, minRange: number, maxRange: number): number {
  // If the input number is -1, return the maximum range value
  if (num === -1) {
    return maxRange;
  } 
  // If the input number is within the specified range, return the number as is
  else if (num >= minRange && num <= maxRange) {
    return num;
  } 
  // If the input number is below the minimum range, return the minimum range value
  else if (num < minRange) {
    return minRange;
  } 
  // If the input number is above the maximum range, return the maximum range value
  else {
    return maxRange;
  }
}