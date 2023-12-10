import elecbook from '../images/elecbook.png';
import elecbook2 from '../images/elecbook2.png';
import elecbook3 from '../images/elecbook3.png';
import elecbook4 from '../images/elecbook4.png';
import css from '../css/Elecbook.css';
export default function Elecbook(isMobile){
    
    isMobile = isMobile.isMobile;
    return (<>
        <div className="elecbooktitleflex">
            <b className={isMobile?'elecbookmobiletitle':'elecbooktitle'}>추천 도서 BEST 4 !!</b>            
        </div>
        <div className={ isMobile? "elecbookmobile":"elecbook"}>
        <a href='https://kmong.com/gig/467166'>
            <img src={elecbook}  alt='elecbook'></img>
        </a>
        <a href='https://kmong.com/gig/335637'>
            <img src={elecbook2} alt='elecbook'></img>
        </a>
        <a href='https://kmong.com/gig/272623'>
            <img src={elecbook3} alt='elecbook'></img>
        </a>
        <a href='https://kmong.com/gig/279354'>
            <img src={elecbook4} alt='elecbook'></img>
        </a>
        </div>
    </>);
}