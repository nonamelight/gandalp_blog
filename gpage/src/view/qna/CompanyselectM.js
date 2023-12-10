import { useResponsiveApi } from "../../App";
import Banner from "../../components/Banner";
import Content2 from "../../components/Content2";
import Content3 from "../../components/Content3";
import Footer from "../../components/Footer";
import LeftMenu from "../../components/LeftMenu";
import css from "../../css/Contents.css";

export default function CompanyselectM(){
    var {isMobile} = useResponsiveApi();
    return (<>
        <Banner></Banner>
        <div className="simpleflex">
            {isMobile?<div></div>:<LeftMenu></LeftMenu>}
            
            <div className="contenttext">
            <h1>스타트업으로 경력을 쌓을까요?<br/> 더 준비해서 대기업갈까요?</h1>

            이 또한 정답이 있는 부분이 아니기 때문에<br/><br/>
            각자의 상황에 따라서 선택을 해야합니다.<br/>

            스타트업과 대기업을 준비하는 과정도 각각 다르고<br/>
            일하는 스타일도 다르기 때문에<br/>
            이 부분을 나누어서 설명드리겠습니다.<br/><br/>

            <h3>- 스타트업</h3><br/>
            스타트업 또는 중소기업의 특징이라면 “생존”입니다.<br/><br/>
            
            특히 아직 매출이 발생하지 않은 스타트업의 경우에는<br/>            
            다양한 아이템을 빠르게 만들어서 실행하는<br/>
            MVP 모델을 만들어 투자유치까지 이어져야 하기 때문에<br/>
            한사람 한사람의 역할이 크다고 할 수 있습니다.<br/><br/>

            스타트업의 경우에는 <br/>
            매출이 있는 기업과 매출이 없는 기업으로<br/>
            나누어 생각할 수 있습니다.<br/><br/>

            매출이 있는 기업의 경우에는 <br/>
            사세 확장으로 인해 인력이 필요한 경우가 있습니다.<br/><br/>
            
            다시 말해서 사업이 커지며<br/>
            일거리가 많아진 것이죠.<br/><br/>
            
            유지보수도 필요하고, 요구사항도 발생하며<br/>
            인력이 부족해졌기 때문에 <br/>
            팀장 아래에서 일을 배우며 <br/>
            바로 실무에 뛰어들 가능성이 높습니다.<br/><br/>
            
            
            아무것도 모르지만 <br/>
            일단 만들어 온 뒤 피드백하고 <br/>
            때로는 혼나기도 하면서<br/>
            스파르타식으로 실무 경험을 늘릴 수 있습니다.<br/><br/>

            매출이 없는 기업의 경우에는<br/>
            그야말로 초읽기 싸움입니다.<br/><br/>
            
            Death Valley라고 부르는 힘든 시기를 겪습니다.<br/>
            정부 예산 또는 자기 자산을 갖고 인건비를 충당하며<br/>
            아이템을 만들어 매출이 발생하는 서비스까지 달리게 됩니다.<br/><br/>
            
            한명 한명의 역할이 크기 때문에<br/>
            최소한 실무를 할 수 있는 사람을 모집합니다.<br/><br/>

            모든 서비스 구축 이후에 투자유치에 실패하거나<br/>
            매출이 발생하지 않는다면<br/>
            그대로 해산될 위험이 있지만,<br/><br/>
            
            만약 매출이 크게 오르며 대박이 난다면<br/>
            스톡옵션(주식) 등으로 <br/>
            한몫을 챙길 수 있는 기회가 오기도 합니다.<br/><br/>

            <h3>- 대기업</h3>

            대기업 직무의 특징이라고 하면 “역할”입니다.<br/><br/>
            
            수백, 수천명의 사람이 각자의 위치에서<br/>
            정해진 역할을 수행하면서 <br/>
            유기적으로 돌아가는 시스템이 대기업입니다.<br/><br/>
            
            대기업에 종사하는 분들의 하나같은 피드백은<br/>
            회사의 부품처럼 일한다는 것입니다.<br/><br/>

            S대기업에서 일하셨던 교수님의 말씀에 따르면<br/>
            수천명의 사람이 S기업의 프로그램을<br/>
            각자의 위치에서 조금씩 조금씩 고친다고 하셨습니다.<br/><br/>
            
            내가 하고싶은 일을 한다기 보다는<br/>
            회사에서 필요한 곳에 투입되어<br/>
            회사의 것을 계속 고치고 추가하는 일을 하기 때문에<br/>
            본인의 것을 찾거나 만들고 싶은 사람에게는 <br/>
            독이 될 수 있다고 합니다.<br/><br/>

            대기업은 각각의 회사마다 <br/>
            준비해야 하는 절차나 시험이 있습니다.<br/><br/>
            
            개발 직군에서는 <br/>
            코딩테스트를 보기도 하기 때문에,<br/>
            전공자/비전공자를 막론하고 <br/>
            코딩테스트 알고리즘 준비만 <br/>
            6개월 이상 투자하는 사람도 많습니다. <br/><br/>
            
            직무 관련 능력과 별개로<br/>
            공인 영어성적을 요구하는 대기업도 많습니다.<br/><br/>

            이러한 대기업의 요구사항이 <br/>
            기업마다 다르기 때문에<br/><br/>
            대기업을 준비하실 계획이라면 <br/>
            <font color="#CA5C11">
            특정 기업을 하나 정하시고 <br/>
            기업에서 요구하는 스펙을 <br/>
            차근히 준비하시는 것이 훨씬 유리합니다.<br/><br/>
            </font>
            </div>
        </div>
        {isMobile?<div><Content2></Content2><Content3></Content3></div>:<div></div>}
        <Footer></Footer>
    </>)
}