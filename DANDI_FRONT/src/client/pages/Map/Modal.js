import { useState } from 'react';
import MapTest from './MapTest';

function Modal(props) {

    //위치 상태 저장
    const [state, setState] = useState({
       center: { lat: 0, lng: 0 },
       isPanto: true,
    });
    //
    const locationInfo = (lat,lng) => {
        setState({
            center: { lat, lng },
            isPanto: true,
        });
        setHeader(false);
    }  
  
    // 좋은 변수명으로 바꿀것..
    const [header, setHeader] = useState(true);

    return(
        <div className="modal">
        <div className="overlay"></div>
        <div className="modal-content">

            { header
            ? <>
            <div className="modalTitleWrap">
                <div className="mapModalTitle">{props.data[props.i].name}</div>
                <div className='closeModal' onClick={props.closeModal}></div>
            </div>  
            <div className="modalWrap1">
            <div className="modalWrap">
                <img id="modalPic" src={props.data[props.i].picture_path}/>
                <p className="modalTxt">·{props.data[props.i].description}</p>
                <p className="modalTxt">·주소:{props.data[props.i].address}</p>
                <div className='locationInfo' onClick={() => locationInfo(props.data[props.i].latitude, props.data[props.i].longitude)}>위치안내</div>
                </div> 
            </div>
            </>
                //리턴모달.. 찐으로 리턴시켜야함 onClick 생각해볼것
            : <>
            <div className='returnModal'></div>
            <div className="mapWrap">
            <div className="map-container">
                    <MapTest center={{ lat: props.data[props.i].latitude, lng:  props.data[props.i].longitude}} isPanto={props.isPanto} closeModal={props.closeModal}/> 
            </div>
            </div>
            </>
            }
        </div>
        </div>
    )
}

export default Modal;