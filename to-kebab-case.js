function toKebabCase(str) {
  const kebabCase = str
    .trim()
    .replace(/\s+/g, "-")
    .replace(/_/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "")
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .toLowerCase();
  return kebabCase;
}

// Create tests for these cases:
// Single words should be returned as is
// "hello" → "hello"
console.log(toKebabCase("hello"));

// Multiple words will be skewered
// "boxing day buffet" → "boxing-day-buffet"
console.log(
  toKebabCase("boxing day buffet"),
  "→ Expected: 'boxing-day-buffet'"
);

// Should return in undercase
// "Leftover Surprise" → "leftover-surprise"
console.log(
  toKebabCase("Leftover Surprise"),
  "→ Expected: 'leftover-surprise'"
);

// Should remove punctuation
// "Cheese and Crackers!" → "cheese-and-crackers"
console.log(
  toKebabCase("Cheese and Crackers!"),
  "→ Expected: 'cheese-and-crackers'"
);
// camelCase input
// "wallaceAndGromit" → "wallace-and-gromit"
console.log(
  toKebabCase("wallaceAndGromit"),
  "→ Expected: 'wallace-and-gromit'"
);
// PascalCase input
// "TooManyPuddings" → "too-many-puddings"
console.log(toKebabCase("TooManyPuddings"), "→ Expected: 'too-many-puddings'");

// String with multiple spaces
// "too    many    spaces" → "too-many-spaces"
console.log(
  toKebabCase("too    many    spaces"),
  "→ Expected: 'too-many-spaces'"
);
// String with underscores
// "snake_case_example" → "snake-case-example"
console.log(
  toKebabCase("snake_case_example"),
  "→ Expected: 'snake-case-example'"
);

// Mixed separators
// "Mixed_separators and-Dashes" → "mixed-separators-and-dashes"
console.log(
  toKebabCase("Mixed_separators and-Dashes"),
  "→ Expected: 'mixed-separators-and-dashes'"
);
// String with numbers
// "version2Update" → "version2-update"
console.log(toKebabCase("version2Update"), "→ Expected: 'version2-update'");
