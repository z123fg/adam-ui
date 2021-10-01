import "@testing-library/jest-dom";
import genCheckboxClassName, { args } from "./genCheckboxName";

describe("test genCheckboxClassName function", () => {
  it("should generate class name array as expected", () => {
    const mockInput = [
      "test1",
      { test2: true, test3: true, test4: false },
      { test5: false, test6: true },
      "test7",
    ] as args;
    const mockOutput = ["test1","test2","test3","test6","test7"].sort();
    //
    expect(genCheckboxClassName(...mockInput).sort()).toEqual(mockOutput);
  });
});
