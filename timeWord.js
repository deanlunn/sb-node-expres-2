const hoursArray = [
  "twelve",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
];

const minutesArray = [
  "o'clock",
  "oh one",
  "oh two",
  "oh three",
  "oh four",
  "oh five",
  "oh six",
  "oh seven",
  "oh eight",
  "oh nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
  "twenty",
  "twenty one",
  "twenty two",
  "twenty three",
  "twenty four",
  "twenty five",
  "twenty six",
  "twenty seven",
  "twenty eight",
  "twenty nine",
  "thirty",
  "thirty one",
  "thirty two",
  "thirty three",
  "thirty four",
  "thirty five",
  "thirty six",
  "thirty seven",
  "thirty eight",
  "thirty nine",
  "forty",
  "forty one",
  "forty two",
  "forty three",
  "forty four",
  "forty five",
  "forty six",
  "forty seven",
  "forty eight",
  "forty nine",
  "fifty",
  "fifty one",
  "fifty two",
  "fifty three",
  "fifty four",
  "fifty five",
  "fifty six",
  "fifty seven",
  "fifty eight",
  "fifty nine",
];

function timeToWords(time) {
  // Split the time string into hours and minutes, then convert to numbers
  const [hour, minute] = time.split(":").map(Number);

  // Handle special cases
  if (hour === 0 && minute === 0) {
    return "midnight";
  }

  if (hour === 12 && minute === 0) {
    return "noon";
  }
  // Return the hour and minute from the arrays
  const hourInWords = hoursArray[hour % 12];
  const minuteInWords = minutesArray[minute];

  // Return the time in words with am or pm
  return `${hourInWords} ${minuteInWords}${hour < 12 ? " am" : " pm"}`;
}

module.exports = timeToWords;
