import { useResponsiveApi } from "../../App";
import Banner from "../../components/Banner";
import Content2 from "../../components/Content2";
import Content3 from "../../components/Content3";
import Footer from "../../components/Footer";
import LeftMenu from "../../components/LeftMenu";
import css from "../../css/Contents.css";

export default function GoodCompanyM(){
    var {isMobile} = useResponsiveApi();
    return (<>
        <Banner></Banner>
        <div className="simpleflex">
            {isMobile?<div></div>:<LeftMenu></LeftMenu>}
            
            <div className="contenttext">
            <h1>어떤 회사가 좋은 회사인가요?</h1>
            <h3>- 잡플래닛</h3>
            
            일반적으로 이력서를 제출하면서 <br/>
            사내 문화를 간접적으로 알 수 있는 방법은<br/>
            잡플래닛과 같은 기업 후기 사이트의<br/>
            리뷰를 참고하는 것입니다.<br/><br/>
            
            생각보다 퇴사자들이나 재직자들의 불평불만을<br/>
            날것으로 반영하기 때문에 <br/>
            신뢰도가 높다고 여겨집니다. <br/><br/>
            
            <h3>최소 평점이 3.0 이상인 곳을 추천드립니다.<br/><br/></h3>

            ☆ 5개로 평점을 부여하는데,<br/>
            3개를 보통이라고 한다면<br/>
            3.0 이하는 보통 미만이라는 후기이기 때문에 <br/>
            재직자/퇴사자들의 불만이 <br/>
            어느정도 있다고 볼 수 있습니다.<br/><br/>
            
            물론 개인마다 성향이 다르기 때문에 <br/>
            충분히 적당한 환경인데도<br/>
            예민하게 반응하는 사람이 있을수 있습니다.<br/><br/>
            
            하지만 리뷰의 개수가 충분하다면 <br/>
            공통적으로 말하는 부분을 참고 삼아서<br/>
            기업의 문화를 엿보시는 것을 추천 드립니다.<br/><br/>

            참고로 잡플래닛은 <br/>
            여러 주요 대학들과 연계가 되어있어서,<br/>
            등록된 제휴대학의 루트를 통해 회원가입을 한다면<br/>
            프리미엄까지는 아니더라도 <br/>
            일반 기업 리뷰와 연봉 정보 등을 자유롭게 열람 할 수 있습니다.<br/><br/>
            
            본인이 대학을 졸업하셨다면,<br/>
            내가 졸업한 대학교가 잡플래닛과 연계되어 있는지 <br/>
            꼭 확인해보세요.<br/><br/>

            <h3>기업 재무제표</h3><br/><br/>

            기업의 매출과 이익은 <br/>
            기업의 재무적 상황을 엿볼 수 있는 중요한 지표입니다. <br/><br/>
            
            특히 영업이익은 <br/>
            기업이 성장을 하고있는지, 위기를 겪고 있는지 알려줍니다.<br/><br/>
            
            잡코리아 뿐만 아니라, 사람인에도 기업정보를 참고하면 <br/>
            재무현황을 살펴볼 수 있습니다.<br/><br/>

            기업의 성장과 직장인의 커리어는<br/>
            밀접한 연관성이 있습니다.<br/>
            
            특히 취업이나 이직을 할 경우,<br/>
            기업이 인력을 구하는 이유가 <br/><br/>

            경영 악화 때문에 능력있는 사람이 도망가 버려서 <br/>
            대체할 인력을 찾고있는 것인지, <br/><br/>
            
            경영이 너무 잘되어서<br/>
            일거리가 많아져 사람이 필요한 것인지를 <br/><br/>

            구분할 수 있어야 합니다.<br/><br/>

            <h3>
            <font color="#CA5C11">
            그래도 아직 어려우시다고요?<br/>
            매출액을 사원수로 나누어보세요.<br/>
            인원당 4천만원 이상이라면 <br/>
            정말 잘 운영되고 있는 것입니다.
            </font>
            </h3>
            </div>
        </div>
        {isMobile?<div><Content2></Content2><Content3></Content3></div>:<div></div>}
        <Footer></Footer>
    </>)
}