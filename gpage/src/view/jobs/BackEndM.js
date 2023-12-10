import { useResponsiveApi } from "../../App";
import Banner from "../../components/Banner";
import Content2 from "../../components/Content2";
import Content3 from "../../components/Content3";
import Footer from "../../components/Footer";
import LeftMenu from "../../components/LeftMenu";
import css from "../../css/Contents.css";
import backend from "../../images/be_sample.png"
export default function BackEndM(){
    var {isMobile} = useResponsiveApi();
    return (<>
        <Banner></Banner>
        <div className="simpleflex">
            {isMobile?<div></div>:<LeftMenu></LeftMenu>}
            
            <div className="contenttext">
            <h1>- 백엔드 개발자</h1>
            백엔드 개발자는 주로 데이터베이스나 API를 활용하여<br/> 
            데이터를 주고받거나, 계산하여 <br/>
            프론트엔드 쪽에 보여주는 업무를 주로 맡습니다.<br/><br/>

            그 때문에 프론트엔드에 대한 기초지식이 <br/>
            어느 정도 있어야 가능하기도 합니다.<br/><br/>

            프론트엔드는 디자인의 측면이 강하지만, <br/>
            백엔드 개발자는 데이터를 다루는 측면이 강합니다. <br/><br/>
            
            예를 들어서 네이버에서 로그인할 때 <br/>
            네이버 로그인 창이 나오는 것은 프론트엔드의 영역입니다.<br/><br/>

            하지만 ID와 패스워드를 입력하여 <br/>
            계정 정보를 데이터베이스에서 검색하고, <br/>
            로그인 성공의 여부를 반환해 주는 계산식을 짜는 것은<br/>
            백엔드 개발자의 몫이라고 할 수 있습니다.<br/><br/>
            <div className="tech1">
                <img src={backend} alt="backend"></img>
            </div>
            데이터는 어떤 언어로도 다룰 수 있지만, <br/>
            주로 회사에서 사용하는 프레임워크(Framework)에 따라서 사용합니다.<br/><br/>

            회사에서 스프링 프레임워크(Spring Framework)를사용한다면 <br/>
            자바(JAVA)를 사용하는 환경이기 때문에 <br/>
            자바 언어를 사용하여서 데이터를 다루어야하며,<br/>
            디-장고(DJango) 프레임워크를 사용한다면 <br/>
            파이썬(Python)을 사용하여 데이터를 다뤄야합니다. <br/><br/>
            
            정부에서 가장 많이 사용하는 것은 <br/>
            스프링 프레임워크(Spring Framework) 기반의 전자정부프레임워크입니다.<br/><br/>

            백엔드 개발자의 길을 걷기 위해서는 <br/>
            데이터를 다루는 것에 능숙해야 합니다.<br/><br/>
            
            또한, 프론트엔드에 데이터를 전달해주는 경우가 많으므로<br/>
            프론트엔드에 대한 기초적인 학습 또한 필요합니다.<br/><br/>
            
            모든 프론트엔드를 공부할 필요는 없지만 <br/>
            적어도 HTML, CSS의 학습은 필요합니다.<br/><br/>

            여기에 데이터를 뿌려줄 언어에 대한 선택은 자유입니다.<br/><br/>
            
            JAVA, Python, Ruby, PHP등 <br/>
            어떤 언어라도 될 수 있습니다. <br/><br/>
            
            중요한 것은 내가 다룰 수 있는 언어가 <br/>
            얼마나 손에 익어서 마음껏 조작할 수 있는가가 <br/>
            개발자의 실력을 좌우하게 됩니다.<br/><br/>
            </div>
        </div>
        {isMobile?<div><Content2></Content2><Content3></Content3></div>:<div></div>}
        <Footer></Footer>
    </>)
}