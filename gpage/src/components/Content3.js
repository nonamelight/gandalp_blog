import { useResponsiveApi } from '../App';
import css from '../css/Contents.css'
export default function Content3(){    
  const {isMobile} = useResponsiveApi();
    return (<>    
   <div className={isMobile?"contentmobile3":"content1"}>
        <h3>
        [IT 직업직군]
        </h3>
        <div className='content3flex'>
            <div className='contentmobile3left'>
            
                <a href='/frontend' className='link'>
                    <p>
                    프론트엔드 개발자
                    </p>
                </a>
                <a href='/backend' className='link'>
                    <p>
                    백엔드 개발자
                    </p>
                </a>
                <a href='/fullstack' className='link'>
                    <p>
                    풀스택 개발자
                    </p>
                </a>
                <a href='/cs' className='link'>
                    <p>
                    CS 개발자
                    </p>
                </a>
                <a href='/game' className='link'>
                    <p>
                    게임 개발자
                    </p>
                </a>
                <a href='/embeded' className='link'>
                    <p>
                    임베디드 개발자
                    </p>
                </a>
                <a href='/networkengineer' className='link'>
                    <p>
                    네트워크 엔지니어
                    </p>
                </a>
                <a href='/dba' className='link'>
                    <p>
                    Database Administrator
                    </p>
                </a>
            </div>        
            <div className='contentmobile3right'>
                <a href='/systemengineer' className='link'>
                    <p>
                    시스템 엔지니어
                    </p>
                </a>
                <a href='/cloudengineer' className='link'>
                    <p>
                    클라우드 엔지니어
                    </p>
                </a>
                <a href='/systemadmin' className='link'>
                    <p>
                    시스템 관리자
                    </p>
                </a>
                <a href='/networkadmin' className='link'>
                    <p>
                    네트워크 관리자
                    </p>
                </a>
                <a href='/cloudadmin' className='link'>
                    <p>
                    클라우드 관리자
                    </p>
                </a>
                <a href='/whitehack' className='link'>
                    <p>
                    모의해킹
                    </p>
                </a>
                <a href='/reverseengineering' className='link'>
                    <p>
                    악성코드 분석
                    </p>
                </a>
                <a href='/secureconsult' className='link'>
                    <p>
                    보안 컨설팅
                    </p>
                </a>
                <a href='/monitoring' className='link'>
                    <p>
                    보안관제
                    </p>
                </a>
                <a href='/forensic' className='link'>
                    <p>
                    디지털 포렌식
                    </p>
                </a>
            </div>
        </div>
        
    </div>
    </>)
}