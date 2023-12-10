
import { useResponsiveApi } from '../App';
import headImg from '../images/head_img.png';
import css from '../App.css';
export default function Banner(){
    const {isMobile} = useResponsiveApi();
    return (<>
    <div className={isMobile?"parentmobile": "parent"}>
    <a href='/' alt='home'>

        <img src={headImg} alt="headImg"/>  
    </a>
    </div>
    </>
    )
}