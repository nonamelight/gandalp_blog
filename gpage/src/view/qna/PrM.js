import { useResponsiveApi } from "../../App";
import Banner from "../../components/Banner";
import Content2 from "../../components/Content2";
import Content3 from "../../components/Content3";
import Footer from "../../components/Footer";
import LeftMenu from "../../components/LeftMenu";
import techList from "../../images/pr_techlist.png";
import css from "../../css/Contents.css";

export default function PrM(){
    var {isMobile} = useResponsiveApi();
    return (<>
        <Banner></Banner>
        <div className="simpleflex">
            {isMobile?<div></div>:<LeftMenu></LeftMenu>}
            
            <div className="contenttext">
            <h1>자기소개서 작성이 어려워요</h1>

            비전공자의 가장 큰 문턱이자 고민이 되는 부분은<br/>
            기업에 제출을 하기 위한 이력서와 자기소개서입니다.<br/><br/>
            
            자기소개서에 대한 자기계발 서적을 읽으시거나<br/>
            자료를 참고하신 분들도 여럿 계시겠지만,<br/>
            일반적인 기업의 이력서와 다르게<br/>
            <b>IT 분야에서는 구현 할 수 있는 기술에 대해서 주목합니다.</b><br/><br/>

            이는 불리하게 말하면 <br/>
            기술에 대해서 잘 모르는 비전공자에게는 장벽이 될 수도 있지만,<br/>
            유리하게 말하면 공부만 열심히 하면 <br/>
            곧 내가 공부했던 기술에 대해서 <br/>
            각각 적을 수 있다는 큰 장점이 되기도 합니다.<br/><br/>
            <div className="tech1">
                <img src={techList}  alt='techList'></img>
            </div>
            비전공자라는 이유는<br/>
            이력서를 제출 할 때에<br/>
            못하는 것에 대한 변명이 되지 않습니다.<br/><br/>

            기업에서는 못 하는 사람을 뽑을 이유가 없으니까요.<br/><br/>
            결국 비전공자라는 타이틀을 벗겨내고 <br/><br/>
            <b>전공자 못지 않은 실력을 갖출 때까지,<br/>
            전공자와 어깨를 견줄 수 있을 때까지,<br/>
            내 전공이 하나 더 새로 생길 때까지 <br/><br/>
            실력을 갈고 닦으셔야합니다.<br/><br/>
            </b>

            <font color="#CA5C11"> “ 새로운 전공을 갖춘다는 것은 결코 쉽지 않습니다.<br/>
            대학 4년 과정을 단기간에 <br/>
            집중해서 공부해야 한다고 생각하시며<br/>
            접근해야합니다. ”</font>
            </div>
        </div>
        {isMobile?<div><Content2></Content2><Content3></Content3></div>:<div></div>}
        <Footer></Footer>
    </>)
}