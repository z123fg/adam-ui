type args = string[];

const myGenClassName : (prefix?:string, ...args:args) => string[] = (prefix?:string, ...rest:args) => {
    const newRest:string[] = rest.map((str, index) => {
        if(index <= 3) {
        if(str !== "" ) {
            if(prefix){
                return `${prefix}-${str}`
            }
        };
    }
        return str
    })

    return newRest;
}

export default myGenClassName;