import { useResponsiveApi } from "../../App";
import Banner from "../../components/Banner";
import Content2 from "../../components/Content2";
import Content3 from "../../components/Content3";
import Footer from "../../components/Footer";
import LeftMenu from "../../components/LeftMenu";
import css from "../../css/Contents.css";
import baemin from "../../images/fe_baemin.png";

export default function FrontendM(){
    var {isMobile} = useResponsiveApi();
    return (<>
        <Banner></Banner>
        <div className="simpleflex">
            {isMobile?<div></div>:<LeftMenu></LeftMenu>}
            
            <div className="contenttext">
            <h1>- 프론트엔드 개발자</h1><br/>             
            웹 디자이너가 디자인에 대한 뼈대를 잡으면 <br/>
            퍼블리셔가 디자인에 관한 내용을 채워줍니다. <br/><br/>

            그러면 프론트엔드 개발자는 <br/>
            이렇게 설계된 디자인에 대한 효과를 넣어줍니다. <br/><br/>

            즉, 웹페이지의 전면부 효과를 개발하는 역할입니다.<br/><br/>

            최근에는 퍼블리셔와 프론트엔드 개발자의 경계가 모호해지고 있습니다.<br/>
            외국은 퍼블리셔의 개념 자체가 없다고 말하기도 합니다.<br/><br/>
            
            프론트엔드 개발자는 버튼을 누르면 <br/>
            메뉴가 스르륵 나온다던지, <br/>
            글씨가 이동한다던지, <br/>
            스크롤바를 돌리면 사진이 유동적으로 움직인다던지 <br/>
            등의 기능을 요구에 따라 넣어줍니다. <br/><br/>
            
            배달의 민족 홈페이지에 들어갔을 때 <br/>
            스크롤 바를 움직이면 <br/>
            페이지 단위로 사진이 넘어가는 것이 <br/>
            대표적인 예시입니다.<br/>
            <div className="tech1">
                <img src={baemin} alt="baemin"></img>
            </div>
            프론트엔드 개발자들의 작업은 <br/>
            보통 인터넷 익스플로러나 구글 크롬을 열고서 <br/>
            F12 키를 누르면 보이는 소스코드로 확인할 수 있습니다. <br/><br/>

            보안이 철저한 기업일수록 <br/>
            화면에 뿌려지는 소스코드만 노출하고<br/>
            계산이 되거나 효과가 보이는 소스코드는 <br/>
            노출시키지 않습니다.<br/><br/>

            왜냐하면, 이렇게 노출되는 계산 소스코드를 악용하여<br/>
            해킹에 이용되기도 하기 때문입니다. <br/><br/>

            프론트엔드에 대한 취업을 원하시거나 <br/>
            학습하기를 원하시는 분께서는 HTML, CSS에 대한 학습은 필수입니다. <br/>
            HTML과 CSS는 단순하게 웹 브라우저에 글씨나 <br/>
            표, 그림을 보여주고 꾸며주는 역할을 합니다. <br/>
            그리고 이렇게 꾸며진 것을 다양하게 효과를 주기 위한 기술로 <br/>
            <b>Javascript, React, Vue.js</b> 등의 기술이 있습니다.


            </div>
        </div>
        {isMobile?<div><Content2></Content2><Content3></Content3></div>:<div></div>}
        <Footer></Footer>
    </>)
}