import { useResponsiveApi } from "../../App";
import Banner from "../../components/Banner";
import Content2 from "../../components/Content2";
import Content3 from "../../components/Content3";
import Footer from "../../components/Footer";
import LeftMenu from "../../components/LeftMenu";
import css from "../../css/Contents.css";
import unreal from "../../images/ga_unreal.png"
import unity from "../../images/ga_unity.png"
export default function GameM(){
    var {isMobile} = useResponsiveApi();
    return (<>
        <Banner></Banner>
        <div className="simpleflex">
            {isMobile?<div></div>:<LeftMenu></LeftMenu>}
            
            <div className="contenttext">
            <h1>게임 개발자</h1>
            게임 개발은 개발의 꽃이라고 부를 정도로 <br/>
            모든 개발 지식의 집약체라고 볼 수 있습니다. <br/><br/>
            
            게임 산업은 C++과 C#이 주류 언어입니다. <br/>
            3D 게임을 개발하기 위해서 <br/>
            3D 디자인에 대해서 학습해야 하는 경우도 있으며, <br/>
            FPS 게임의 코어개발 같은 경우에는 <br/>
            탄도학과 물리학까지 계산되기도 합니다<br/>
            (그러나 탄도학과 물리학을 학습해야 하는 경우는 매우 드뭅니다).<br/><br/>

            사용자의 동선을 학습하여 공격하는 AI가 적용되기도 하며, <br/>
            최근에는 블록체인 토큰을 사용한 NFC 기술을 바탕으로<br/>
            창작에 대한 저작권을 보장해 주는 <br/>
            메타버스라고 하는 온라인 게임 또한 출시되었습니다. <br/><br/>
            <div className="tech1">
                <img src={unreal} alt="unreal"></img>
            </div>
            일반적인 게임 개발이라고 하면, <br/>
            게임을 개발하기 위한 특수한 엔진인 <br/>
            언리얼 엔진, Unity를 추가로 학습하여야 합니다.<br/><br/>

            <div className="tech1">
                <img src={unity} alt="unity"></img>
            </div>
            </div>
        </div>
        {isMobile?<div><Content2></Content2><Content3></Content3></div>:<div></div>}
        <Footer></Footer>
    </>)
}