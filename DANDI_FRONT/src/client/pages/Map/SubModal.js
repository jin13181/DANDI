import MapTest from './MapTest'

function SubModal(props) {
    return(
        <div className="modal">
        <div className="overlay"></div>
        <div className="modal-content">
            {/* 숫자 i로 변경 & 화살표를 x로 변경 */}
            <div className='returnModal'  onClick={props.toggleModal1}></div>
            <div className="mapWrap">
                <div className="map-container">
                        <MapTest center={{ lat: props.center.lat, lng: props.center.lng }} isPanto={props.isPanto}/> 
                </div>
            </div>
        </div>
    </div>
    )
}

export default SubModal;