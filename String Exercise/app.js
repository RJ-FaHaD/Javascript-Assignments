// Question # 1
function calculateStringLength(str) {
    let length = 0;
    for (let char of str) {
        length++;
    }
    return length;
  }
  
  console.log(calculateStringLength("Hello, world!")); // Output: 13
  
  
  //Question #2
  
  function toUpperCase(str) {
    let result = "";
    for (let char of str) {
        if (char >= "a" && char <= "z") {
            result += String.fromCharCode(char.charCodeAt(0) - 32);
        } else {
            result += char;
        }
    }
    return result;
  }
  
  console.log(toUpperCase("hello")); // Output: "HELLO"
  
  
  //Question # 3
  function toLowerCase(str) {
    let result = "";
    for (let char of str) {
        if (char >= "A" && char <= "Z") {
            result += String.fromCharCode(char.charCodeAt(0) + 32);
        } else {
            result += char;
        }
    }
    return result;
  }
  
  console.log(toLowerCase("HELLO")); // Output: "hello"
  
  
  //Question # 4
  function countCharacter(str, char) {
    let count = 0;
    for (let c of str) {
        if (c === char) {
            count++;
        }
    }
    return count;
  }
  
  console.log(countCharacter("hello world", "l")); // Output: 3
  
  
  //Question # 7
  function extractSubstring(str, start, end) {
    return str.substring(start, end);
  }
  
  console.log(extractSubstring("Hello, world!", 3, 7)); // Output: "lo, "
  
  
  //Question # 12
  function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }
  
  console.log(capitalizeWords("hello world")); // Output: "Hello World"
  
  
  //Question # 13
  function trimWhitespace(str) {
    return str.replace(/^\s+|\s+$/g, "");
  }
  
  console.log(trimWhitespace("   Hello, world!   ")); // Output: "Hello, world!"
  
  
  //Question # 14
  function compressString(str) {
    let compressed = "";
    let count = 1;
  
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compressed += str[i] + count;
            count = 1;
        }
    }
    return compressed;
  }
  
  console.log(compressString("aaabbbccc")); // Output: "a3b3c3"
  
  
  //Question # 15
  function countVowelsAndConsonants(str) {
    const vowels = "aeiouAEIOU";
    let vowelCount = 0;
    let consonantCount = 0;
  
    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (char.match(/[a-zA-Z]/)) {
            consonantCount++;
        }
    }
    return { vowels: vowelCount, consonants: consonantCount };
  }
  
  console.log(countVowelsAndConsonants("Hello, world!")); // Output: { vowels: 3, consonants: 7 }
  
  
  //Question # 16
  function extractSubstringFromIndex(str, start) {
    return str.substring(start);
  }
  
  console.log(extractSubstringFromIndex("Hello, world!", 3)); // Output: "lo, world!"