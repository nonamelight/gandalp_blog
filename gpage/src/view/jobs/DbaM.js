
import { useResponsiveApi } from "../../App";
import Banner from "../../components/Banner";
import Content2 from "../../components/Content2";
import Content3 from "../../components/Content3";
import Footer from "../../components/Footer";
import LeftMenu from "../../components/LeftMenu";
import css from "../../css/Contents.css";

export default function DbaM(){
    var {isMobile} = useResponsiveApi();
    return (<>
        <Banner></Banner>
        <div className="simpleflex">
            {isMobile?<div></div>:<LeftMenu></LeftMenu>}
            
            <div className="contenttext">
            <h1>- DBA(Database Administration)<br/> 데이터베이스관리자</h1>
            데이터베이스관리자(DBA)는 <br/>
            데이터베이스를 활용하는 개발자와는 업무의 성격이 조금 다릅니다. <br/><br/>
            
            한 조직 내에서 데이터베이스를 <br/>
            설치, 구성, 업그레이드, 관리, 감시하는 일을 맡습니다. <br/><br/>
            
            기업에서 다루는 데이터는 <br/>
            일반인들이 다루는 GB(기가바이트), TB(테라바이트) 단위가 아니라 <br/>
            PB(페타바이트 1024TB) 단위를 다루기도 하며, <br/>
            연식이 오래된 대형병원의 경우는 <br/>
            환자데이터만 YB(요타바이트)가 되는 경우도 있습니다.<br/><br/>

            이렇게 많은 데이터를 가진 경우에는 관리해야 하는 범위가 넓어지게 됩니다.<br/>
            하드디스크는 백업해야 하며, <br/>
            시간이 지나서 고장 난 하드디스크는 데이터의 손실 없이 교체해야 합니다.<br/><br/>

            데이터에 빠르게 접근하기 위해 데이터베이스 튜닝작업을 하거나, <br/>
            누군가가 사용하면서 데이터베이스에 잘못 날린 명령어로 인해<br/>
            오류가 발생하게 되면, 오류를 찾아내고 복구하는 작업 또한 병행해야 합니다.<br/><br/>

            데이터에 접근 가능한 사용자를 분류하여<br/>
            사용자에게 맞는 적절한 권한을 부여함으로써 보안에도 신경을 써야 합니다.<br/><br/><br/>

            관련 자격증을 소개하자면 아래와 같습니다.<br/>
            SQL-D는 개발이나 데이터를 조회/수정/삽입/삭제하는 정도의 <br/>
            기초기술을 익히는 데 도움이 됩니다.<br/><br/>
            
            SQL-P는 Professional의 약자입니다.<br/>
            컴퓨터활용능력 1급 정도의 난이도를 갖고 있다고 합니다. <br/>
            보통 SQL-P를 따기 위해서 1년 정도 공부를 한다는 이야기가 있습니다.<br/><br/>

            OCA/OCP/OCM은 오라클에서 운영하는 사설 자격증입니다. <br/>
            오라클 데이터베이스를 잘 다룰 수 있도록 학습하여 응시하는 자격증이기 때문에, <br/>
            많은 기업이 오라클을 사용하므로 취업에 유리할 수 있습니다. <br/><br/>
            
            OCA가 가장 난이도가 낮고, OCP가 컴퓨터 활용능력 1급 정도의 난이도라고 합니다. <br/>
            OCM은 오라클 자격증의 가장 최고 단계 자격증입니다.<br/><br/>
                        
            응시료는 각각 13/20/80만 원 정도 발생합니다.<br/>
            </div>
        </div>
        {isMobile?<div><Content2></Content2><Content3></Content3></div>:<div></div>}
        <Footer></Footer>
    </>)
}