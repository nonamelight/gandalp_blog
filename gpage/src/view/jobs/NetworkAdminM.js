import { useResponsiveApi } from "../../App";
import Banner from "../../components/Banner";
import Content2 from "../../components/Content2";
import Content3 from "../../components/Content3";
import Footer from "../../components/Footer";
import LeftMenu from "../../components/LeftMenu";
import css from "../../css/Contents.css";

export default function NetworkAdminM(){
    var {isMobile} = useResponsiveApi();
    return (<>
        <Banner></Banner>
        <div className="simpleflex">
            {isMobile?<div></div>:<LeftMenu></LeftMenu>}
            
            <div className="contenttext">
            <h1>- 네트워크 관리자</h1>
            주로 네트워크 장비를 직접 다루는 엔지니어와 달리<br/> 
            네트워크에 대한 설계, 정책, 방화벽 관리, 장비도입 검토 등의 <br/>
            업무를 맡습니다. <br/><br/>
            
            이미 구축된 네트워크 내에서 <br/>
            특정 네트워크 구역에서 다른 네트워크 구역으로 접속이 불가능하게 막거나,<br/>
            사용자에게 할당하는 네트워크 구역을 나누어서 관리합니다.<br/><br/>

            네트워크 관리가 중요한 이유는 네트워크 주소가 한정적이기 때문입니다.<br/>
            네트워크를 공부하다보면 네트워크 IPv4의 주소는 <br/>
            32비트로 이루어져 있는 것을 알 수 있습니다. <br/><br/>
            
            즉2의 32제곱이기 때문에 약 42억 개의 공인 IP가 존재하는데, <br/>
            이렇게 할당받은 공인 IP를 사설 네트워크로 분할하여 사용하게 됩니다. <br/><br/>
            
            이것을 쪼개어 쓰다 보니 한 기업 내에 존재할 수 있는 <br/>
            네트워크의 개수에 한계가 있기 때문에 <br/>
            네트워크 관리자는 부서별, 사용자별, 서버의 용도별 네트워크를 <br/>
            잘 할당해야 합니다.<br/><br/>

            업무망과 인터넷망을 분리하여 관리하거나, <br/>
            VPN 통신이 필요한 구역을 지정하거나, <br/>
            업체에 의뢰하여 필요한 작업을 요청하기도 합니다. <br/><br/>
            
            시스템 관리자와 마찬가지로 <br/>
            수행하는 많은 업무를 자료와 보고서로 남겨야 하므로 <br/>
            문서와 친해야 합니다. <br/><br/>
            
            또한, 시스템에 장애가 났을 때 <br/>
            서비스별로 통신하는 네트워크 프로토콜이 다르므로<br/>
            어떤 서비스를 수행하는 시스템인지 파악을 하고 있어야 <br/>
            적절한 장애 대응을 할 수 있습니다.<br/><br/>
            </div>
        </div>
        {isMobile?<div><Content2></Content2><Content3></Content3></div>:<div></div>}
        <Footer></Footer>
    </>)
}