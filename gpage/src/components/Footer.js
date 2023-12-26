import css from '../css/Footer.css';

export default function Footer(){
    return(<>    
    <footer className='kmongfooter'>
            <div className='kmonglink'>
                <a href='https://kmong.com/gig/467166' className='linkfont' target='_blank'>
                    전자책<br/>보기
                </a>
            </div>
    </footer>
        <footer className="footer">
            <ul>
                <div className='footertext'>
                    Developed by Gandalp
                </div>
                <div className='footertext'>
                    nonamelight1@naver.com 경동훈
                </div>
            </ul>
        </footer>
    </>)
}