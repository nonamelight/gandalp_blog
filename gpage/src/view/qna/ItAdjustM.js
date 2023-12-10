import { useResponsiveApi } from "../../App";
import Banner from "../../components/Banner";
import Content2 from "../../components/Content2";
import Content3 from "../../components/Content3";
import Footer from "../../components/Footer";
import LeftMenu from "../../components/LeftMenu";
import css from "../../css/Contents.css";

export default function ItAdjustM(){
    var {isMobile} = useResponsiveApi();
    return (<>
        <Banner></Banner>
        <div className="simpleflex">
            {isMobile?<div></div>:<LeftMenu></LeftMenu>}
            
            <div className="contenttext">
            <h1>IT가 적성에 맞을지 모르겠어요</h1>            
            심리학에서 사용하는 유명한 문구가 있습니다.<br/><br/>

            <h3>
            <font color="#CA5C11">
            당신이 좋아한다고 말하는 그것은<br/>
            그것에 많은 시간이 노출되어 잘하게 되고<br/>
            잘함으로 인해 긍정적인 피드백을 받았던 경험이 많은 것입니다.<br/><br/>

            당신이 좋아하는 것으로 성공할 확률 보다,<br/>
            당신이 무언가를 열심히 해서 그것을 잘하게 되고<br/>
            잘하게 된 그것을 좋아하게 될 확률이 <br/>
            더욱 크다고 할 수 있습니다.<br/><br/>
            </font>
            </h3>

            연구원을 하면서 많은 박사님과 교수님들을 뵈었고, <br/>
            수 많은 전문가들을 만났습니다.<br/><br/>

            소위 “성공했다”라고 하는 분들의 말씀을 들어보면<br/>
            공통점이 많았습니다.<br/><br/>
            
            
            어디로 가야할지 몰랐지만 <br/>
            주어진 길에서 최선을 다했고,<br/>
            최선을 다하다보니 잘하게 되었고, <br/>
            이게 내 밥그릇이 되었다.<br/><br/>

            좋아하는 것, 나에게 잘 맞는 것을 해서 성공했던 사람도 있기는 하였지만,<br/>
            상대적인 비율이 적었습니다.<br/><br/>

            이를 통해 알게 된 사실은 <br/>
            어떤 분야라도 그 분야를 깊게 파고 전문성이 더해진다면 <br/>
            적성을 찾을 필요 없이 내 적성이 될 확률이 높아진다는 것입니다.<br/><br/>

            IT가 적성에 맞지 않는 것 같다고 투정하는 분들의 이야기를 들어보면 <br/>
            대부분이 2~3개월정도 해보면서 <br/>
            생각보다 에러도 많이나고, 모르는 용어도 많고, 잘 풀리지 않아 <br/>
            실망하여 고민을 하는 경우가 많았습니다.<br/><br/>
            
            우리는 2~3개월정도 해보고 <br/>
            모든 IT에 통달하는 사람을 <br/>
            소위 “천재”라고 부릅니다.<br/><br/>

            천재가 아닌 이상 못하는 것은 당연한 것이고,<br/>
            잘하기 위해서는 꾸준한 학습과 경험을 통해 실력을 쌓아야 하는 것입니다.<br/><br/>

            또, MBTI와 관련지어서도 많이 질문을 받았지만, <br/>
            IT내에 특정 MBTI다 하여서 <br/>
            IT의 업무를 못한다거나 하는 경우를 보기도 힘들었습니다.<br/>

            <h3>
            <font color="#CA5C11"> 
            성실한 사람과, 자기계발을 게을리하지 않는 사람이
            IT에 적합한 것 같습니다.
            </font>
            </h3>
            </div>
        </div>
        {isMobile?<div><Content2></Content2><Content3></Content3></div>:<div></div>}
        <Footer></Footer>
    </>)
}