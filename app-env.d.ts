// @ts-ignore
/// <reference types="nativewind/types" />



export type RecordCardProps = {
    image:ImageProps;
    itemDescription:string;
    itemSubheading:string;
    editable:boolean;
    operation:string;
}


export type RecordTableProps = {
    tableHeader:string;
    tableData: RecordCardProps[];
}