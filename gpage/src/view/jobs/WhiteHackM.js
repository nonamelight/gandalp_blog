import { useResponsiveApi } from "../../App";
import Banner from "../../components/Banner";
import Content2 from "../../components/Content2";
import Content3 from "../../components/Content3";
import Footer from "../../components/Footer";
import LeftMenu from "../../components/LeftMenu";
import css from "../../css/Contents.css";
import hack from "../../images/wh_protocol.png";

export default function WhiteHackM(){
    var {isMobile} = useResponsiveApi();
    return (<>
        <Banner></Banner>
        <div className="simpleflex">
            {isMobile?<div></div>:<LeftMenu></LeftMenu>}
            
            <div className="contenttext">
            <h1>- 모의해킹</h1>
            모의해킹은 대상 정보시스템 자산의 취약점과 <br/>
            통제 공동(Control hole) 내역을 파악하기 위해 <br/>
            해커 및 크래커들이 사용하는 기법을 이용하는 <br/>
            모의 침투 테스트입니다. <br/><br/>
            
            모의해킹은 대상정보 시스템 자산에 대한 <br/>
            보안 운영상의 취약점을 파악한 후 <br/>
            개선 사항을 제시하기 위한 것입니다.<br/><br/>

            모의해킹과 악의적인 해킹은 <br/>
            허락을 받고 하느냐/받지 않고 하느냐, <br/>
            취약점에 대해서 상대방에게 알리느냐<br/>
            알리지 않고 불법으로 이용하느냐의 차이라고 볼 수 있습니다. <br/><br/>
            
            그 때문에 실력보다 <br/>
            윤리적인 자세와 태도가 더욱 요구됩니다. <br/><br/>
            
            기업에서도 모의 해커를 채용할 때 <br/>
            실력보다 인성과 윤리 사상을 면접하는 이유가 이것 때문입니다. <br/><br/>
            
            실력은 기업에서 길러줘도 되지만, <br/>
            윤리 의식이 결여된다면 기업뿐만 아니라 <br/>
            사회가 위험해질 수도 있기 때문입니다.<br/><br/>
            <div className="tech1">
                <img src={hack} alt="hack"></img>
            </div>
            모의해킹이 시행되면 <br/>
            기업에서 요구하는 범위에 한정하여 수행하는 경우가 많습니다.<br/>
            아무 정보도 없이 블라인드로 모의해킹을 하면 <br/>
            비용도 많이 들뿐더러 오래 걸리기 때문에 <br/>
            이런 요구를 하는 기업은 거의 없습니다. <br/><br/>
            
            모의해킹을 요청하는 목적은 대부분 <br/>
            ‘취약점에 대하여 안전하게 조치하였다’라는 보고서를 <br/>
            갖추기 위함이 큽니다. <br/><br/>
            
            그 때문에 연구사업이 아닌 이상, <br/>
            모의해킹의 범위는 생각보다 단조롭고 반복적일 수 있습니다.<br/><br/>
            </div>
        </div>
        {isMobile?<div><Content2></Content2><Content3></Content3></div>:<div></div>}
        <Footer></Footer>
    </>)
}