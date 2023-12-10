import { useResponsiveApi } from "../../App";
import Banner from "../../components/Banner";
import Content2 from "../../components/Content2";
import Content3 from "../../components/Content3";
import Footer from "../../components/Footer";
import LeftMenu from "../../components/LeftMenu";
import css from "../../css/Contents.css";

export default function CsDevM(){
    var {isMobile} = useResponsiveApi();
    return (<>
        <Banner></Banner>
        <div className="simpleflex">
            {isMobile?<div></div>:<LeftMenu></LeftMenu>}
            
            <div className="contenttext">
            <h1>- CS(Client and Server) 개발자</h1>
            CS 개발자는 프론트엔드/백엔드를 개발하는 웹 개발자와는 결이 약간 다릅니다. <br/><br/>

            한글, 엑셀, 파워포인트 또는 게임 등과 같이 <br/>
            클라이언트의 PC에 설치되어 서버와 통신하거나<br/>
            독자적으로 실행되는 프로그램을 개발하는 업무를 주로 하는 개발자를 <br/>
            CS 개발자라고 부릅니다.<br/><br/>

            CS 개발과 웹 개발의 차이점은 <br/>
            웹 개발은 클라이언트의 요청에 따라 <br/>
            모든 계산을 서버에서 담당하여 데이터를 반환해 주지만,<br/><br/>
            
            CS 개발은 클라이언트의 PC에 프로그램이 설치되어<br/>
            원하는 작업을 클라이언트가 계산하기 때문에<br/>
            클라이언트의 PC 성능에 따라서 속도가 달라질 수 있으며, <br/>
            프로그램 형식으로 배포가 되는 특징이 있습니다.<br/><br/>

            보통 게임 설치 후 그래픽카드의 성능에 따라서 렉의 유무가 있거나,<br/>
            무거운 3D 작업 프로그램 또는 작곡프로그램이나 <br/>            
            영상편집 프로그램 등을 돌릴 때 <br/>
            PC의 성능이 작업의 효율을 결정하는 것이 그 예시라고 할 수 있습니다.<br/><br/>
            
            CS 프로그램은 PC에만 국한되지 않고 <br/>
            앱 개발 또한 CS 개발에 포함이 될 수 있습니다. <br/><br/>
            
            하지만 앱의 경우 웹페이지를 앱으로 변환해주는 <br/>
            웹앱 기술 또한 떠오르고 있으므로 <br/>
            단순히 CS로만 분류하기에는 모호한면이 있습니다. <br/>
            CS 개발자는 주로 회사 전용 프로그램을 만드는 경우가 많습니다.<br/><br/>

            최근에는 파이썬(Python)이 많이 떠오르고 있지만, <br/>
            주로 스타트업 벤처기업이 많이 사용하며, <br/>
            주된 시장은 C#, DotNet(.NET) 기술을 많이 사용합니다.<br/><br/>
            </div>
        </div>
        {isMobile?<div><Content2></Content2><Content3></Content3></div>:<div></div>}
        <Footer></Footer>
    </>)
}