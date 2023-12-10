import { useResponsiveApi } from "../../App";
import Banner from "../../components/Banner";
import Content2 from "../../components/Content2";
import Content3 from "../../components/Content3";
import Footer from "../../components/Footer";
import LeftMenu from "../../components/LeftMenu";
import css from "../../css/Contents.css";

export default function ForensicM(){
    var {isMobile} = useResponsiveApi();
    return (<>
        <Banner></Banner>
        <div className="simpleflex">
            {isMobile?<div></div>:<LeftMenu></LeftMenu>}
            
            <div className="contenttext">
            <h1> - 디지털포렌식</h1>
            포렌식(Forensic)은 법의학 분야의 용어로 <br/>
            가장 먼저 사용되었습니다. <br/><br/>
            
            포렌식은 법정의 증거를 수사하기 위해서 <br/>
            범죄 흔적을 수사하는 용어였습니다. <br/><br/>

            주로 검찰이 증거수집을 위해 수행하는 업무 중 <br/>
            디지털 증거를 수집하는 분야를 따로 분리하여 <br/>
            디지털포렌식이라는 이름이 붙게 되었습니다.<br/><br/>

            디지털포렌식을 공부한 분들이<br/>
            많이 데이터복구 사업체를 차려서 <br/>
            디지털포렌식이 데이터복구를 하는 것인 줄 알고 계신 분들이 더러 있지만,<br/><br/> 

            데이터복구는 디지털포렌식 일부분이며 <br/>
            정당한 법적 증거수집의 절차와 함께 <br/>
            디지털증거수집을 위한 하드디스크/SSD의 구조, <br/>
            메모리 구조, 시스템 이벤트 로그, 현장보존 기술을 배우게 됩니다.<br/><br/>

            디지털포렌식은 기계어에 가까운 어셈블리언어(Assembly)와 <br/>
            어셈블리언어를 다루는 툴을 주로 학습합니다. <br/><br/>
            
            또한, 민/형사 증거 관련 법을 함께 공부합니다. <br/>
            디지털포렌식에 도전하기 위한 자격증으로는 <br/>
            디지털포렌식 자격증 2급이 있으며, <br/>
            2급을 취득 후 경력이 쌓여야 1급에 도전할 수 있습니다.<br/><br/>
            </div>
        </div>
        {isMobile?<div><Content2></Content2><Content3></Content3></div>:<div></div>}
        <Footer></Footer>
    </>)
}