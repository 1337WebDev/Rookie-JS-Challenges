import permutations from "../Level09/index.js";
import COLORS from "./utils.js";

const test_a = () => {
    const expectedResult = ["a"];
    const result = permutations("a");
    if (JSON.stringify(result) === JSON.stringify(expectedResult)) {
        console.log(COLORS.GREEN, "Test A passed");
        return true;
    } else {
        console.log(COLORS.RED, "Test A failed");
        console.log("Your result", result);
        console.log("Expected result", expectedResult);
        return false;
    }
}

const test_b = () => {
    const expectedResult = ["ab", "ba"];
    const result = permutations("ab");
    if (JSON.stringify(result) === JSON.stringify(expectedResult)) {
        console.log(COLORS.GREEN, "Test B passed");
        return true;
    } else {
        console.log(COLORS.RED, "Test B failed");
        console.log("Your result", result);
        console.log("Expected result", expectedResult);
        return false;
    }
}

const test_c = () => {
    const expectedResult = ["abc", "acb", "bac", "bca", "cab", "cba"];
    const result = permutations("abc");
    if (JSON.stringify(result) === JSON.stringify(expectedResult)) {
        console.log(COLORS.GREEN, "Test C passed");
        return true;
    } else {
        console.log(COLORS.RED, "Test C failed");
        console.log("Your result", result);
        console.log("Expected result", expectedResult);
        return false;
    }
}

const test_d = () => {
    const expectedResult = ["aabb", "abab", "abba", "baab", "baba", "bbaa"];
    const result = permutations("aabb");
    if (JSON.stringify(result) === JSON.stringify(expectedResult)) {
        console.log(COLORS.GREEN, "Test D passed");
        return true;
    } else {
        console.log(COLORS.RED, "Test D failed");
        console.log("Your result", result);
        console.log("Expected result", expectedResult);
        return false;
    }
}

const test_e = () => {
    const expectedResult = [
      "aabbcc",
      "aabcbc",
      "aabccb",
      "aacbbc",
      "aacbcb",
      "aaccbb",
      "ababcc",
      "abacbc",
      "abaccb",
      "abbacc",
      "abbcac",
      "abbcca",
      "abcabc",
      "abcacb",
      "abcbac",
      "abcbca",
      "abccab",
      "abccba",
      "acabbc",
      "acabcb",
      "acacbb",
      "acbabc",
      "acbacb",
      "acbbac",
      "acbbca",
      "acbcab",
      "acbcba",
      "accabb",
      "accbab",
      "accbba",
      "baabcc",
      "baacbc",
      "baaccb",
      "babacc",
      "babcac",
      "babcca",
      "bacabc",
      "bacacb",
      "bacbac",
      "bacbca",
      "baccab",
      "baccba",
      "bbaacc",
      "bbacac",
      "bbacca",
      "bbcaac",
      "bbcaca",
      "bbccaa",
      "bcaabc",
      "bcaacb",
      "bcabac",
      "bcabca",
      "bcacab",
      "bcacba",
      "bcbaac",
      "bcbaca",
      "bcbcaa",
      "bccaab",
      "bccaba",
      "bccbaa",
      "caabbc",
      "caabcb",
      "caacbb",
      "cababc",
      "cabacb",
      "cabbac",
      "cabbca",
      "cabcab",
      "cabcba",
      "cacabb",
      "cacbab",
      "cacbba",
      "cbaabc",
      "cbaacb",
      "cbabac",
      "cbabca",
      "cbacab",
      "cbacba",
      "cbbaac",
      "cbbaca",
      "cbbcaa",
      "cbcaab",
      "cbcaba",
      "cbcbaa",
      "ccaabb",
      "ccabab",
      "ccabba",
      "ccbaab",
      "ccbaba",
      "ccbbaa",
    ];
    const result = permutations("aabbcc");
    if (JSON.stringify(result) === JSON.stringify(expectedResult)) {
        console.log(COLORS.GREEN, "Test E passed");
        return true;
    }
    else {
        console.log(COLORS.RED, "Test E failed");
        console.log("Your result", result);
        console.log("Expected result", expectedResult);
        return false;
    }
}

try
{
    if (test_a() && test_b() && test_c() && test_d() && test_e()) {
        console.log(COLORS.GREEN, "All tests passed");
    }
}
catch (e)
{
    console.log(COLORS.RED, "Test failed");
    console.log(e);
}