import {ReactNode} from "react";

export interface IInterMediaSectionType {
    header: string
    subtitle: string
    children?: ReactNode | undefined
    className?: string | undefined
}