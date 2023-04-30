import {useState} from 'react';
import daegu from '../../../images/daegu.svg'
import './FloatingButton.css'
import ModalDandi from './ModalDandi';
import ModalInfo from './ModalInfo'
  
const FloatingButton = () => {

    //플로팅버튼 on/off
    const [isOpen, setOpen] = useState(false);  // 메뉴의 초기값을 false로 설정
    const toggleMenuOpen = () => { //클릭할때마다 true<->false 번갈아가면서 나옴
            setOpen(!isOpen);
    }

    //Dandi모달창 on/off
    const [modalDandi, setModalDandi] = useState(false);
    const toggleModalDandi = () => {
        setModalDandi(!modalDandi);
    }    

    //Info모달창 on/off
    const [modalInfo, setModalInfo] = useState(false);
    const toggleModalInfo = () => {
        setModalInfo(!modalInfo);
    }   
 

  return(
    <>
        <div className="floatingBtn">
            <ul className={isOpen? "show-menu" : "hide-menu"}> 
                <li ><div className='list' onClick={toggleModalDandi}>Dandi란?</div></li>
                <li ><div className='list'  onClick={toggleModalInfo}>이용안내</div></li>
            </ul>
            <img id="fabPic" src={daegu} onClick={()=>toggleMenuOpen()}/>      
        </div>
        { modalDandi ?  <ModalDandi toggleModalDandi={toggleModalDandi}/> : null}
        { modalInfo ?  <ModalInfo  toggleModalInfo={toggleModalInfo}/> : null}             
        
    </>
    )
}

export default FloatingButton;