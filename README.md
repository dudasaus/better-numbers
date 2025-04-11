# Better Numbers

A JavaScript library for parsing and formatting numbers.

## Usage

```javascript
import { formatNumber, parseNumber } from "better-numbers";

// Parsing strings to numbers
console.log(parseNumber("1,000")); // Output: 1000
console.log(parseNumber("10k")); // Output: 10000
console.log(parseNumber("1.5M")); // Output: 1500000
console.log(parseNumber("0.25b")); // Output: 250000000
console.log(parseNumber("1,234.56")); // Output: 1234.56
console.log(parseNumber("50%")); // Output: 0.5
console.log(parseNumber("  789  ")); // Output: 789
console.log(parseNumber("invalid")); // Output: NaN

// Formatting numbers to strings
console.log(formatNumber(1000)); // Output: "1,000"
console.log(formatNumber(1000000)); // Output: "1M"
console.log(formatNumber(1500000000)); // Output: "1.5B"
console.log(formatNumber(1234.567)); // Output: "1,234.57"
console.log(formatNumber(0.001)); // Output: "0.001"
```
