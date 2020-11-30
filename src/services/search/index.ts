//receive one array o objects and sarch a string inside
const search = (searching: string, data: object[]): { [key: string]: any } => {
  const matcher = (regexp: any) => {
    return function (obj: any) {
      let found = false;
      Object.keys(obj).forEach(function (key) {
        if (!found) {
          if (typeof obj[key] == "string" && regexp.exec(obj[key])) {
            found = true;
          }
        }
      });
      return found;
    };
  };
  let re1 = new RegExp("\\b" + searching + "\\b", "i");
  let matches = data.filter(matcher(re1));
  return { count: matches.length, result: matches };
};

export default search;
