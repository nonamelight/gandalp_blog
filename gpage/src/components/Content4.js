import { useResponsiveApi } from '../App';
import css from '../css/Contents.css'
export default function Content4(){
    
  const {isMobile} = useResponsiveApi();
    return (<>    
    <div className={isMobile?"contentmobile4":"content1"}>
        [간달프 소개]
    </div>
    </>)
}