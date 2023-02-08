/* 아직 메인에 import 못했어요! 여기 만들다가 고장났음ㅎㅎ 공부해서 만들겠슴다ㅠ! */
import '../css/Tab.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faEllipsis , faLocationDot, faDesktop, faDisplay} from "@fortawesome/free-solid-svg-icons";

const moveHome = (props,word) => {
    props.moveHome(word);
}

function Tab_bottom(props) {
    return (
        <div className='tab_bottom'>            
            <button onClick={()=>moveHome(props,'')}><FontAwesomeIcon icon={faHouse} /></button>
            <button onClick={()=>moveHome(props,'')}><FontAwesomeIcon icon={faLocationDot} /></button>
            <button onClick={()=>moveHome(props,'')}><FontAwesomeIcon icon={faDesktop} /></button>
            <button onClick={()=>moveHome(props,'')}><FontAwesomeIcon icon={faDisplay} /></button>
            <button onClick={()=>moveHome(props,'')}><FontAwesomeIcon icon={faEllipsis} /></button>
        </div>
    )
}

export default Tab_bottom;
/* 아직 메인에 import 못했어요! 여기 건들다가 고장났음ㅎㅎ 공부해서 만들겠슴다ㅠ!*/