const { repair, success, fail } = require("./enhancer.js");
// test away!

const item = {
  name: "machete",
  durability: 40,
  enhancement: 0,
};

describe("testing enhancers", () => {
  it("repairs the item", () => {
    expect(repair(item)).toEqual({
      name: "machete",
      durability: 100,
      enhancement: 0,
    });
  });

  it("success enhancement increases by 1", () => {
    const repairedItem = success(item);

    expect(repairedItem).toEqual({ ...item, durability: 100, enhancement: 1 });
    expect(success(repairedItem)).toEqual({ ...repairedItem, enhancement: 2 });
  });

  it("enhancement fail decreases durability and enhancement", () => {
    const newItem = { ...item, enhancement: 15 };
    const newItem2 = { ...item, enhancement: 16 };
    const newItem3 = { ...item, enhancement: 17 };

    expect(fail(item)).toEqual({ ...item, durability: item.durability - 5 });

    expect(fail(newItem)).toEqual({
      ...newItem,
      durability: item.durability - 10,
    });

    expect(fail(newItem2)).toEqual({
      ...newItem2,
      durability: newItem2.durability - 10,
      enhancement: newItem2.enhancement - 1,
    });

    expect(fail(newItem3)).toEqual({
      ...newItem3,
      durability: newItem3.durability - 10,
      enhancement: newItem3.enhancement - 1,
    });
  });
});
