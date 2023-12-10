import { useResponsiveApi } from '../App';
import css from '../css/Contents.css'
export default function Content2(){
  const {isMobile} = useResponsiveApi();
    return (<>
    <div className={isMobile?"contentmobile2":"content2"}>
        <h3>
        [IT이직 최다질문]
        </h3>
        <div className='content2flex'>
            <div className={isMobile?'contentmobile2left':'content2left'}>
                <a href='/bloginfo' className='link'>
                    <p>
                    <font color="#CA5C11"><b>블로그 목적</b></font>
                    </p>
                </a>
                <a href='/gukbi' className='link'>
                    <p>
                    국비 필요여부
                    </p>
                </a>
                <a href='/resource' className='link'>
                    <p>
                    자원 소요
                    </p>
                </a>
                <a href='/scala' className='link'>
                    <p>
                    학은제 필요여부
                    </p>
                </a>
                <a href='/pr' className='link'>
                    <p>
                    자기소개서
                    </p>
                </a>
                <a href='/meet' className='link'>
                    <p>
                    면접
                    </p>
                </a>
                
            </div>        
            <div className={isMobile?'contentmobile2right':'content2right'}>
                <a href='/companyselect' className='link'>
                    <p>
                    스타트업 vs 대기업
                    </p>
                </a>
                <a href='/nego' className='link'>
                    <p>
                    연봉협상
                    </p>
                </a>
                <a href='/goodcompany' className='link'>
                    <p>
                    좋은 회사란
                    </p>
                </a>
                <a href='/itsidejob' className='link'>
                    <p>
                    IT 부업
                    </p>
                </a>
                <a href='/itadjust' className='link'>
                    <p>
                    IT 적성
                    </p>
                </a>
            </div>
        </div>
        
    </div>
    </>)
}