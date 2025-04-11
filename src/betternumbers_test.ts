import { assertEquals } from "jsr:@std/assert";
import * as BetterNumbers from "./betternumbers.ts";

Deno.test("parse", () => {
  assertEquals(
    BetterNumbers.parse("nope"),
    NaN,
  );
  assertEquals(
    BetterNumbers.parse("1e6"),
    1e6,
  );
  assertEquals(
    BetterNumbers.parse("8%"),
    0.08,
  );
  assertEquals(
    BetterNumbers.parse("1,000,012.9771"),
    1000012.9771,
  );
  assertEquals(
    BetterNumbers.parse("401k"),
    401000,
  );
  assertEquals(
    BetterNumbers.parse("  401k  "),
    401000,
  );
  assertEquals(
    BetterNumbers.parse("7.999M"),
    7999000,
  );
  assertEquals(
    BetterNumbers.parse("0.5B"),
    500000000,
  );
  assertEquals(
    BetterNumbers.parse("-1.7m"),
    -1700000,
  );
  assertEquals(
    BetterNumbers.parse("-8b"),
    -8000000000,
  );
});

Deno.test("format handles the billion case", () => {
  assertEquals(
    BetterNumbers.format(999.999 * 1e6),
    "1B",
  );
  assertEquals(
    BetterNumbers.format(2 * 1e9),
    "2B",
  );
  assertEquals(
    BetterNumbers.format(2.5 * 1e9),
    "2.5B",
  );
  assertEquals(
    BetterNumbers.format(2.56 * 1e9),
    "2.56B",
  );
  assertEquals(
    BetterNumbers.format(2.566 * 1e9),
    "2.57B",
  );
});

Deno.test("format handles the million case", () => {
  assertEquals(
    BetterNumbers.format(999999.995),
    "1M",
  );
  assertEquals(
    BetterNumbers.format(1e6),
    "1M",
  );
  assertEquals(
    BetterNumbers.format(2 * 1e6),
    "2M",
  );
  assertEquals(
    BetterNumbers.format(2.5 * 1e6),
    "2.5M",
  );
  assertEquals(
    BetterNumbers.format(2.56 * 1e6),
    "2.56M",
  );
  assertEquals(
    BetterNumbers.format(2.566 * 1e6),
    "2.57M",
  );
  assertEquals(
    BetterNumbers.format(999.994 * 1e6),
    "999.99M",
  );
});

Deno.test("format handles less than million case", () => {
  assertEquals(
    BetterNumbers.format(0),
    "0",
  );
  assertEquals(
    BetterNumbers.format(0.001),
    "0",
  );
  assertEquals(
    BetterNumbers.format(0.01),
    "0.01",
  );
  assertEquals(
    BetterNumbers.format(1000),
    "1,000",
  );
  assertEquals(
    BetterNumbers.format(1000.99),
    "1,000.99",
  );
  assertEquals(
    BetterNumbers.format(999999),
    "999,999",
  );
  assertEquals(
    BetterNumbers.format(999999.994),
    "999,999.99",
  );
});
