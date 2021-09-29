
//input: "btn", {btn-sm: true,btn-danger:false}
// output: ["btn", "btn-sm"]
export type args = (string|{[key:string]:boolean})[]

const genClassName:(...args:args)=>string[] = (...rest:args) => {
//["btn",{btn-sm:true},{btn-danger:false}]
   return rest.reduce((acc:string[],curr)=>{
        if(typeof curr !== "string"){
            const temp = acc;
            //[["btn-sm", true],["btn-danger", false]]
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
