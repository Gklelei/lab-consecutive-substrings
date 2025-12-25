function consecutiveSubstrings(input) {
  const result = [];
  const n = input.length;

  if (n === 0) return [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      result.push(input.slice(i, j));
    }
  }

  return result;
}
module.exports = consecutiveSubstrings;

if (require.main === module) {
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings("abc"));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings("a"));
}

module.exports = consecutiveSubstrings;
