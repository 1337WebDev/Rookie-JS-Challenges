import addLength from "../Level01/index.js";
import COLORS from "./utils.js";

const test_a = () =>
{
    const result = addLength("apple ban");
    if (result[0] === "apple 5" && result[1] === "ban 3") {
        console.log(COLORS.GREEN, "Test A passed");
        return true;
    }
    else
    {
        console.log(COLORS.RED, "Test A failed");
        console.log("Your result", result);
        console.log("Expected result", ["apple 5", "ban 3"]);
        return false;
    }
}

const test_b = () =>
{
    const result = addLength("you will win");
    if (result[0] === "you 3" && result[1] === "will 4" && result[2] === "win 3") {
        console.log(COLORS.GREEN, "Test B passed");
        return true;
    }
    else
    {
        console.log(COLORS.RED, "Test B failed");
        console.log("Your result", result);
        console.log("Expected result", ["you 3", "will 4", "win 3"]);
        return false;
    }
}

const test_c = () =>
{
    const result = addLength("you");
    if (result[0] === "you 3") {
        console.log(COLORS.GREEN, "Test C passed");
        return true;
    }
    else
    {
        console.log(COLORS.RED, "Test C failed");
        console.log("Your result", result);
        console.log("Expected result", ["you 3"]);
        return false;
    }
}

try
{
    if (test_a() && test_b() && test_c())
        console.log(COLORS.GREEN, "All tests passed successfully!");
}
    catch (e) {
    console.error(COLORS.RED, "Test failed ");
    console.error(COLORS.RED, e.message);
}