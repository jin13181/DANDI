
/*global kakao*/ 
import '../../css/Map.css'
import '../../css/MapModal.css'
import { React,useState, useEffect , useRef } from 'react'
import backgroundMap from '../../images/map.png'
import destination from '../../images/destination.png'
import axios from 'axios';
import touchscreen from '../../images/touch-screen.png'
import MapTest from '../components/MapTest'
import Navbar from '../components/Navbar'




function Map() {
    const [modalStates, setModalStates] = useState([false, false, false]);
    const toggleModal = (index) => {
      const newModalStates = [...modalStates];
      newModalStates[index] = !modalStates[index];
      setModalStates(newModalStates);
    }

    const [modal1_1, setModal1_1] = useState(false);
    const [state, setState] = useState({
        center: { lat: 0, lng: 0 },
        isPanto: true,
      });
      
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

    
    const [array1, setArray1] =useState({});
    const [array2, setArray2] =useState({});
    const [array3, setArray3] =useState({});

    useEffect(() => {
        const foundArray = hints.find(hint => hint.location_no === 1);
        setArray1(foundArray);
    },[hints])

    useEffect(() => {
        const foundArray = hints.find(hint => hint.location_no  === 2);
        setArray2(foundArray);
    },[hints])

    useEffect(() => {
        const foundArray = hints.find(hint => hint.location_no  === 3);
        setArray3(foundArray);
    },[hints])


return (
    <>
        <div id='map'>
            <h1>지도 <span>Map</span></h1>
            <div id="mapImages">
                <img id="backgroundMap"src={backgroundMap} ></img>
                <img className="destination" id="destination1" src={destination} onClick={() => toggleModal(0)}></img>
                <img className="destination" id="destination2" src={destination} onClick={() => toggleModal(1)}></img>
                <img className="destination" id="destination3" src={destination} onClick={() => toggleModal(2)}></img>
            </div>
            
            <div id="btm-contents" >
            <img id="handIcon"src={touchscreen} ></img>
                <p id="txt">아이콘을 터치해 장소를 확인해주세요!</p>
            </div>
        
            {modalStates.map((modalState, index) => (
          modalState && (
            <div className="modal">
              <div className="overlay"></div>
              <div className="modal-content">

                {hints[index] && (
                  <div className="modalTitleWrap">
                    <div className="mapModalTitle">{hints[index].name}</div>
                    <div className='closeModal' onClick={() => toggleModal(index)}></div>
                  </div>
                )}

                <div className="modalWrap1">
                  {hints[index] ? (
                    <div className="modalWrap">
                      <img id="modalPic" src={hints[index].picture_path}/>
                      <p className="modalTxt">·{hints[index].description}</p>
                      <p className="modalTxt">·주소:{hints[index].address}</p>
                      <div className='locationInfo' onClick={() => toggleModal_1(index, hints[index].latitude, hints[index].longitude)}>위치안내</div>
                    </div>
                  ) : (
                    <>
                      <div className="modalTitleWrap">
                        <div>Loading...</div>
                        <div className='closeModal' onClick={() => toggleModal(index)}></div>
                      </div>             

                      <div className='locationInfo'>위치안내</div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )
        ))}
{modal1_1 && (
            <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">
                    <div className='returnModal'  onClick={toggleModal1_1}></div>
                    <div className="mapWrap">
                        <div className="map-container">
                                <MapTest center={{ lat: state.center.lat, lng: state.center.lng }} isPanto={state.isPanto}/> 
                        </div>
                    </div>
                </div>
            </div>
        )}
            
{modal2_1 && (
            <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">
                    <div className='returnModal'  onClick={toggleModal2_1}></div>
                    <div className="mapWrap">
                        <div className="map-container">
                            <MapTest center={{ lat: state.center.lat, lng: state.center.lng }} isPanto={state.isPanto}/>   
                        </div>
                    </div>
                    </div>
            </div>
            )}

{modal3_1 && (
            <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">
                <div className='returnModal'  onClick={toggleModal3_1}></div>
                <div className="mapWrap">
                        <div className="map-container">
                            <MapTest center={{ lat: state.center.lat, lng: state.center.lng }} isPanto={state.isPanto}/> 
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
        <Navbar/>
        </>
    )
}

export default Map;
