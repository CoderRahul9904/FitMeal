import { DataQuery } from "./dataQueryInterface";


export interface PaginationOptions {
    limit: number;
    offset: number;
    dataQuery: DataQuery
}