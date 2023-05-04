/*global kakao*/ 
import './Map.css'
import './MapModal.css'
import { React,useState, useEffect , useRef } from 'react'
import backgroundMap from '../../images/map.png'
import destination from '../../images/destination.png'
import axios from 'axios';
import touchscreen from '../../images/touch-screen.png'

import Navbar from '../Common/Navbar'
import Modal from './Modal'


function Map() {

    
    //API에 데이터 호출
    const [hints, setHints] =useState([]);
    useEffect(() => {
        const fetchHint = async() => {
            try {
            const response= await axios.get ("https://api-fvwt.onrender.com/api/hint")
            //const response= await axios.get ("http://localhost:8080/api/hint")
            setHints(response.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchHint();
    },[]);


    //modal
    const [modal1, setModal1] = useState(false);
    const toggleModal1 = () => {//클릭할때마다 ㅡ
        setModal1(!modal1)
    }    
    const [modal2, setModal2] = useState(false);
    const toggleModal2 = () => {
        setModal2(!modal2)
    }  
    const [modal3, setModal3] = useState(false);
    const toggleModal3 = () => {
        setModal3(!modal3)
    }  
    const [modal4, setModal4] = useState(false);
    const toggleModal4 = () => {
        setModal4(!modal4)
    }  
    const [modal5, setModal5] = useState(false);
    const toggleModal5 = () => {
        setModal5(!modal5)
    }  
    const [modal6, setModal6] = useState(false);
    const toggleModal6 = () => {
        setModal6(!modal6)
    }  




return (
    <>
        <div id='map'>
            <h1>지도 <span>Map</span></h1>
            <div id="mapImages">
                <img id="backgroundMap"src={backgroundMap} ></img>
                {/* { hints.map((a,i)=>{
                    return( 
                    <img className="destination" id={`destination${i + 1}`}src={destination} onClick={()=>toggleModal1(!modal1)}></img>
                    )
                })} 
                //반복문으로 처리하고팠는데, onClick안에 각각 다른 함수를 넣어야해서 실패..
                */}
                <img className="destination" id="destination1" src={destination} onClick={toggleModal1}></img>
                <img className="destination" id="destination2" src={destination} onClick={toggleModal2}></img>
                <img className="destination" id="destination3" src={destination} onClick={toggleModal3}></img>
                <img className="destination" id="destination4" src={destination} onClick={toggleModal4}></img>
                <img className="destination" id="destination5" src={destination} onClick={toggleModal5}></img>
                <img className="destination" id="destination6" src={destination} onClick={toggleModal6}></img>
            </div>
            
            <div id="btm-contents" >
            <img id="handIcon"src={touchscreen} ></img>
                <p id="txt">아이콘을 터치해 장소를 확인해주세요!</p>
            </div>
            {  modal1 
                ? <Modal i={0} data={hints} closeModal={toggleModal1}/>
                : null
            }  
            {  modal2 
                ? <Modal i={1} data={hints} closeModal={toggleModal2}/>
                : null
            }   
            {  modal3
                ? <Modal i={2} data={hints} closeModal={toggleModal3} />
                : null
            }   
            {  modal4
                ? <Modal i={3} data={hints} closeModal={toggleModal4} />
                : null
            }     
            {  modal5
                ? <Modal i={4} data={hints} closeModal={toggleModal5} />
                : null
            }    
            {  modal6
                ? <Modal i={5} data={hints} closeModal={toggleModal6} />
                : null
            }  
        </div>
        <Navbar/>
        </>
    )
}

export default Map;
