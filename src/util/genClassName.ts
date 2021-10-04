
//input: "checkbox", {checkbox-sm: true,checkbox-danger:false}
// output: ["checkbox", "checkbox-sm"]
export type args = (string|{[key:string]:boolean})[]

const genClassName:(...args:args)=>string[] = (...rest:args) => {
//["checkbox",{checkbox-sm: true},{checkbox-danger:false}]
   return rest.reduce((acc:string[],curr)=>{
        if(typeof curr !== "string"){
            const temp = acc;
            //[["checkbox-sm", true],["checkbox-danger", false]]
            Object.entries(curr).forEach(([key,value])=>{
                value&&temp.push(key)
            })
            return temp;
        }else{
            return [curr, ...acc]
        }
        
    },[]);
}
export default genClassName;
