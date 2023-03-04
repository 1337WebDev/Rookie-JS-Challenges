import score from "../Level06/index.js";
import COLORS from "./utils.js";

const test_a = () => {
    const result = score([1, 1, 1, 3, 1]);
    if (result === 1100) {
        console.log(COLORS.GREEN, "Test A passed");
        return true;
    } else {
        console.log(COLORS.RED, "Test A failed");
        console.log("Your result", result);
        console.log("Expected result", 1100);
        return false;
    }
    }

const test_b = () => {
    const result = score([5, 1, 3, 4, 1]);
    if (result === 250) {
        console.log(COLORS.GREEN, "Test B passed");
        return true;
    } else {
        console.log(COLORS.RED, "Test B failed");
        console.log("Your result", result);
        console.log("Expected result", 250);
        return false;
    }
    }

const test_c = () => {
    const result = score([1, 1, 1, 3, 1, 1]);
    if (result === 1200) {
        console.log(COLORS.GREEN, "Test C passed");
        return true;
    } else {
        console.log(COLORS.RED, "Test C failed");
        console.log("Your result", result);
        console.log("Expected result", 1200);
        return false;
    }
    }

const test_d = () => {
    const result = score([2, 4, 4, 5, 4]);
    if (result === 450) {
        console.log(COLORS.GREEN, "Test D passed");
        return true;
    } else {
        console.log(COLORS.RED, "Test D failed");
        console.log("Your result", result);
        console.log("Expected result", 450);
        return false;
    }
    }

const test_e = () => {
    const result = score([5, 5, 5, 5, 4]);
    if (result === 550) {
        console.log(COLORS.GREEN, "Test E passed");
        return true;
    } else {
        console.log(COLORS.RED, "Test E failed");
        console.log("Your result", result);
        console.log("Expected result", 550);
        return false;
    }
    }

const test_f = () => {
    const result = score([1, 1, 1, 1, 1]);
    if (result === 1200) {
        console.log(COLORS.GREEN, "Test F passed");
        return true;
    } else {
        console.log(COLORS.RED, "Test F failed");
        console.log("Your result", result);
        console.log("Expected result", 1200);
        return false;
    }
    }

const test_g = () => {
    const result = score([1, 1, 1, 5, 1]);
    if (result === 1150) {
        console.log(COLORS.GREEN, "Test G passed");
        return true;
    } else {
        console.log(COLORS.RED, "Test G failed");
        console.log("Your result", result);
        console.log("Expected result", 1150);
        return false;
    }
    }

const test_h = () => {
    const result = score([2, 3, 4, 6, 2]);
    if (result === 0) {
        console.log(COLORS.GREEN, "Test H passed");
        return true;
    } else {
        console.log(COLORS.RED, "Test H failed");
        console.log("Your result", result);
        console.log("Expected result", 0);
        return false;
    }
    }

const test_i = () => {
    const result = score([4, 4, 4, 3, 3]);
    if (result === 400) {
        console.log(COLORS.GREEN, "Test I passed");
        return true;
    } else {
        console.log(COLORS.RED, "Test I failed");
        console.log("Your result", result);
        console.log("Expected result", 400);
        return false;
    }
    }

const test_j = () => {
    const result = score([2, 4, 4, 5, 4, 4]);
    if (result === 450) {
        console.log(COLORS.GREEN, "Test J passed");
        return true;
    } else {
        console.log(COLORS.RED, "Test J failed");
        console.log("Your result", result);
        console.log("Expected result", 450);
        return false;
    }
    }

try {
    if (test_a() && test_b() && test_c() && test_d() && test_e() && test_f() && test_g() && test_h() && test_i() && test_j()) {
        console.log(COLORS.GREEN, "All tests passed");
    }
}
catch (e) {
    console.error(COLORS.RED, "Test failed ");
    console.error(COLORS.RED, e.message);
}