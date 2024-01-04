import { useState } from "react";
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
import css from "../css/Pc.css";
import FrontModal from "../components/Modal";
export default function Pc(){
    var {isMobile} = useResponsiveApi();
    
    return (
        <>
        <FrontModal></FrontModal>
        <div className="pcmain">
            <div className="leftmenu">
                <div className="logoandprofile">
                    <Logo></Logo>
                    <Profile></Profile>
                    <Introduce></Introduce>
                </div>
            </div>
            <div className="bodycontent">
                <ul>
                    <Banner></Banner> 
                    <div className="contents">
                        <Content1></Content1>
                        <Content2></Content2>
                        <Content3></Content3>
                        {/* <Content4></Content4> */}
                    </div>
                    <Elecbook isMobile={isMobile}></Elecbook>
                </ul>
            </div>
            <Footer></Footer>
        </div>
        </>
    )
}