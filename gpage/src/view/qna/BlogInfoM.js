import { useResponsiveApi } from "../../App";
import Banner from "../../components/Banner";
import Content2 from "../../components/Content2";
import Content3 from "../../components/Content3";
import Footer from "../../components/Footer";
import LeftMenu from "../../components/LeftMenu";
import Profile from "../../components/Profile";
import css from "../../css/Contents.css"
import tech1 from "../../images/tech1.png";
export default function BlogInfoM(){
    var {isMobile}= useResponsiveApi();
    
    return (<>
    <div>
        <Banner></Banner>
    </div>
    <div className="simpleflex">
    {isMobile?<div></div>:<LeftMenu></LeftMenu>}
    <div className="contenttext">
        <h2>[블로그 목적]</h2>

        안녕하세요.<br/>
            <Profile></Profile>
        <b>간</b>호사로 <b>달</b>려온 <b>프</b>로그래머 <br/>

        <h4>간달프입니다</h4><br/>

        <a href="https://open.kakao.com/o/gcnjbBBc"><h3>비전공자 카카오 오픈채팅방</h3></a>
        <a href="https://kmong.com/gig/467166"><h3>전자문서 구매</h3></a><br/>


        <h1>블로그 목적은 <font color="#f80000">"IT준비를 위한 최소한의 응급지식 제공"</font>입니다</h1>
        <h1><font color="#CA5C11">제발 이정도는 알고 시작하셔야 눈탱이 맞지 않습니다!!!!!!!</font></h1><br/>
        <h2>블로그는 단순히 직업/직군에 대해서 <font color="#f80000">궁금하신 분들을 위한 최소한의 정보제공</font>이며</h2>
        <h2><font color="#f80000">진지하게</font> 이직을 생각하시는 분께서는<br/> 
        <font color="#f80000">전자문서</font>를 참고하세요</h2>
        
        IT 이직을 준비하면서 제한된 정보, 막연한 비전, 편향된 인맥 등의 원인으로 IT에 관련된 정보를 얻기가 너무 힘들었습니다.<br/><br/>

        <font color="#CA5C11"><b>비전공자인 저로써는 IT의 다양한 직업군을 알기 위한 인맥도, 정보도 없었습니다.</b></font><br/><br/>

        주변에 누구라도 IT 관련인이 있었더라면 학원 선택과 진로, 직군, 특히 공부의 방향성 등을 결정하는데 큰 도움이 되었을 것입니다<br/>

        이 때문에 IT 취업 이후 경력을 쌓으며 취업을 준비하는 분들을 위해 정보제공과 컨설팅으로 도와드리게 되었습니다.<br/><br/>

        그런데 컨설팅을 진행 해보니, 제가 겪었던 이 어려움은 무릇 비전공자 뿐만이 아니라

        전공생 또한 진로 고민을 위해 절실하게 필요한 정보였습니다.<br/><br/>

        <b>IT취업 준비자에게 필요한 것은 당장의 기술이 아닙니다.</b><br/><br/>

        내가 활용 가능한 자원들을 진단하고, <br/>


        다양한 IT 직군에 대한 정보를 바탕으로 방향을 설계하며, <br/>

        앞서 걸어간 사람의 취업준비 경험을 공부하는 것이 <br/>

        훨씬 시급합니다.<br/><br/>
        <div className="tech1">

        <img src={tech1} alt="tech"  width='400'></img><br/>
        </div>
        
        IT를 공부하는 범위는 넓고 깊기 때문에, <br/>

        <u>무엇을 향해 가야하는지에 대한 고민</u>이 없다면 <br/>

        많은 시간을 헛되히 낭비하고, 금전적인 손실을 크게 입을 것입니다.<br/><br/>

        이 기초적인 상식들을 몰라서 무작정 공부부터 시작했던 제가 시간이 오래 지난 후 돌이켜보니 <br/>

        제게 있던 자원도 효율적으로 쓰지 못한채 방향을 멀리 돌아가고 있더군요.<br/><br/>

        이제 와서 돌이켜보니 그동안 놓쳤던 자원과 방법들이 보입니다. <br/><br/>

        때문에 제가 했던 시간과 자원의 낭비를 <br/>

        누군가는 번복하지 않았으면 하는 바램으로 이 문서를 제작하였습니다.<br/><br/><br/><br/>


        <b>이 내용을 몰라서 제가 당했던 손해는 아래와 같습니다.</b><br/><br/>

        - 1년 6개월 (낭비되고 지체된 준비 시간)<br/><br/>

        - 2천만원 (학원비, 생활비)<br/><br/>

        - 처음 계획과 전혀 다른 직무 수행<br/><br/>


        지금은 큰 그림이 잡힌 상태에서 <br/>
        제가 원하는 방향을 향해 달려가고 있지만<br/>

        부디 IT의 취업과 이직을 고려하는 분들께서 <br/><br/>

        제가 정리한 정보를 바탕으로<br/>
        <font color="#CA5C11">
        시간과 물질적 자원 투자의 방향성을<br/>

        올바르게 정할 수 있기를 바라는 마음으로 작성하였습니다.</font><br/><br/>


        </div>
    </div>
    {isMobile?<div><Content2></Content2><Content3></Content3></div>:<div></div>}
    <Footer></Footer>
    </>)
}