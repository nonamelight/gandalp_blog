import { useResponsiveApi } from "../../App";
import Banner from "../../components/Banner";
import Content2 from "../../components/Content2";
import Content3 from "../../components/Content3";
import Footer from "../../components/Footer";
import LeftMenu from "../../components/LeftMenu";
import css from "../../css/Contents.css";
import neTech from "../../images/ne_tech.png";
import neCisco from "../../images/ne_cisco.png";

export default function NetworkEngineerM(){
    var {isMobile} = useResponsiveApi();
    return (<>
        <Banner></Banner>
        <div className="simpleflex">
            {isMobile?<div></div>:<LeftMenu></LeftMenu>}
            
            <div className="contenttext">
            <h1>- 네트워크 엔지니어</h1>
            네트워크 엔지니어는 통신에 관련된 장비를 주로 다루게 됩니다.<br/> 
            스위치, 라우터 등에 접근하여 명령어를 통해 네트워크망을 구성합니다. <br/><br/>
            
            우리가 인터넷을 신청하면 출동하는 <br/>
            KT나 LG U+, SKT 등의 기사님들도 <br/>
            네트워크 엔지니어에 포함이 됩니다. <br/><br/>
            
            이런 기사님들처럼 전봇대를 오르내리며 <br/>
            랜선작업을 하는 경우도 있지만, <br/>
            서버실에 들어가서 네트워크를 서로 묶어주는 <br/>
            스위치와 라우터와 같은 기기를 만져야하는 경우도 있습니다.<br/><br/>
            <div className="tech1">
                <img src={neTech} alt="neTech"></img>
            </div>
            작게는 업무망, 전화망 등을 다루지만, <br/>
            크게는 도시/국가의 인터넷 망을 다루기도 합니다. <br/>
            큰 네트워크를 다루는 사람은 <br/>
            실수로 날린 명령어 하나로 도시의 인터넷 전체가 마비될 수도 있습니다. <br/><br/>
            
            물론, 그런 중대한 업무에는 실수를 방지하기 위해 미리 명령어를 검토하고 가겠지만요.<br/><br/>

            네트워크를 공부하기 위해서는 국내 자격증으로는 <br/>
            <b>네트워크관리사 2급/1급이 있으며,<br/><br/></b>

            라우터와 스위치의 대부분의 시장을 장악하고 있는 <br/>
            <b>CISCO 사의 사설 자격증 CCNA/CCNP를 취득한다면 <br/></b>
            네트워크 취업 쪽에 유리할 수 있습니다. <br/><br/>
            <div className="tech1">
                <img src={neCisco} alt="neTech"></img>
            </div>
            </div>
        </div>
        {isMobile?<div><Content2></Content2><Content3></Content3></div>:<div></div>}
        <Footer></Footer>
    </>)
}