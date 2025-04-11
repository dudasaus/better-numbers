import { assertEquals } from "jsr:@std/assert";
import * as BetterNumbers from "./betternumbers.ts";

// TODO: Test the parse cases.

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
