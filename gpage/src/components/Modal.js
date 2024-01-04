import { useState } from "react";
import Modal from 'react-modal';
import elecbook from '../images/elecbook.png';
import css from '../css/Modal.css';
import { useResponsiveApi } from "../App";
export default function FrontModal(){    
    const [isOpenModal, setisOpenModal] = useState(true);    
    const {isMobile} = useResponsiveApi();
    return <>
        <div id="modalframe" >
            <Modal id={isMobile?"modalmobile":"modal"} isOpen={isOpenModal} onRequestClose={()=>setisOpenModal(false)} >
                <div>
                    <a href="https://kmong.com/gig/467166" target="_blank">    
                        <img src={elecbook}>
                        </img>                        
                    </a>                       
                </div>
            </Modal>;
            
        </div>

    </>
}