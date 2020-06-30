function deepEqual(obj1, obj2){
  if (obj1 === obj2){
    return true;
  }
  else if ((typeof obj1 == "object" && obj1 != null) && (typeof obj2 == "object" && obj2 != null)) {
    if (Object.keys(obj1).length != Object.keys(obj2).length)
      return false;

    for (let prop in obj1) {
      if (!(prop in obj2)) return false;
      if (!deepEqual(obj1[prop], obj2[prop])) return false;
    }
    return true;
  }
  else
    return false;
}

let testNum = 1;
const testFunc = function(obj1, obj2, expVal){
  let result = '';
  if (deepEqual(obj1, obj2) != expVal){
    result = "Fail";
  } else{
    result = "Pass";
  }
  console.log('=== Test ', testNum, ":", result, '===', obj1, " vs ", obj2)
  testNum++
}

let obj = {here: { is: "an" }, object: 2};
testFunc(obj, obj, true);
testFunc(obj, { here: 1, object: 2 }, false);
testFunc(obj, { here: { is: "an" }, object: 2 }, true);
testFunc(obj, { here: { is: "and" }, object: 2 }, false);
testFunc(null, { here: { is: "an" }, object: 2 }, false);
testFunc(null, null, true);
testFunc(1, 2, false);
testFunc(1, "1", false);
testFunc(3, 3, true);
testFunc([3,4,5], [3,4,5], true);
testFunc([3,5,5], [3,4,5], false);
testFunc([3,4], [3,4,5], false);