import getStatus from "../Level00/index.js";
import COLORS from "./utils.js";

try {
  const status = getStatus(true);
  if (status.status === "busy") {
    console.log(COLORS.GREEN, "Test passed");
  }
  else
  {
    console.log(COLORS.RED, "Test failed");
  }
  console.log("status", status);
}
catch (e) {
  console.error(COLORS.RED, "Test failed ");
  console.error(COLORS.RED, e.message);
}