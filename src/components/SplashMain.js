import { useEffect } from 'react';
import '../css/SplashMain.css'
import splash from '../images/splash-main.svg';

function SplashMain() {    
    //useEffect호출->moveHome호출
    useEffect(() => {
        setTimeout(moveHome,1000)
    }, [])

/* 이 부분 props형태로 수정 필요함 OMG~*/
    const moveHome = () => {
        window.location.href='/main/'
    }    
/* 이 부분 props형태로 수정 필요함 OMG~*/

    return (
        <div id='splash-main'>
            <img src={splash} alt="스플래시"/>
        </div>
    )
}

export default SplashMain;