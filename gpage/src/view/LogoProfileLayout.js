import { Route, Routes } from 'react-router-dom';
import '../App.css';
import Mobile from './Mobile';
import Pc from './Pc';
import { useResponsiveApi } from '../App';

import BlogInfoM from './qna/BlogInfoM';
import GukbiM from './qna/GukbiM';
import ResourceM from './qna/ResourceM';
import ScalaM from './qna/ScalaM';
import PrM from './qna/PrM';
import MeetM from './qna/MeetM';
import CompanyselectM from './qna/CompanyselectM';
import GoodCompanyM from './qna/GoodCompanyM';
import ItAdjustM from './qna/ItAdjustM';
import FrontendM from './jobs/FrontendM';
import BackendM from './jobs/BackEndM';
import FullstackM from './jobs/FullstackM';
import GameM from './jobs/GameM';
import EmbededM from './jobs/EmbededM';
import DbaM from './jobs/DbaM';
import SystemEngineerM from './jobs/SystemEngineerM';
import CloudEngineerM from './jobs/CloudEngineerM';
import SystemAdminM from './jobs/SystemAdminM';
import NetworkAdminM from './jobs/NetworkAdminM';
import CloudAdminM from './jobs/CloudAdminM';
import WhiteHackM from './jobs/WhiteHackM';
import SecureConsultM from './jobs/SecureConsultM';
import NetworkEngineerM from './jobs/NetworkEngineerM';
import MonitoringM from './jobs/MonitoringM';
import ForensicM from './jobs/ForensicM';
import NegoM from './qna/NegoM';
import ITSidejobM from './jobs/ITSidejobM';
import CsDevM from './jobs/CsDevM';
import ReverseEngineering from './jobs/ReverseEngineering.js';
export default function LogoProfileLayout(){
  const {isMobile} = useResponsiveApi();
    return (
        <>
<Routes>
    <Route path='/' element={
          isMobile? 
          <Mobile ></Mobile>
            : <Pc ></Pc>}>
    </Route>
          <Route path='/bloginfo' element={
        <BlogInfoM ></BlogInfoM>
          }>
    </Route>
    <Route path='/gukbi' element={         
          <GukbiM ></GukbiM>}>
    </Route>
    <Route path='/resource' element={
          <ResourceM ></ResourceM>}>
    </Route>
    <Route path='/scala' element={
          <ScalaM ></ScalaM>}>
    </Route>
    <Route path='/pr' element={
          <PrM ></PrM>}>
    </Route>
    <Route path='/meet' element={
          <MeetM ></MeetM>}>
    </Route>
    <Route path='/companyselect' element={
          <CompanyselectM ></CompanyselectM>}>
    </Route>
    <Route path='/nego' element={
          <NegoM ></NegoM>}>
    </Route>
    <Route path='/goodcompany' element={
          <GoodCompanyM ></GoodCompanyM>}>
    </Route>
    <Route path='/itsidejob' element={
          <ITSidejobM ></ITSidejobM>}>
    </Route>
    <Route path='/itadjust' element={
          <ItAdjustM ></ItAdjustM>}>
    </Route>
    <Route path='/frontend' element={
          <FrontendM ></FrontendM>}>
    </Route>
    <Route path='/backend' element={
          <BackendM ></BackendM>}>
    </Route>
    <Route path='/fullstack' element={
          <FullstackM ></FullstackM>}>
    </Route>
    <Route path='/cs' element={
          <CsDevM ></CsDevM>}>
    </Route>
    <Route path='/game' element={
          <GameM ></GameM>}>
    </Route>
    <Route path='/embeded' element={
          <EmbededM ></EmbededM>}>
    </Route>
    <Route path='/networkengineer' element={
          <NetworkEngineerM ></NetworkEngineerM>}>
    </Route>
    <Route path='/dba' element={
          <DbaM ></DbaM>}>
    </Route>
    <Route path='/systemengineer' element={
          <SystemEngineerM ></SystemEngineerM>}>
    </Route>
    <Route path='/cloudengineer' element={
          <CloudEngineerM ></CloudEngineerM>}>
    </Route>
    <Route path='/systemadmin' element={
          <SystemAdminM ></SystemAdminM>}>
    </Route>
    <Route path='/networkadmin' element={
          <NetworkAdminM ></NetworkAdminM>}>
    </Route>
    <Route path='/cloudadmin' element={
          <CloudAdminM ></CloudAdminM>}>
    </Route>
    <Route path='/whitehack' element={
          <WhiteHackM ></WhiteHackM>}>
    </Route>
    <Route path='/reverseengineering' element={
          <ReverseEngineering ></ReverseEngineering>}>
    </Route>
    <Route path='/secureconsult' element={
          <SecureConsultM ></SecureConsultM>}>
    </Route>
    <Route path='/monitoring' element={
          <MonitoringM ></MonitoringM>}>
    </Route>
    <Route path='/forensic' element={
          <ForensicM ></ForensicM>}>
    </Route>
        
</Routes>        
        </>
    )
}