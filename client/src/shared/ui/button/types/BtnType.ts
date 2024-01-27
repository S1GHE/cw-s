import {ReactNode} from "react";

export interface IBaseBtnType{
    children: ReactNode
    className?: string | undefined;
    onClick?: () => void | undefined;
}