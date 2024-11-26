


export type DataQuery = {
    cuisine?: string;
    cook_time?: RangeInput;
    diet?: string;
    course?: string;
    prep_time?: RangeInput;
    name?: string;
    ingredients_name?: string[]
};
  

type RangeInput ={
    gte?: number;
    lte?: number;
}