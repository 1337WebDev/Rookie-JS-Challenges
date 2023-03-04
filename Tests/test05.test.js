import findOdd from "../Level05/index.js";
import COLORS from "./utils.js";

const test_a = () =>
{
    const result = findOdd([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5]);
    if (result === 5)
    {
        console.log(COLORS.GREEN, "Test A passed");
        return true;
    }
    else
    {
        console.log(COLORS.RED, "Test A failed");
        console.log("Your result", result);
        console.log("Expected result", 5);
        return false;
    }
}

const test_b = () =>
{
    const result = findOdd([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 5, 5]);
    if (result === 5)
    {
        console.log(COLORS.GREEN, "Test B passed");
        return true;
    }
    else
    {
        console.log(COLORS.RED, "Test B failed");
        console.log("Your result", result);
        console.log("Expected result", 5);
        return false;
    }
}

const test_c = () =>
{
    const result = findOdd([1, 1, 1, 2, 2, 3, 3, 4, 4, 6, 6, 6, 6]);
    if (result === 1)
    {
        console.log(COLORS.GREEN, "Test C passed");
        return true;
    }
    else
    {
        console.log(COLORS.RED, "Test C failed");
        console.log("Your result", result);
        console.log("Expected result", 1);
        return false;
    }
}

const test_d = () =>
{
    const result = findOdd([3]);
    if (result === 3)
    {
        console.log(COLORS.GREEN, "Test D passed");
        return true;
    }
    else
    {
        console.log(COLORS.RED, "Test D failed");
        console.log("Your result", result);
        console.log("Expected result", 3);
        return false;
    }
}

const test_e = () =>
{
    const result = findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]);
    if (result === 10)
    {
        console.log(COLORS.GREEN, "Test E passed");
        return true;
    }
    else
    {
        console.log(COLORS.RED, "Test E failed");
        console.log("Your result", result);
        console.log("Expected result", 10);
        return false;
    }
}

const test_f = () =>
{
    const result = findOdd([1, 1, 1, 1, 1, 1, 10, 10, 10, 1, 10, 10, 10]);
    if (result === 1)
    {
        console.log(COLORS.GREEN, "Test F passed");
        return true;
    }
    else
    {
        console.log(COLORS.RED, "Test F failed");
        console.log("Your result", result);
        console.log("Expected result", 1);
        return false;
    }
}

try
{
    if (test_a() && test_b() && test_c() && test_d() && test_e() && test_f())
    {
        console.log(COLORS.GREEN, "All tests passed");
    }
}
catch (e)
{
    console.error(COLORS.RED, "Test failed ");
    console.error(COLORS.RED, e.message);
}
