import { useResponsiveApi } from "../../App";
import Banner from "../../components/Banner";
import Content2 from "../../components/Content2";
import Content3 from "../../components/Content3";
import Footer from "../../components/Footer";
import LeftMenu from "../../components/LeftMenu";
import css from "../../css/Contents.css";
import cloud from "../../images/ce_cloudpng.png";
export default function CloudEngineerM(){
    var {isMobile} = useResponsiveApi();
    return (<>
        <Banner></Banner>
        <div className="simpleflex">
            {isMobile?<div></div>:<LeftMenu></LeftMenu>}
            
            <div className="contenttext">
            <h1>클라우드 엔지니어</h1>
            여기서 설명하는 클라우드 엔지니어는<br/> 
            클라우드를 사용하여 서비스를 개발하는 개발자를 의미하는 것이 아니라,<br/>
            구글이나 AWS 등 클라우드 서비스를 자체적으로 구축하는<br/>
            벤더사(구축/설치해주는 회사)의 데브옵스 클라우드 엔지니어를 뜻합니다.<br/><br/>
             
            클라우드를 이해하기 위해서는 <br/>
            개발 + 시스템 + 네트워크 + 서비스에 대한 전반적인 이해가 필요합니다.<br/><br/>

            클라우드의 등장 배경은, 자신의 컴퓨터 자원보다 <br/>
            더 많은 하드웨어/CPU/램/그래픽카드 등의 자원이 필요할 때에<br/>
            추가 증설을 하자니 증설비용과 유지비용이 만만치 않을뿐더러 <br/>
            이렇게 많은 양의 자원을 휴대하여 들고 다니는 것도 곤란하였습니다.<br/><br/>

            이 때문에 고안된 것이 클라우드 서비스입니다. <br/>
            거대한 장소에 고용량의 컴퓨터 자원을 병렬로 무수히 많이 배치하고, <br/>
            이 자원을 신청자가 요구하는 만큼 논리적으로 할당하여 <br/>
            자원을 분배하는 방법이 개발된 것입니다.<br/><br/>

            클라우드를 서비스용으로 구축하는 회사를 채널사, <br/>
            서비스를 이용하여 또 다른 서비스를 이용하는 회사를 고객사, <br/>
            클라우드 자체를 구축하는 회사를 벤더사라고 부릅니다. <br/><br/>
            
            클라우드를 서비스하기 위해서 <br/>
            먼저는 컴퓨터 물리 자원에 대한 이해가 필요합니다.<br/><br/>
            <div className="tech1">
                <img src={cloud} alt="cloud"></img>
            </div>
            깊고 넓은 학습량 때문에 <br/>
            보통 데브옵스는 신규가 거의 없는 편입니다. <br/>
            보통 시스템엔지니어를 하다가 경력을 쌓고, <br/>
            추가로 도커와 쿠버네티스, 오픈스택, 오픈시프트, AWS, GCP 등을 공부하여 <br/>
            데브옵스로 전향하는 경우가 일반적입니다. <br/>
            쉘스크립트 역량이 요구됩니다.<br/><br/>

            클라우드쪽을 학습하실 분께서는 <br/>
            AWS(아마존 클라우드 자격증)나 <br/>
            GCP(구글클라우드 자격증)를 취득하시는 것을 추천드립니다. <br/><br/>
            
            클라우드 또한 보안만큼 학습 범위가 넓고 다양합니다. <br/>
            서버와 네트워크 자원관리 뿐만 아니라 <br/>
            개발영역과 오픈소스까지 다루실 수 있어야 하기 때문에 <br/>
            AWS, GCP 취득만을 바라보고 작정하고 공부하시는 분들께서는 <br/>
            6개월에서 1년이상 공부기간이 소요되기도 합니다. <br/><br/>
            
            하지만 취득해두면 정말 인정받는 고급 자격증이니 <br/>
            클라우드 쪽을 희망하시는 분께서는 꼭 취득하세요!<br/><br/>

            
            </div>
        </div>
        {isMobile?<div><Content2></Content2><Content3></Content3></div>:<div></div>}
        <Footer></Footer>
    </>)
}