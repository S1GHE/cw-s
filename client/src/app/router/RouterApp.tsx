import {Route, Routes} from "react-router-dom";
import {PublicRoutes} from "src/app/router/path.tsx";
import {Layout} from "src/features/Layout";

export const RouterApp = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                {PublicRoutes.map((el) => <Route path={el.path} element={el.element}/>)}
            </Route>
        </Routes>
    );
};
