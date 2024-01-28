import {FC} from "react";
import {IFlexTextIcon} from "src/shared/ui/flex/types/FlexType.ts";
import {combineClasses} from "src/shared/utils/func/combine-classes";
import FlexStyle from "src/shared/ui/flex/style/Flex.module.scss";

export const FlexTextIcon:FC<IFlexTextIcon> = (props) => {
    const {
        src,children, className, revers=false
    } = props;

    return (
        <div className={
            combineClasses([
                className, FlexStyle.flex_text_icon
            ])
        } style={revers ? {flexDirection: "row-reverse"}: undefined}>
            <object data={src} type="image/svg+xml"></object>

            {children}
        </div>
    );
}