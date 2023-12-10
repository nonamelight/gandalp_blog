import { useResponsiveApi } from "../../App";
import Banner from "../../components/Banner";
import Content2 from "../../components/Content2";
import Content3 from "../../components/Content3";
import Footer from "../../components/Footer";
import LeftMenu from "../../components/LeftMenu";
import css from "../../css/Contents.css";
import book from "../../images/se_book.png";
export default function SystemEngineerM(){
    var {isMobile} = useResponsiveApi();
    return (<>
        <Banner></Banner>
        <div className="simpleflex">
            {isMobile?<div></div>:<LeftMenu></LeftMenu>}
            
            <div className="contenttext">
            <h1>시스템 엔지니어</h1><br/>
             시스템 엔지니어는 <br/>
             컴퓨터에 시스템과 서비스를 설치하고 <br/>
             유지보수하는 업무를 담당합니다. <br/><br/>

             리눅스와 윈도우를 주로 설치하거나 사용하게 됩니다. <br/><br/>
             
             서버 프로토콜의 종류는 무수히 많습니다.<br/>

             메일 프로토콜을 사용하여 메일을 서비스하는 메일서버, <br/>
             데이터베이스가 설치된 데이터베이스 서버, <br/>
             사용자의 접속이나 시스템의 작동 흔적을 기록하는 로그 서버, <br/>
             인터넷 홈페이지를 열어서 사용할 수 있게 해주는 웹서버, <br/>
             통계나 인공지능의 고용량 데이터를 연산하는 GPU 서버, <br/>
             네트워크의 숫자 주소를 문자로 알려주는 DNS 서버, <br/>
             네트워크 주소를 자동으로 뿌려주는 DHCP 서버... 등등 <br/><br/>
             
             다 언급하지 못하는 많은 서버가 존재합니다.<br/><br/>

             시스템 엔지니어가 되기 위해 <br/>
             공부하기 위해서는 운영체제에 대해서 잘 알아야 합니다.<br/><br/>

             특히 기업의 서버는 리눅스로 운영되는 경우가 많으므로 <br/>
             리눅스마스터 2급/1급, LPIC,RHCSA 자격증 등을 갖추는 것이 <br/>
             취업에 유리할 수 있습니다.<br/><br/>
             
             특히 리눅스마스터 2급은 비록 덤프와 문제은행으로 출제되기는 하지만,<br/>
             학점은행제의 학점을 취득하는데 사용될수 있습니다.<br/> <br/>

             <div className="tech1">
                <img src={book} alt="book"></img>
            </div>
            <br/>
            자격증 보다는 실력을 갖추기 원하시는 분을 위해 <br/>
            추천하는 책으로는 한빛미디어에서 출판한 <br/>
            이것이리눅스다/이것이우분투다/이것이윈도우다 등 <br/>
            로봇이 표지에 그려진 이것이- 시리즈를 추천드립니다.<br/><br/>


            </div>
        </div>
        {isMobile?<div><Content2></Content2><Content3></Content3></div>:<div></div>}
        <Footer></Footer>
    </>)
}