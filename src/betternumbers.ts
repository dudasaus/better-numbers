/**
 * Translates a string into a number. Supports commas, k, m, and b.
 * @param message
 * @returns message parsed as a string, or NaN.
 */
export function parse(message: string): number {
  message = message.trim().replaceAll(",", "");
  const popBack = () => {
    message = message.substring(0, message.length - 1);
  };
  let multiplier = 1;
  if (message.endsWith("%")) {
    multiplier = 0.01;
    popBack();
  } else if (message.at(-1)?.toLowerCase() === "k") {
    multiplier = 1000;
    popBack();
  } else if (message.at(-1)?.toLocaleLowerCase() == "m") {
    multiplier = 1e6;
    popBack();
  } else if (message.at(-1)?.toLocaleLowerCase() == "b") {
    multiplier = 1e9;
    popBack();
  }
  return Number(message) * multiplier;
}

/**
 * Formats a number to a human readable string with commas.
 * Limits to two decimals, uses M and B suffixes when appropriate.
 * @param value
 * @returns a formatted string
 */
export function format(value: number): string {
  const commas = (n: number) =>
    n.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });

  if (Math.abs(value) >= 1e9 - 0.005) {
    return commas(value / 1e9) + "B";
  } else if (Math.abs(value) >= 1e6 - 0.005) {
    return commas(value / 1e6) + "M";
  } else {
    return value.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
  }
}
