function ModalInfo(props) {
    return (
        <div className="homeModal" >
        <div className="homeModalOverlay"></div>
        <div className="modal-content-dandi">    
            <h2 id="homeModalInfoTitle">이용안내</h2> 
            <p className="homeModalTxt">Dandi 로그인 후 대구 명소에 숨겨진<br/>
            QR코드를 찾아 찍어주세요!</p>
            <p className="homeModalTxt">QR코드 속 스탬프를 찾아 모두 찍어 <br/>
            포인트를 모아보세요!</p>
            <p className="homeModalTxt">쌓은 포인트로 맛집할인, 지역화폐 등으로<br/>
            교환하여 더욱 즐거운 여행이 되도록<br/>
            더욱 단디하겠습니다!</p>
            <div className='closemodal' id="closeModal2" onClick={props.toggleModalInfo}>닫기</div>
        </div>
        </div>
    )
}

export default ModalInfo;