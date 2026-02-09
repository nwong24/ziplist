function zipList<T, U>(list1: T[], list2: U[]) {
  /* if invalid list is passed in return nothing */
  if (list1.length !== list2.length) {
    return undefined;
  }

  const ret: Array<T | U> = [];
  for (let i = 0; i < list1.length; i++) {
    ret.push(list1[i]);
    ret.push(list2[i]);
  }

  return ret;
}

function zipListTheFunctionalWay<T, U>(list1: T[], list2: U[]) {
  /* if invalid list is passed in return nothing */
  if (list1.length !== list2.length) {
    return undefined;
  }

  return list1.reduce((a: Array<T | U>, c: T) => {
    const val: U = list2[a.length / 2];
    a.push(c);
    a.push(val);
    return a;
  }, []);
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c', 'd'], [1, 2, 3, 4]));
