import removeConsecutiveDuplicates from "../Level02/index.js"
import COLORS from "./utils.js"

const test_a = () =>
{
    const result = removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta");
    if (result === "alpha beta gamma delta alpha beta gamma delta") {
        console.log(COLORS.GREEN, "Test A passed");
        return true;
    }
    else
    {
        console.log(COLORS.RED, "Test A failed");
        console.log("Your result", result);
        console.log("Expected result", "alpha beta gamma delta alpha beta gamma delta");
        return false;
    }
}

const test_b = () =>
{
    const result = removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta");
    if (result === "alpha beta gamma delta") {
        console.log(COLORS.GREEN, "Test B passed");
        return true;
    }
    else
    {
        console.log(COLORS.RED, "Test B failed");
        console.log("Your result", result);
        console.log("Expected result", "alpha beta gamma delta");
        return false;
    }
}

const test_c = () =>
{
    const result = removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma");
    if (result === "alpha beta gamma") {
        console.log(COLORS.GREEN, "Test C passed");
        return true;
    }
    else
    {
        console.log(COLORS.RED, "Test C failed");
        console.log("Your result", result);
        console.log("Expected result", "alpha beta gamma");
        return false;
    }
}

const test_d = () =>
{
    const result = removeConsecutiveDuplicates("alpha beta beta");
    if (result === "alpha beta") {
        console.log(COLORS.GREEN, "Test D passed");
        return true;
    }
    else
    {
        console.log(COLORS.RED, "Test D failed");
        console.log("Your result", result);
        console.log("Expected result", "alpha beta");
        return false;
    }
}

const test_e = () =>
{
    const result = removeConsecutiveDuplicates("alpha beta");
    if (result === "alpha beta") {
        console.log(COLORS.GREEN, "Test E passed");
        return true;
    }
    else
    {
        console.log(COLORS.RED, "Test E failed");
        console.log("Your result", result);
        console.log("Expected result", "alpha beta");
        return false;
    }
}

try
{
    if (test_a() && test_b() && test_c() && test_d() && test_e())
        console.log(COLORS.GREEN, "All tests passed successfully!");
}
catch (e) {
    console.error(COLORS.RED, "Test failed ");
    console.error(COLORS.RED, e.message);
}