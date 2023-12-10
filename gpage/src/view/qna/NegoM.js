import { useResponsiveApi } from "../../App";
import Banner from "../../components/Banner";
import Content2 from "../../components/Content2";
import Content3 from "../../components/Content3";
import Footer from "../../components/Footer";
import LeftMenu from "../../components/LeftMenu";
import css from "../../css/Contents.css";

export default function NegoM(){
    var {isMobile} = useResponsiveApi();
    return (<>
        <Banner></Banner>
        <div className="simpleflex">
            {isMobile?<div></div>:<LeftMenu></LeftMenu>}
            
            <div className="contenttext">
            <h1>연봉 협상은 어떻게하나요?</h1>
            스타트업에서 경력을 쌓고 대기업에 입사하는 경우는<br/>
            연봉 협상이라기 보다는 <br/>
            대기업의 내규에 의한 연봉 테이블이 워낙 높기 때문에 예외로 두겠습니다.<br/><br/>

            IT는 기술력이 명확하다 보니<br/>
            기술력을 필요로 하는 회사에서 <br/>
            더 나은 대우를 약속하며<br/>
            이직이 잦은 편입니다.<br/><br/>
            
            근로시간과 호봉으로 계산하는 연봉이 아니라,<br/>
            기업이 필요로 하는 기술의 가치에 따라서<br/>
            연봉 협상이 이뤄지기도 합니다.<br/><br/>

            때문에 정기적으로 연봉 협상을 하지 않는 기업은<br/>
            그 인력이 유출되기도 쉽습니다.<br/><br/>
            
            흔히 가치를 몰라주기 때문에 떠난다고들 말을 합니다.<br/><br/>
            
            <h3>                
            그렇다면 이직을 많이한다고<br/>
            연봉이 계속해서 상승하는 것일까요?<br/><br/>
            </h3>
                            
            꼭 그렇지만은 않습니다.<br/><br/>

            너무 잦은 이직은 조각 경력이 되어버려서<br/>
            다음 회사로 이직을 할 때에 <br/>
            오히려 불성실 하다는 선입견을 심어줄 수있습니다.<br/><br/>

            이직을 해야하는 이유는 명확해야합니다.<br/>
            또한 직장내의 갈등으로 인해<br/>
            좋지 못하게 퇴사하는 경우는 지양해야합니다.<br/><br/>
            
            왜냐하면 이직에 대한 이유가 <br/>
            단순 변심, 타당하지 못한 충동적인 이유,<br/>
            직장내 갈등 등이라면 <br/><br/>

            다시 입사 했을 때에 <br/>
            동일한 이유로 퇴사 할 수 있는 사람이라는<br/>
            경향성을 나타내게 됩니다.<br/><br/>

            이직 시 연봉 협상은 직전 연봉을 기준으로 <br/>
            협상 테이블에 올려놓습니다.<br/><br/>
            
            <h3>
            초봉이 중요한 이유가 여기에 있습니다.<br/><br/>
            </h3>
            
            초봉이 너무 낮으면 <br/>
            낮은 초봉을 기준으로 협상하기 때문에<br/>
            다시 만족스럽지 못한 연봉을 받더라도<br/>
            협상에 응할 수밖에 없습니다.<br/><br/>


            </div>
        </div>
        {isMobile?<div><Content2></Content2><Content3></Content3></div>:<div></div>}
        <Footer></Footer>
    </>)
}