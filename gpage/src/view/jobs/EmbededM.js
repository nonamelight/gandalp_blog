import { useResponsiveApi } from "../../App";
import Banner from "../../components/Banner";
import Content2 from "../../components/Content2";
import Content3 from "../../components/Content3";
import Footer from "../../components/Footer";
import LeftMenu from "../../components/LeftMenu";
import css from "../../css/Contents.css";

export default function EmbededM(){
    var {isMobile} = useResponsiveApi();
    return (<>
        <Banner></Banner>
        <div className="simpleflex">
            {isMobile?<div></div>:<LeftMenu></LeftMenu>}
            
            <div className="contenttext">
            <h1>- 임베디드 개발자</h1>
             임베디드 개발은 정보통신보다는 전자공학 쪽에 가까운 학문입니다. <br/>
             특히 사물인터넷이라고 불리는 <br/>
             IoT 개발 분야는 주목을 받고 있습니다. <br/><br/>
             
             말 그대로 사물이 인터넷에 연결되어 <br/>
             사용자와 유기적으로 작동하게 만드는 개발 분야입니다.<br/><br/>

             서버와 연결되어 결제 후 사용 가능한 전동킥보드, <br/>
             집에 있는 가스 밸브나 <br/>
             전등을 확인할 수 있는 월 패드, <br/>
             사람의 목소리를 인식하여 음악을 틀어주거나 전화를 걸어주는 AI 스피커, <br/>
             카드 정보를 읽어 금융데이터와 통신하는 카드리더기 등이 <br/>
             사물인터넷 분야입니다.<br/><br/>

             Bread Board라고 불리는 전자기판에 <br/>
             반도체와 센서를 얹은 후 <br/>
             개발자가 의도하는 대로 기계가 작동하도록 코딩합니다. <br/><br/>
             
             최근 건물 출입구마다 있는 온도감지계와 <br/>
             가게마다 설치된 대기 순번을 조회하고 알려주는 기계 등<br/>
             임베디드의 적용 분야는 많습니다.<br/><br/>

             주로 전자회로도와 센서, 전기, 코딩에 관해서 공부를 합니다. <br/>
             업무 특성상 납땜을 할때도 많습니다<br/><br/>

             
            </div>
        </div>
        {isMobile?<div><Content2></Content2><Content3></Content3></div>:<div></div>}
        <Footer></Footer>
    </>)
}