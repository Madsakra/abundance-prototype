// @ts-ignore
/// <reference types="nativewind/types" />

import { ReactNode } from "react";



export type RecordCardProps = {
    id:number;
    image?:ImageProps;
    itemDescription:string;
    itemSubheading:string;
    customButton?:ReactNode
}


export type RecordTableProps = {
    // ONLY FOR TESTING
    image?:ImageProps;
    tableHeader:string;
    tableData: RecordCardProps[];
}