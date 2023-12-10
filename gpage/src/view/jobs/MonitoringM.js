import { useResponsiveApi } from "../../App";
import Banner from "../../components/Banner";
import Content2 from "../../components/Content2";
import Content3 from "../../components/Content3";
import Footer from "../../components/Footer";
import LeftMenu from "../../components/LeftMenu";
import css from "../../css/Contents.css";
import monitoring from "../../images/mo_monitoring.png";
export default function MonitoringM(){
    var {isMobile} = useResponsiveApi();
    return (<>
        <Banner></Banner>
        <div className="simpleflex">
            {isMobile?<div></div>:<LeftMenu></LeftMenu>}
            
            <div className="contenttext">
            <h1>- 보안관제</h1>
            보안관제는 모니터링, 자원관리, 로그 기록, 장애 대응,<br/> 
            사후보고 등의 업무를 주로 수행합니다. <br/><br/>

            보안관제 수행의 3원칙은 <br/>
            무중단의 원칙/전문성의 원칙/정보공유의 원칙(공격확산 방지)입니다.<br/><br/>
            
            보안관제를 잘 하기 위해서 네트워크와 서버, <br/>
            방화벽에 대한 지식이필요하며 <br/>
            로그를 통해 어떠한 공격이 수행되고 있는지 <br/>
            볼 수 있는 안목이 필요합니다.<br/><br/>

            24시간 감시해야 하는 업무 특성 때문에 <br/>
            교대근무로 이루어집니다. <br/><br/>
            <div className="tech1">
                <img src={monitoring} alt="monitoring"></img>
            </div>
            악성코드 공격이 들어올 경우, <br/>
            악성코드를 분석하여 탐지기술을 개발 후 <br/>
            정책에 반영하여 유사한 악성코드를 탐지/차단하도록 배포합니다.<br/><br/>

            보안 직무를 위해 반드시 선행되어야 하는 필수코스는 아닙니다.<br/>
            보안 직무를 준비하며 꼭 관제를 거쳐야 할 필요성이 있는지는 <br/>
            본인의 목적에 따라 잘 분별하셔야 합니다.<br/><br/>

            </div>
        </div>
        {isMobile?<div><Content2></Content2><Content3></Content3></div>:<div></div>}
        <Footer></Footer>
    </>)
}