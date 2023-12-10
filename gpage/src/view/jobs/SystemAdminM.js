import { useResponsiveApi } from "../../App";
import Banner from "../../components/Banner";
import Content2 from "../../components/Content2";
import Content3 from "../../components/Content3";
import Footer from "../../components/Footer";
import LeftMenu from "../../components/LeftMenu";
import css from "../../css/Contents.css";

export default function SystemAdminM(){
    var {isMobile} = useResponsiveApi();
    return (<>
        <Banner></Banner>
        <div className="simpleflex">
            {isMobile?<div></div>:<LeftMenu></LeftMenu>}
            
            <div className="contenttext">
            <h1>시스템 관리자</h1>
            시스템의 자원이 충분한지 모니터링하며, <br/>
            시스템이 오작동할 경우 정상 작동하도록 만들어야 하는 책임이 있습니다.<br/><br/>
            
            오작동할 경우 직접 작동 하도록 기술을 사용할 수도 있겠지만, <br/>
            시스템을 구축했던 외주업체가 있다면 연락하여 기술지원을 요청해야 합니다.<br/><br/>

            시스템의 용도에 따라 서버 관리 방법이 각각 다르므로<br/>
            다양한 서비스에 대한 이해가 필요합니다. <br/><br/>
            
            서비스 또한 네트워크를 통해 이루어지기 때문에 <br/>
            네트워크 지식은 당연히 필요합니다. <br/><br/>
            
            시스템의 운영이 잘 되고 있는지, <br/>
            관리가 잘 되고 있는지는 <br/>
            대부분 증적을 남겨야 하기 때문에 문서작업 업무가 상당수를 차지합니다. <br/><br/>

            보안 담당자가 없다면 보안도 함께 맡는 경우가 더러 있습니다.<br/><br/>

            시스템 관리자가 수행하는 문서작업을 구체적으로 예를 들면, <br/>
            서버 실의 출입 대장부를 관리하거나, <br/>
            서버 접근 권한을 결재시스템이나 E-Mail로 요청을 받거나, <br/>
            서버에 각각 할당된 IP 주소와 접근 계정/비밀번호는 무엇인지, <br/>
            랙에 설치된 수십 개/수백 개의 서버별 용도가 무엇인지 <br/>
            문서로 정리되어 있어야 합니다.<br/><br/>

            서버를 입고할 때 시스템 관리자와 상의를 거쳐야 합니다. <br/><br/>
            
            왜냐하면, 서버실 내의 랙(서버를 거치하는 캐비닛)에 공간이 충분한지, <br/>
            위치는 어디로 할 것인지에 대한 의논이 없다면 <br/>
            서버만 덜렁 들어오고 서버실 내에 설치가 <br/>
            불가능할 수도 있기 때문입니다.
            </div>
        </div>
        {isMobile?<div><Content2></Content2><Content3></Content3></div>:<div></div>}
        <Footer></Footer>
    </>)
}