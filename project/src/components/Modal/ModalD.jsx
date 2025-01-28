import close from '/close.png'; 
import close1 from '/close1.png'; 
import add from '/add1.png'; 
import done from '/done.png'; 
import './Modal.css';  
import './ModalBePodcaster.css';  
import MainButton2 from '../Button/MainButton2'
import { useState, useRef } from "react";
export default function  ModalD ({ isOpen, onClose }, props) {
    if (!isOpen) return null;
    return(
        <div className="modal-overlayd">
    </div> 
    )

   

}