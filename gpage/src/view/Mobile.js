import { useResponsiveApi } from "../App";
import Banner from "../components/Banner";
import Content1 from "../components/Content1";
import Content2 from "../components/Content2";
import Content3 from "../components/Content3";
import Content4 from "../components/Content4";
import Elecbook from "../components/Elecbook";
import Footer from "../components/Footer";
import Introduce from "../components/Introduce";
import Logo from "../components/Logo";
import Profile from "../components/Profile";
import css from "../css/Mobile.css";
import FrontModal from "../components/Modal";

export default function Mobile(){
  var {isMobile} = useResponsiveApi();
    return (<>
    
    <FrontModal></FrontModal>
  <Banner></Banner>
    <div className="leftmenu">
    <div className={"logoandprofilemobile"}>
      <Logo></Logo>
      <Profile ></Profile>
    </div>
    <Introduce></Introduce>
  </div><ul>

  <Elecbook isMobile={isMobile}></Elecbook>
  </ul>
    <Content1></Content1>
    <Content2></Content2>
    <Content3></Content3>
    {/* <Content4></Content4>   */}
    
    <Footer></Footer>
    </>);
}