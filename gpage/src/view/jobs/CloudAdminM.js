
import { useResponsiveApi } from "../../App";
import Banner from "../../components/Banner";
import Content2 from "../../components/Content2";
import Content3 from "../../components/Content3";
import Footer from "../../components/Footer";
import LeftMenu from "../../components/LeftMenu";
import css from "../../css/Contents.css";

export default function CloudAdminM(){
    var {isMobile} = useResponsiveApi();
    return (<>
        <Banner></Banner>
        <div className="simpleflex">
            {isMobile?<div></div>:<LeftMenu></LeftMenu>}
            
            <div className="contenttext">
            <h1>- 클라우드 관리자</h1>
            클라우드 관리자는 벤더사보다는 채널사에 가까운 직무를 수행합니다.<br/>
            클라우드로부터 수행되는 서비스를 감시하고, 자원을 모니터링하며,<br/>
            새로 구축되거나 업데이트하는 프로젝트를 감시합니다. <br/><br/>
            
            만약 클라우드 서비스가 온라인일 경우에는 <br/>
            사용자가 꾸준히 늘어나며 <br/>
            필요한 서버의 자원 또한 함께 늘어납니다.<br/><br/>

            이렇게 한계까지 끌어올려 사용하는 서버의 자원을 모니터링하여,<br/>
            필요하면 하드디스크와 같은 부품을 교체해주고 <br/>
            서버가 중단되지 않도록 운영을 합니다. <br/><br/>
            
            내부망에서 클라우드 자체 서비스 운영 시에는 <br/>
            조금 더 수월하기는 하지만, <br/>
            쿠버네티스와 같은 클라우드를 통제하는 명령어와 <br/>
            클라우드 구조에 대해서 알아야 합니다.<br/><br/>

            클라우드의 종류는 다양합니다. <br/><br/>
            
            유명한 기업으로는 AWS나 구글 클라우드도 있으며, <br/>
            오픈소스로 운영되는 클라우드는 오픈스택(OpenStack),<br/>
            오픈시프트(OpenShift) 등이 있습니다. <br/><br/>
            
            보통 사기업이 클라우드를 구축해줄 때 <br/>
            오픈스택/오픈시프트를 사용하기도 합니다.<br/><br/>

            AWS와 구글에서 운영하는 클라우드 자격증인 AWS나 GCP가 있으면 <br/>
            클라우드를 서비스하는 회사의 취업에 유리합니다.<br/><br/>

            클라우드 서비스는 크게 <br/>
            IaaS(Infra As a Service), PaaS(Platform As a Service),<br/>
            SaaS(Software As a Sevice)로 나누어집니다. <br/><br/>
            
            쉽게 설명드리자면 IaaS는 클라우드를 만들기 위한 <br/>
            서버와 같은 하드웨어 자원을 말합니다.<br/><br/>
            
            PaaS는 이러한 IaaS 위에 올라가는 클라우드 자체를 말합니다. <br/>
            이렇게 만들어진 클라우드로 다양한 웹서비스나 <br/>
            가상화 서비스 등을 운영하고 서비스하는 것이 SaaS입니다.<br/><br/>
            </div>
        </div>
        {isMobile?<div><Content2></Content2><Content3></Content3></div>:<div></div>}
        <Footer></Footer>
    </>)
}