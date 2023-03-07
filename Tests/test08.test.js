import triangle from "../Level08/index.js";
import COLORS from "./utils.js";

const test_a = () =>
{
  const expectedResult = 'G';
  const result = triangle("RBRGBRBGGRRRBGBBBGG");
  if (result === expectedResult) {
    console.log(COLORS.GREEN, "Test A passed");
    return true;
  } else {
    console.log(COLORS.RED, "Test A failed");
    console.log("Your result", result);
    console.log("Expected result", expectedResult);
    return false;
  }
}

const test_b = () =>
{
  const expectedResult = 'B';
  const result = triangle("RGBG");
  if (result === expectedResult) {
    console.log(COLORS.GREEN, "Test B passed");
    return true;
  } else {
    console.log(COLORS.RED, "Test B failed");
    console.log("Your result", result);
    console.log("Expected result", expectedResult);
    return false;
  }
}

const test_c = () =>
{
  const expectedResult = 'G';
  const result = triangle("RBRGBRB");
  if (result === expectedResult) {
    console.log(COLORS.GREEN, "Test C passed");
    return true;
  } else {
    console.log(COLORS.RED, "Test C failed");
    console.log("Your result", result);
    console.log("Expected result", expectedResult);
    return false;
  }
}

const test_d = () =>
{
  const expectedResult = 'G';
  const result = triangle("RBRGBRBGGRRRBGBBBGG");
  if (result === expectedResult) {
    console.log(COLORS.GREEN, "Test D passed");
    return true;
  } else {
    console.log(COLORS.RED, "Test D failed");
    console.log("Your result", result);
    console.log("Expected result", expectedResult);
    return false;
  }
}

const test_e = () =>
{
  const expectedResult = 'B';
  const result = triangle("RGBG");
  if (result === expectedResult) {
    console.log(COLORS.GREEN, "Test E passed");
    return true;
  } else {
    console.log(COLORS.RED, "Test E failed");
    console.log("Your result", result);
    console.log("Expected result", expectedResult);
    return false;
  }
}

const test_f = () =>
{
  const expectedResult = 'G';
  const result = triangle("RBRGBRB");
  if (result === expectedResult) {
    console.log(COLORS.GREEN, "Test F passed");
    return true;
  } else {
    console.log(COLORS.RED, "Test F failed");
    console.log("Your result", result);
    console.log("Expected result", expectedResult);
    return false;
  }
}

const test_g = () =>
{
  const expectedResult = 'G';
  const result = triangle("RBRGBRBGGRRRBGBBBGG");
  if (result === expectedResult) {
    console.log(COLORS.GREEN, "Test G passed");
    return true;
  } else {
    console.log(COLORS.RED, "Test G failed");
    console.log("Your result", result);
    console.log("Expected result", expectedResult);
    return false;
  }
}

try
{
  if (test_a() && test_b() && test_c() && test_d() && test_e() && test_f() && test_g())
  {
    console.log(COLORS.GREEN, "All tests passed");
  }
}
catch (e)
{
  console.log(COLORS.RED, "Error", e);
}