import { useResponsiveApi } from "../../App";
import Banner from "../../components/Banner";
import Content2 from "../../components/Content2";
import Content3 from "../../components/Content3";
import Footer from "../../components/Footer";
import LeftMenu from "../../components/LeftMenu";
import css from "../../css/Contents.css";

export default function FullstackM(){
    var {isMobile} = useResponsiveApi();
    return (<>
        <Banner></Banner>
        <div className="simpleflex">
            {isMobile?<div></div>:<LeftMenu></LeftMenu>}
            
            <div className="contenttext">
            <h1>- 풀스택 개발자</h1>            
            엄격하게 풀스택을 정의하자면 <br/>
            기획, 프론트엔드, 백엔드, 프레임워크, 라이브러리, 디자인,<br/>
            모바일 앱 개발까지 모두 할 수 있는 슈퍼 개발자를 말합니다.<br/><br/>

            그러나 이런 개발자는 개발 경력이 7년~10년이 되어야<br/>
            간신히 가능한 수준이기 때문에 <br/>
            보통 프론트엔드와 백엔드를 모두 할 수 있으면<br/>
            풀스택 개발자라고 일반적으로 부릅니다.<br/><br/>

            맡겨만 주면 모든 일을 처리할 수 있는 고유의 능력 때문에 <br/>
            보통 풀스택 개발자는 일반적인 프론트,백엔드 개발자보다는 몸값이 비쌉니다.<br/><br/>
            
            1인 기업이라고 부를 정도이며, <br/>
            이정도의 실력을 갖추는 경우<br/>
            그동안 함께 사업을 했던 인맥을 바탕으로 외주를 받으며 <br/>
            프리랜서로의 전향도 많이 하게 됩니다.<br/><br/>
            </div>
        </div>
        {isMobile?<div><Content2></Content2><Content3></Content3></div>:<div></div>}
        <Footer></Footer>
    </>)
}