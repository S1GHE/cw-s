import {Link} from "react-router-dom";
import {FC} from "react";
import {IPurpuleLink} from "src/shared/ui/link/type/LinkType.ts";
import {combineClasses} from "src/shared/utils/func/combine-classes";
import LinkStyle from "src/shared/ui/link/style/link.module.scss";
import {ArrowIcon} from "src/shared/assets/ui";

export const PurpleLink:FC<IPurpuleLink> = (props) => {
    const {to , className} = props;

    return (
        <Link to={to} className={
            combineClasses([
                className, LinkStyle.purple_link
            ])
        }>
            <object data={ArrowIcon} type="image/svg+xml" ></object>
        </Link>
    );
};