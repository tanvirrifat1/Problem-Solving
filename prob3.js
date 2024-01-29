const countVowels = (str) => {
  const vowels = "aeiouAEIOU";

  let vowelCount = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }

  return vowelCount;
};

const inputString = "Hello, World!";
const result = countVowels(inputString);
console.log(`Number of vowels in '${inputString}': ${result}`);
