import {PurpleLink} from "src/shared/ui/link/purple-link/ PurpleLink.tsx";
import HomeStyle from "src/pages/Home/style/Home.module.scss";
import AbstractOne from "src/pages/Home/assets/Abstract1.svg";
import {TextStyle} from "src/shared/style";
import {StackTechList} from "src/widgets/stack-tech-list";
import {BannersOne, PersonPhoto} from "src/shared/assets/banners";
import {InterMediaSection} from "src/widgets/intermedia-section";

export const Home = () => {
    return (
        <>
            <section>
                <div className={HomeStyle.m_name}>
                    <div>
                        <p className={TextStyle.paragraph__lighter__20}>
                            SENIOR DESIGNER
                        </p>

                        <h2 className={TextStyle.header}>
                            Шамисев Инсаф
                        </h2>
                    </div>

                    <div>
                        <div className={HomeStyle.m_name_work_link}>
                            <h2 className={TextStyle.header}>Давайте</h2>

                            <PurpleLink to={"/"}/>
                        </div>

                        <h2 className={TextStyle.header}>Работать вместе</h2>
                    </div>

                    <div className={HomeStyle.m_name_bg_icon}>
                        <object data={AbstractOne} type="image/svg+xml"></object>
                    </div>
                </div>
            </section>

            <StackTechList>
                {
                    [
                        "Adobe Photoshop",
                        "Figma",
                        "Adobe Illustrator",
                        "Adobe Font",
                        " Adobe XD",
                        "InVision",
                        "Chrome DevTools"
                    ]
                }
            </StackTechList>

            <div className={HomeStyle.image_exp_container}>
                <img src={BannersOne} alt={"examples work"}/>
            </div>


            <section className={HomeStyle.about_section}>
                <InterMediaSection
                    className={HomeStyle.about_section__inter}
                    header={"МЕНЯ ЗОВУТ ИНСАФ"}
                    subtitle={"ОБО МНЕ"}
                />


                <div>
                    <img src={PersonPhoto} alt={"it's me"}/>
                </div>
            </section>
        </>
    );
};
