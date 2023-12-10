import { useResponsiveApi } from "../../App";
import Banner from "../../components/Banner";
import Content2 from "../../components/Content2";
import Content3 from "../../components/Content3";
import Footer from "../../components/Footer";
import LeftMenu from "../../components/LeftMenu";
import css from "../../css/Contents.css";

export default function SecureConsultM(){
    var {isMobile} = useResponsiveApi();
    return (<>
        <Banner></Banner>
        <div className="simpleflex">
            {isMobile?<div></div>:<LeftMenu></LeftMenu>}
            
            <div className="contenttext">
            <h1>- 보안컨설팅</h1>
            보안컨설팅은 상시 존재하는 위협과 취약점을 <br/>
            정확히 파악하고 분석/평가하여 <br/>
            고객 맞춤형 최적의 보호 대책을 제시하는 직업입니다. <br/><br/>
            
            내부/외부로부터 침해사고를 예방하고,<br/>
            빠른 탐지/신속한 복구가 가능하도록 <br/>
            체계를 정비하도록 컨설팅을 해줍니다.<br/><br/>

            또한, 지속적인 위험관리로 정보보호 수준을 향상하고, <br/>
            체계적인 위험 통제를 목표로 합니다.<br/>
            
            모의해킹 또한 보안컨설팅과 마찬가지로 <br/>
            기술적인 위협과 취약점에 대한 분석으로 <br/>
            보완해야 할 보고서를 제공한다는 점에서 보안컨설팅 일부이지만, <br/>
            보안컨설팅은 조금 더 포괄적인 컨설팅을 말합니다. <br/><br/>
            
            기술적인 지식을 바탕으로 <br/>
            관리적, 제도적인 부분의 고려사항을 고객에게 제공해야 합니다.<br/><br/>

            그 때문에 왜 이러한 고려사항이 필요한지에 대하여 <br/>
            근거를 말할 수 있어야 하며, <br/>
            근거를 바탕으로 설계될 모델이나 네트워크 구성도 <br/>
            또는 보안 정책 등이 PPT 혹은 문서로 나와야 합니다. <br/><br/>
            
            정답이 없어서 어려워하는 고객에게 <br/>
            기준점과 정답을 제시해줘야 하므로<br/>
            문제해결 능력, 논리적인 사고, 연구능력이 요구됩니다.<br/><br/>

            컨설팅 관련 자격증으로는 <br/>
            ISMS/ISMP-P, ISO27001, PIA, CPPG, <br/>
            정보보안기사, CISA/CISSP 등이 있습니다.<br/><br/>
            </div>
        </div>
        {isMobile?<div><Content2></Content2><Content3></Content3></div>:<div></div>}
        <Footer></Footer>
    </>)
}