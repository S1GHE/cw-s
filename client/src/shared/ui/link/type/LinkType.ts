import {ReactNode} from "react";

export interface IPurpuleLink{
    to: string
    className?: string | undefined
}

export interface IBaseLinkType{
    to: string
    children: ReactNode,
    className?: string | undefined
}