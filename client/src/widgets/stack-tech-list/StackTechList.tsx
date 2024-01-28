import {FC} from "react";
import {FlexTextIcon} from "src/shared/ui/flex";
import StackTechListStyle from "src/widgets/stack-tech-list/style/StackTechList.module.scss";
import {IStackTechListType} from "src/widgets/stack-tech-list/type/StackTechListType.ts";
import {StartTechIcon} from "src/shared/assets/ui";
import {TextStyle} from "src/shared/style";

export const StackTechList:FC<IStackTechListType> = ({children}) => {
    return (
        <div className={StackTechListStyle.stack_list}>
            <div className={StackTechListStyle.stack_list_wrapper}>
                {
                    children.map((el) => <FlexTextIcon src={StartTechIcon} key={el}>
                        <p className={TextStyle.paragraph__lighter}>
                            {el}
                        </p>
                    </FlexTextIcon>)
                }
            </div>
        </div>
    );
};