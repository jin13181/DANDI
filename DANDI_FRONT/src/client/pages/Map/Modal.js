import { useState } from 'react';
import SubModal from './SubModal';

function Modal(props) {
    //위치 상태 저장
    const [state, setState] = useState({
       center: { lat: 0, lng: 0 },
       isPanto: true,
     });


    const [modal1_1, setModal1_1] = useState(false); 
    const toggleModal1_1 = (lat,lng) => {
        setModal1_1(!modal1_1);
        setState({
            center: { lat, lng },
            isPanto: true,
        })
    }  
    const [modal2_1, setModal2_1] = useState(false);
    const toggleModal2_1 = (lat,lng) => {
        setModal2_1(!modal2_1)
        setState({
            center: { lat, lng },
            isPanto: true,
        })
    }  
    const [modal3_1, setModal3_1] = useState(false);
    const toggleModal3_1 = (lat,lng) => {
        setModal3_1(!modal3_1)
        setState({
            center: { lat, lng },
            isPanto: true,
        })
    }  
    const [modal4_1, setModal4_1] = useState(false);
    const toggleModal4_1 = (lat,lng) => {
        setModal4_1(!modal4_1)
        setState({
            center: { lat, lng },
            isPanto: true,
        })
    }  
    const [modal5_1, setModal5_1] = useState(false);
    const toggleModal5_1 = (lat,lng) => {
        setModal5_1(!modal5_1)
        setState({
            center: { lat, lng },
            isPanto: true,
        })
    }  
    const [modal6_1, setModal6_1] = useState(false);
    const toggleModal6_1 = (lat,lng) => {
        setModal6_1(!modal6_1)
        setState({
            center: { lat, lng },
            isPanto: true,
        })
    }  

    return(
        <div className="modal">
        <div className="overlay"></div>
        <div className="modal-content">
       <div className="modalTitleWrap">
            <div className="mapModalTitle">{props.data[props.i].name}</div>
            <div className='closeModal' onClick={props.toggleModal1}></div>
        </div>  
        <div className="modalWrap1">
        <div className="modalWrap">
            <img id="modalPic" src={props.data[props.i].picture_path}/>
            <p className="modalTxt">·{props.data[props.i].description}</p>
            <p className="modalTxt">·주소:{props.data[props.i].address}</p>
            <div className='locationInfo' onClick={() => toggleModal1_1(props.data[props.i].latitude, props.data[props.i].longitude)}>위치안내</div>
            </div> 
        </div>
        </div>
        {  modal1_1? <SubModal i={0} center={state.center} closeModal={props.toggleModal1}/>: null }
        {  modal2_1? <SubModal i={1} center={state.center} closeModal={props.toggleModal2}/>: null }
        {  modal3_1? <SubModal i={2} center={state.center} closeModal={props.toggleModal3}/>: null }
        {  modal4_1? <SubModal i={3} center={state.center} closeModal={props.toggleModal4}/>: null }
        {  modal5_1? <SubModal i={4} center={state.center} closeModal={props.toggleModal5}/>: null }
    </div>
    )
}

export default Modal;