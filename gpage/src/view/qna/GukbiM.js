import { useResponsiveApi } from "../../App";
import Banner from "../../components/Banner";
import Content2 from "../../components/Content2";
import Content3 from "../../components/Content3";
import Footer from "../../components/Footer";
import LeftMenu from "../../components/LeftMenu";

export default function GukbiM(){
    var {isMobile} = useResponsiveApi();
    return (<>
        <Banner></Banner>
        <div className="simpleflex">
    {isMobile?<div></div>:<LeftMenu></LeftMenu>}
    <div className="contenttext">

        <h1>반드시 국비를 들어야 하나요? <br/>독학은 안돼요?</h1>           
            국비는 필수사항이 아닙니다. <br/><br/>
            국비라고 좋은 것이 아니고, 사비라고 더 질이 높은 강의를 해주는 것이 아닙니다.<br/><br/>
            하지만 시간이 1년 이상 넉넉하시고, 자원을 아끼기 위해서는<br/>
            국비 과정을 추천드리고 싶습니다.<br/><br/><br/>

            인맥과 정보 아무것도 없는 상태에서 시작하기에는 <br/>
            국비교육이 좋은 스타트가 될 수 있습니다.<br/><br/>
            단, 주의해야 할 것은 “국비”가 중요 한 것이 아니라, <br/>
            “신뢰 할 수 있는 기관”에서 “수준 높은 강사”에게 “질 좋은 강의”를 <br/>
            “내가 원하는 목적에 따라” 들을 수 있는것입니다.<br/><br/>

            취업이 목적이시라면 국비 교육 뿐만 아니라, <br/>
            기업에서 진행하는 채용 연계형 과정도 추천드립니다. <br/><br/>
            
            채용 연계형 과정에 대해서 잠깐 소개드리자면, <br/>
            기업에서는 신뢰성 있고 쓸만한 개발자를 거르는 것이 힘들고, <br/>
            막상 뽑아 놓았더니 아무것도 못하는 학원 출신<br/>                
            (학원 문제라기 보다는 본인이 대충공부해서..)<br/>
            이 많아서 고민이 많았습니다. <br/><br/>
            
            이런 사람을 뽑으면 어차피 기업에서 한번 더, <br/>
            최소 1년은 교육해야하니 경영 측면에서 손실 비용이 많았습니다.<br/><br/>
            
            하지만 만약 월급을 주는게 아니라, <br/>
            학습 지원 명목으로 월급보다 적은 지출에, <br/>
            기업에서 사용하는 기술을 가르쳐서 채용까지 이어진다면? <br/><br/>
            

            물론 이수 후에 다른 기업으로 떠나는 사람을 막을수는 없겠지만,<br/>
            쓸만한 사람을 거를 수 있을 뿐만 아니라 기업의 입장에서도<br/>
            필요한 사람을 뽑을 확률이 늘어납니다.<br/>

            
        </div>
    </div>
    {isMobile?<div><Content2></Content2><Content3></Content3></div>:<div></div>}
    <Footer></Footer>
    </>)
}