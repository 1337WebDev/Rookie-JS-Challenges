import getStatus from "../Level00/index.js";
import COLORS from "./utils.js";

const test_a = () => {
  const status = getStatus(true);
  if (status.status === "busy") {
    console.log(COLORS.GREEN, "Test passed");
    return true;
  }
  else
  {
    console.log(COLORS.RED, "Test failed");
    console.log("Your output", status);
    console.log("Expected output", { status: "busy" });
    return false;
  }
}

try {
  if (test_a())
    console.log(COLORS.GREEN, "All tests passed successfully!");
}
catch (e) {
  console.error(COLORS.RED, "Test failed ");
  console.error(COLORS.RED, e.message);
}