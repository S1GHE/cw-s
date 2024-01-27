import {FC} from "react";
import {IBaseBtnType} from "src/shared/ui/button/types/BtnType.ts";
import {combineClasses} from "src/shared/utils/func/combine-classes";
import BtnStyle from "src/shared/ui/button/style/Btn.module.scss";

export const BaseBtn:FC<IBaseBtnType> = (props) => {
    const {
        className,
        children,
        onClick
    } = props

    return (
        <button className={combineClasses([
            className, BtnStyle.base
        ])} onClick={onClick}>
            {children}
        </button>
    );
};