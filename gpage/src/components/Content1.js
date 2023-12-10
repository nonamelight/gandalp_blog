import { useResponsiveApi } from '../App';
import css from '../css/Contents.css'
export default function Content1(){
    
    const {isMobile} = useResponsiveApi();
    return (<>
    <div className={isMobile?"contentmobile1":"content1"}>
        <h3>
        [🎩간달프 소개]
        </h3>
        <p>
        2015.02. 전북대학교 간호학과 4년 졸업
        </p>
        <p>
2015~ 전주 종합병원 병동에서 1년 임상경력
        </p>
        <p>
2016~청주 종합병원 중환자실에서 2년 임상경력
        </p>
        <p>
2018~서울 전문병원 임상에서 1년 임상경력
        </p>
        <p>
2019~ 경기 공공기관 연구소에서 의료보안 연구원
        </p>
        <p>
2021~2023 스타트업 개발자
        </p>
        <p>
<b> ▶ 2023~ 연구소 전산 개발 및 관리자 재직중</b>
        </p><br/>
        <b>
        <p>블로그는 단순히 직업/직군에 대해서 </p>
        <p>궁금하신 분들을 위한 <font color="#f80000">최소한의 정보제공</font>이며</p>
        <p><font color="#f80000">진지하게</font> 이직을 생각하시는 분께서는<br/> </p>
        <p><font color="#f80000">전자문서</font>를 참고하세요</p>
        </b>
    </div>
    </>)
}