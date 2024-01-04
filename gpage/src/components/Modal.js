import { useState } from "react";
import Modal from 'react-modal';
import elecbook from '../images/elecbook.png';
import css from '../css/Modal.css';
export default function FrontModal(){    
    const [isOpenModal, setisOpenModal] = useState(true);
    return <>
        <div id="modalframe" >
            <Modal id="modal" isOpen={isOpenModal} onRequestClose={()=>setisOpenModal(false)} >
                <div>
                    <a href="https://kmong.com/gig/467166">    
                        <img src={elecbook}>
                        </img>                        
                    </a>                       
                </div>
            </Modal>;
            
        </div>

    </>
}