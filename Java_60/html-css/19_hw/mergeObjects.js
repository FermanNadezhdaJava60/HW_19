export function mergeObjects(firstObj, secondObj, isFirstPref) {
  return isFirstPref
    ? { ...firstObj, ...secondObj, ...firstObj }
    : { ...firstObj, ...secondObj };
}
