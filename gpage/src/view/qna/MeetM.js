import { useResponsiveApi } from "../../App";
import Banner from "../../components/Banner";
import Content2 from "../../components/Content2";
import Content3 from "../../components/Content3";
import Footer from "../../components/Footer";
import LeftMenu from "../../components/LeftMenu";
import css from "../../css/Contents.css";

export default function MeetM(){
    var {isMobile} = useResponsiveApi();
    return (<>
        <Banner></Banner>
        <div className="simpleflex">
            {isMobile?<div></div>:<LeftMenu></LeftMenu>}
            
            <div className="contenttext">
            <h1>면접관은 무엇을 중요하게 보나요?</h1>
            <b>중소기업</b>의 경우라면<br/>
            단순히 대표의 마음에 들거나 팀장의 마음에 들면 합격입니다.<br/><br/>

            하지만 중견 이상의 기업이라면 <br/>
            다양한 포지션의 면접관이 있는 경우가 많습니다.<br/><br/>

            <b>인사팀, 실무팀, 외부인사</b> 등으로 <br/>
            구성되어 있는 경우가 일반적이지만 <br/>
            기업 문화에 따라서 실무팀만으로 이루어지거나<br/>
            구성이 달라지기도 합니다.<br/><br/>

            <b>실무팀</b>은 정말로 이 사람이 실무에 데리고 왔을 때<br/>
            기업에서 요청하는 업무들을<br/>
            소화해낼 수 있는 역량이 있는가를 평가합니다.<br/><br/>
            
            자기소개서에 적는 기술목록이 그것입니다.<br/><br/>
            
            기술 목록을 적었다면 어떻게 공부를 했고,<br/>
            특정 상황에서 해결한 경험이나 <br/>
            프로젝트에서 역할 등을 물어보며<br/>
            기술에 대하여 얼마나 잘 알고있는지를 평가합니다.<br/><br/>

            <b>인사팀</b>이 주로 평가하는 것은<br/>
            인성과 의사소통, 스트레스 내성 등을 평가합니다.<br/><br/>
            
            <b>사람 인에서 무료로 제공하는 인적성 평가</b>를<br/>
            테스트삼아서 해보신다면 <br/>
            업무에 임하는 내 성향을 어느정도 가늠 할 수 있습니다.<br/>
            
            정직성, 성실성, 외향/내향성, 일관성 등등에 대한 <br/>
            항목을 평가합니다.<br/><br/>

            일부 인사팀에서는 스트레스 내성을 테스트하기 위해<br/>
            압박면접을 시행하기도 하지만 <br/>
            개인적인 의견으로 압박면접을 시행하는 팀은<br/>
            반드시 가야하는 이유가 있는 것이 아니라면<br/>
            거르는 것을 추천드립니다.<br/><br/>
            
            특히 압박면접을 진행하는 사람이 <br/>
            인사팀이 아니라 기술팀이라면,<br/>
            압박면접이 아니라 정말 성품이 그런 사람이라서<br/>
            입사 후 동일한 태도로 인해 <br/>
            업무 스트레스가 많을 가능성이 있습니다.<br/><br/>

            <b>외부인사</b>는 보통 <br/>
            블라인드 면접을 진행하는 공공기관이나 <br/>
            대기업 같은 곳에서 <br/>
            지인에 의한 낙하산을 예방하기 위해 초청합니다.<br/><br/>
            
            조금 더 객관적으로 평가하기 위해서 <br/>
            모시는 분들이기 때문에 <br/>
            이 분의 전공에 대해서는 누구도 알 수 없습니다.<br/><br/>
            
            때로는 실무자일수도, 인사관계자일수도, 경영자일수도 있습니다.<br/><br/>

            <b>
            궁금한 사항이 있다면 <br/>
            자리에서 물어봐도 면접에 마이너스가 되지는 않습니다. <br/><br/>
            </b>
            
            연봉이나 실수령액, 복지, 교통비,<br/>
            식사문화, 기숙사 제공, 복지포인트 유무,<br/>
            주차문제, 야근 또는 야근수당 등 <br/><br/>
            
            채용공고에 명시되어 있지 않은 부분을 질문하면서<br/>
            내가 중요시 여기는 사항들을 알려주고<br/>
            또 역으로 질문도 받으면서<br/>
            나에 대해서 알려주는 계기가 될수도 있습니다.<br/><br/>
            </div>
        </div>
        {isMobile?<div><Content2></Content2><Content3></Content3></div>:<div></div>}
        <Footer></Footer>
    </>)
}