// @ts-ignore
/// <reference types="nativewind/types" />

import { ReactNode } from "react";



export type RecordCardProps = {
    id:number;
    image?:ImageProps;
    foodName:string,
    calories:number,
    unitMeasurement:string;
    customButton?:ReactNode;
    carbs?:number;
    fats?:number;
    protein?:number; 
    
}


export type RecordTableProps = {
    // ONLY FOR TESTING
    image?:ImageProps;
    tableHeader:string;
    tableData: RecordCardProps[];
    finalTabName:string,
    // FOR PROTOTPYE
    totalCalories:number;
    editable?:boolean;
}