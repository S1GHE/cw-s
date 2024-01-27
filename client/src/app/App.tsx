import 'src/app/style/index.scss';
import {BaseBtn} from "src/shared/ui/button/inedx.ts";

export const App = () => {
    return (
        <div>
            <BaseBtn onClick={() => console.log("kek")}>
                <p>Hello</p>
            </BaseBtn>

        </div>
    );
};