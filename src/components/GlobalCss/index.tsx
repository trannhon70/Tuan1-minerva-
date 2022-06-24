
import { FC, memo } from "react";
import globalStyle from "../../assets/css/global";

const GlobalCss: FC =() =>{
    globalStyle();
    return null;
}

export default memo(GlobalCss);