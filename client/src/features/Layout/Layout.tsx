import {Outlet} from "react-router-dom";
import {ContainerStyle} from "src/shared/style";

export const Layout = () => {
    return (
        <>
            <main className={ContainerStyle.container}>
                <Outlet/>
            </main>
        </>
    );
};
