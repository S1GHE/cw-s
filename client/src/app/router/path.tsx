import {IBasePath} from "src/app/type/PathType.ts";
import {Home} from "src/pages/Home";

export const PublicRoutes: IBasePath[] = [
    {path: "/", element: <Home/>}
]