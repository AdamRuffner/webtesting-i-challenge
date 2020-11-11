module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if (item.enhancement === 20) {
    return { ...item };
  }
  const repairedItem = repair(item);
  return { ...repairedItem, enhancement: repairedItem.enhancement + 1 };
}

function fail(item) {
  if (item.enhancement >= 16) {
    return {
      ...item,
      durability: item.durability - 10,
      enhancement: item.enhancement - 1,
    };
  }

  if (item.enhancement >= 15) {
    return { ...item, durability: item.durability - 10 };
  }

  return { ...item, durability: item.durability - 5 };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
