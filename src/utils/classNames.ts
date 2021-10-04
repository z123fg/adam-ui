//input: "btn", {btn-sm: true,btn-danger:false}
//output: ["btn", "btn-sm"]

export type args = string | {[key: string]: boolean};
function classNames(...args: args[]): string {
  return args
    .reduce((acc, cur) => {
      if (typeof cur === 'string') {
        acc.push(cur);
      } else if (typeof cur === 'object') {
        for (let key in cur) {
          if (cur.hasOwnProperty(key) && cur[key]) {
            acc.push(key);
          }
        }
      }
      return acc;
    }, [] as string[])
    .join(' ');
};

export default classNames;