import { useResponsiveApi } from "../../App";
import Banner from "../../components/Banner";
import Content2 from "../../components/Content2";
import Content3 from "../../components/Content3";
import Footer from "../../components/Footer";
import LeftMenu from "../../components/LeftMenu";
import css from "../../css/Contents.css";

export default function ScalaM(){
    var {isMobile} = useResponsiveApi();
    return (<>
        <Banner></Banner>
        <div className="simpleflex">
            {isMobile?<div></div>:<LeftMenu></LeftMenu>}
            
            <div className="contenttext">
            <h1>학점은행제 필요해요?</h1>
            학점은행제에 대한 필요성은 의견이 분분합니다.<br/> 
            따라서 필요한 이유와 필요하지 않은 이유를 나눠서 <br/>
            설명드리는 것이 이해하기 쉬울 것 같습니다.<br/><br/>

            <h3>- 필요한 이유</h3><br/><br/>
            
            또 하나의 전공이 생긴다는 관점에서 필요하다고 할 수 있습니다.<br/>
            학사학위가 없는 전문대 졸업의 경우에는 <br/>
            독학사를 통해서 학사학위를 취득할 수 있다는 이점이 있습니다.<br/><br/>

            이력서에 한 줄 정도는 더 넣을 수 있기 때문에<br/>
            학사학위를 요구하는 직업군에서는 <br/>
            일부 필요하다고 할 수 있습니다ex) 연구원.<br/><br/>

            하지만 연구원을 희망하시는 분께서는 <br/>
            학사학위보다는 같은 비용으로 <br/>
            논문을 읽거나 쓸 수 있는 석사학위를 진학하시는 것이<br/>
            취업이나 업무역량에 있어서 유리합니다<br/><br/>

            학원을 통해 커리큘럼을 진행할 경우<br/>
            비전공자라는 이유로 학점은행제에 대해서 권고를 받습니다.<br/>
            
            학은제를 진행하기 위해 <br/>
            약 300만원 이상의 등록금과 수강료가 필요하지만,<br/>
            300만원을 내고 쉬운 커리큘럼을 마친 뒤<br/>
            학사 학위 하나가 더 생긴다고 생각하면 <br/>
            괜찮은 거래일 수도 있습니다.<br/><br/>

            취득 과정은 <br/>
            온라인강의 수강(출석), 온라인과제 제출, 온라인 중간/기말고사로 <br/>
            이루어져 있습니다.<br/><br/>
            
            이력서에 학사학위를 한줄 더 넣을 수 있기 때문에 <br/>
            전공 학위를 요구하는 직업의 선택 폭이 넓어진 장점이 있습니다.<br/><br/><br/>

            <h3>- 필요하지 않은 이유</h3><br/><br/>
            학점은행제를 통한 공학은 IT분야에서 크게 인정해주지 않는 분위기입니다. <br/><br/>
            
            기술직을 희망하시는 경우에는 <br/>
            기술력을 증명하기 위한 자료를 만드는 것이 취업에 유리합니다.<br/>

            왜냐하면 기술에 뛰어나다는 것만 입증되면<br/>
            고졸도 데려가는 것이 기술직의 특성입니다.<br/><br/>

            필자는 학점은행제를 통해 정보보호학 학사를 취득하였습니다.<br/><br/>
            
            하지만 연구원 생활을 시작한 것은 학사학위 취득 전입니다.<br/><br/>
            
            학위 취득을 완료한 것은 연구원 생활중이었고,<br/>
            학위보다는 공부했던 과정과 결과를 눈여겨 보셨기 때문에<br/>
            취업까지 이어졌습니다.<br/><br/>
            </div>
        </div>
        {isMobile?<div><Content2></Content2><Content3></Content3></div>:<div></div>}
        <Footer></Footer>
    </>)
}