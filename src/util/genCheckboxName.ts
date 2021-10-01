export type args = (string | { [key: string]: boolean })[]

const genCheckboxClassName: (...args: args) => string[] = (...rest: args) => {
  
  return rest.reduce((acc: string[], curr) => {
    if (typeof curr !== "string") {
      const temp = acc;
      Object.entries(curr).forEach(([key, value]) => {
        value && temp.push(key)
      })
      return temp;
    } else {
      return [curr, ...acc]
    }

  }, []);
}
export default genCheckboxClassName;
