import '../css/AppMain.css'
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import AppMainHome from './AppMainHome';
import AppMainMap from './AppMainMap';
import AppMainQR from './AppMainQR';
import AppMainStamp from './AppMainStamp';
import AppMainMenu from './AppMainMenu';

function AppMain() {
/* 이 부분 props형태로 좀 더 간지나게 수정 필요 OMG~ */
    const moveHome=()=>{
        window.location.href='/main'
    }
    const moveMap=()=>{
        window.location.href='/main/map'
    }
    const moveQR=()=>{
        window.location.href='/main/qr'
    }
    const moveStamp=()=>{
        window.location.href='/main/stamp'
    }
    const moveMenu=()=>{
        window.location.href='/main/menu'
    }
/* 이 부분 props형태로 좀 더 간지나게 수정 필요 OMG~ */

    return (
        <div id='app-main'>
            <Header/>
            <Routes>
                <Route path='/' element={<AppMainHome/>} />
                <Route path='/map' element={<AppMainMap/>} />
                <Route path='/qr' element={<AppMainQR/>} />
                <Route path='/stamp' element={<AppMainStamp/>} />
                <Route path='/menu' element={<AppMainMenu/>} />
            </Routes>
            <div id='bottom-tab'>
                <a>
                    <div class="tab-home" onClick={moveHome}>홈</div>
                </a>
                <a>
                    <div class="tab-map" onClick={moveMap}>위치</div>
                </a>
                <a>
                    <div class="tab-qr" onClick={moveQR}>QR인증</div>
                </a>
                <a>
                    <div class="tab-stamp" onClick={moveStamp}>스탬프</div>
                </a>
                <a>
                    <div class="tab-menu" onClick={moveMenu}>메뉴</div>
                </a>
            </div>
        </div>
    )
}
export default AppMain;