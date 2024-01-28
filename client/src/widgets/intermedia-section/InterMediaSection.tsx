import {FC} from "react";
import {IInterMediaSectionType} from "src/widgets/intermedia-section/type/InterMediaSectionType.ts";
import InterMediaStyle from "src/widgets/intermedia-section/style/InterMedia.module.scss";
import {TextStyle} from "src/shared/style";

export const InterMediaSection:FC<IInterMediaSectionType> = (props) => {
    const {header, subtitle, children, className} = props;

    return (
        <section className={className}>
            <div className={InterMediaStyle.inter_container}>
                <div>
                    <p className={TextStyle.paragraph__lighter__20}>{subtitle}</p>
                    <h2 className={TextStyle.header}>{header}</h2>
                </div>

                <div>
                    {children}
                </div>
            </div>

            <div className={InterMediaStyle.inter_hr}></div>
        </section>
    );
};