import greedyThief from "../Level07/index.js";
import COLORS from "./utils.js";

const test_a = () => {
  const items = [
    { weight: 2, price: 6 },
    { weight: 2, price: 3 },
    { weight: 6, price: 5 },
    { weight: 5, price: 4 },
    { weight: 4, price: 6 }
  ];
  const n = 10;
  const expectedResult = [
    { weight: 2, price: 6 },
    { weight: 2, price: 3 },
    { weight: 4, price: 6 }
  ];
  const result = greedyThief(items, n);
  if (JSON.stringify(result) === JSON.stringify(expectedResult)) {
    console.log(COLORS.GREEN, "Test A passed");
    return true;
  } else {
    console.log(COLORS.RED, "Test A failed");
    console.log("Your result", result);
    console.log("Expected result", expectedResult);
    return false;
  }
};

const test_b = () => {
  const items = [
    { weight: 2, price: 6 },
    { weight: 4, price: 8 },
    { weight: 6, price: 9 }
  ];
  const n = 1;
  const expectedResult = [];
  const result = greedyThief(items, n);
  if (JSON.stringify(result) === JSON.stringify(expectedResult)) {
    console.log(COLORS.GREEN, "Test B passed");
    return true;
  } else {
    console.log(COLORS.RED, "Test B failed");
    console.log("Your result", result);
    console.log("Expected result", expectedResult);
    return false;
  }
};

const test_c = () => {
  const items = [
    { weight: 2, price: 6 },
    { weight: 2, price: 3 },
    { weight: 6, price: 5 },
    { weight: 5, price: 4 },
    { weight: 4, price: 6 }
  ];
  const n = 100;
  const expectedResult = items;
  const result = greedyThief(items, n);
  if (JSON.stringify(result) === JSON.stringify(expectedResult)) {
    console.log(COLORS.GREEN, "Test C passed");
    return true;
  } else {
    console.log(COLORS.RED, "Test C failed");
    console.log("Your result", result);
    console.log("Expected result", expectedResult);
    return false;
  }
};

const test_d = () => {
  const items = [
    { weight: 2, price: 6 },
    { weight: 4, price: 8 },
    { weight: 6, price: 9 }
  ];
  const n = 5;
  const expectedResult = [{ weight: 2, price: 6 }];
  const result = greedyThief(items, n);
  if (JSON.stringify(result) === JSON.stringify(expectedResult)) {
    console.log(COLORS.GREEN, "Test D passed");
    return true;
  } else {
    console.log(COLORS.RED, "Test D failed");
    console.log("Your result", result);
    console.log("Expected result", expectedResult);
    return false;
  }
};

const test_e = () => {
  const items = [
    { weight: 2, price: 6 },
    { weight: 3, price: 9 },
    { weight: 4, price: 12 }
  ];
  const n = 5;
  const expectedResult = [{ weight: 2, price: 6 }, { weight: 3, price: 9 }];
  const result = greedyThief(items, n);
  if (JSON.stringify(result) === JSON.stringify(expectedResult)) {
    console.log(COLORS.GREEN, "Test E passed");
    return true;
  } else {
    console.log(COLORS.RED, "Test E failed");
    console.log("Your result", result);
    console.log("Expected result", expectedResult);
    return false;
  }
};

try {
    if (test_a() && test_b() && test_c() && test_d() && test_e()) {

        console.log(COLORS.GREEN, "All tests passed");
    }
}
catch (e) {
    console.log(COLORS.RED, "Tests failed ");
    console.log(e);
}


