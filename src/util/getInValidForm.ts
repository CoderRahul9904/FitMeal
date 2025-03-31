export const getInValidForm=(form:string)=>{
    return form.split(",").map((val:string)=>upperCaseFirstLetter(val))
}

export const upperCaseFirstLetter=(val:string)=>{
    return String(val).charAt(0).toUpperCase()+String(val).charAt(1).toUpperCase() + String(val).slice(2);
}