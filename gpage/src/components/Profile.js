import { useResponsiveApi } from '../App';
import css from '../css/Profile.css';
import profile from '../images/profile.png';
export default function Profile(){
  var {isMobile} = useResponsiveApi();
    return  <div className={isMobile? "profilemobile":"profile"}>
    <img src={profile} className={isMobile? "profilemobile":"profile"} alt="logo" />
  </div>;
}