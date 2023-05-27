// 1. Define the expected oven time in minutes
export const EXPECTED_MINUTES_IN_OVEN = 40;

// 2. Calculate the remaining oven time in minutes
export function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

// 3. Calculate the preparation time in minutes
export function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers * 2;
}

// 4. Calculate the total working time in minutes
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  const preparationTime = preparationTimeInMinutes(numberOfLayers);
  return preparationTime + actualMinutesInOven;
}


// Testing the functions
console.log(EXPECTED_MINUTES_IN_OVEN); // Output: 40
console.log(remainingMinutesInOven(30)); // Output: 10
console.log(preparationTimeInMinutes(2)); // Output: 4
console.log(totalTimeInMinutes(3, 20)); // Output: 26
