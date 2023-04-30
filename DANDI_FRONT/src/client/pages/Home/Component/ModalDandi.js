import logo from '../../../images/dandi-logo2.png'

function ModalDandi(props) {

    return(
        <div className="homeModal" >
        <div className="homeModalOverlay"></div>
        <div className="modal-content-dandi">     
            <div id="homeModalDandiTitle" ><img  src={logo}></img></div>
            <p className="homeModalTxt">단디는 '제대로, 똑바로'의 경상 방언으로<br/>
            대구 투어를 제대로 해보자!는 의미입니다.</p>
            <p className="homeModalTxt">스페인어로 멋쟁이란 뜻의 'Dandi' 와<br/>
            함께 대구 관광하는 멋쟁이가 되어봅시다!</p>
            <p className="homeModalTxt">모은 포인트로 맛집 할인 받고,<br/>
            대구 행복페이로 교환해 사용하세요!</p>
            <div className='closemodal' onClick={props.toggleModalDandi}>닫기</div>
        </div>
        </div>
    )
}

export default ModalDandi;
    

