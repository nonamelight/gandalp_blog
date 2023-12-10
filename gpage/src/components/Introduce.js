
import '../App.css';
export default function Introduce(){
    const intText = 
    <>
    <p>
    안녕하세요!
    </p>
    <p>
    <b>간</b>호사로 <b>달</b>려온 <b>프</b>로그래머
    </p>
    <p>
        간달프입니다.
    </p>
    <p>
        이직시 겪은 어려움 때문에
    </p>
    <p>
        뒤따라 오시는 IT 입문자분들께
    </p>
    <p>
        도움을 드리고 있습니다
    </p>
    </>
    
    return (
    <>
    <ul>

    <div className="engfont">🎩Introduce Gandalp</div>
    <div className="introtext">
        <div className="koreanfont">{intText}</div>
     </div>
    </ul>
    </>
    );
}