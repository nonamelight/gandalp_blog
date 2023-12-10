import { useResponsiveApi } from "../../App";
import Banner from "../../components/Banner";
import Content2 from "../../components/Content2";
import Content3 from "../../components/Content3";
import Footer from "../../components/Footer";
import LeftMenu from "../../components/LeftMenu";
import css from "../../css/Contents.css";

export default function ReverseEngineering(){
    var {isMobile} = useResponsiveApi();
    return (<>
        <Banner></Banner>
        <div className="simpleflex">
            {isMobile?<div></div>:<LeftMenu></LeftMenu>}
            
            <div className="contenttext">
            <h1>- 악성코드 분석</h1>
            악성코드 분석은 악의적인 목적을 하는 코드를 분석하는 직업입니다.<br/> 
            보안의 꽃이라고 불리는 분야를 이야기하자면 <br/>
            빠지지 않는 분야입니다. <br/><br/>
            
            당연히 코딩능력이 필수적이며, <br/>
            악성코드는 주로 시스템과 네트워크를 타겟으로 이루어지기 때문에<br/>
            시스템과 네트워크에 대한 종합적인 이해가 필요하며, <br/>
            특히 프로세스와 프로그램 동작 구조에 대한 지식이 깊게 필요합니다.<br/><br/>

            매우 고급기술이 요구되기 때문에 신입은 거의 없습니다.<br/>
            보통 신입의 스펙 예시를 들자면, <br/>
            워너크라이라는 랜섬웨어를 분석하여 보고서를 다수 제작하고, <br/>
            백신 구조를 설계 및 제작하여 포트폴리오를 제출했더니 <br/>
            겨우 기본이 되었다고 신입으로 받아줬다는 일화가 있습니다.<br/><br/>
            
            </div>
        </div>
        {isMobile?<div><Content2></Content2><Content3></Content3></div>:<div></div>}
        <Footer></Footer>
    </>)
}