function findUniqueElements(array1, array2) {
  const uniqueElements = array1
    .filter((element) => !array2.includes(element))
    .concat(array2.filter((element) => !array1.includes(element)));

  return uniqueElements;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(findUniqueElements(array1, array2));
