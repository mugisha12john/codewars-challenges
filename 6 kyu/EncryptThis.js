var encryptThis = function (text) {
  if (!text) return "";

  return text.split(" ").map(word => {
    
    const firstCode = word.charCodeAt(0);
    
    
    if (word.length === 1) return firstCode.toString();
    if (word.length === 2) return firstCode + word[1];
    
   
    const secondChar = word[1];
    const lastChar = word[word.length - 1];
    const middle = word.slice(2, -1); 
    
    return firstCode + lastChar + middle + secondChar;
  }).join(" ");
};

// Test cases
console.log(encryptThis("Hello"));       // "72olle"
console.log(encryptThis("good"));        // "103doo"
console.log(encryptThis("hello world")); // "104olle 119drlo"