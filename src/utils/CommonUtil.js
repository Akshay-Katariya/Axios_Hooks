export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const isObjectDefined = (Obj) => {
  if (
    Obj === null ||
    typeof Obj !== 'object' ||
    Object.prototype.toString.call(Obj) === '[object Array]'
  ) {
    return false;
  } else {
    for (var prop in Obj) {
      if (Obj.hasOwnProperty(prop)) {
        return true;
      }
    }
    //return JSON.stringify(Obj) !== JSON.stringify({})
  }
};

export const isArrayDefined = (arr) => {
  if (Array.isArray(arr) && arr.length) return true;
  else return false;
};
