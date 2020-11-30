//clone one object or array
const deepClone = (obj: any): any => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  let i;

  // Handle: Date
  if (obj instanceof Date) {
    let cloned = new Date(obj.getTime());
    return cloned;
  }

  // Handle: array
  if (obj instanceof Array) {
    let l;
    let cloned = [];
    for (i = 0, l = obj.length; i < l; i++) {
      cloned[i] = deepClone(obj[i]);
    }

    return cloned;
  }

  // Handle: object
  let cloned: any = {};
  for (i in obj)
    if (obj.hasOwnProperty(i)) {
      cloned[i] = deepClone(obj[i]);
    }

  return cloned;
};

export default deepClone;
