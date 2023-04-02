import '../../css/Login.css'
import React, { useState, useContext} from 'react';
import  Axios  from 'axios';
import id from '../../images/id.png'
import pw from '../../images/pw.png'
import {Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Authcontext';

//함수형 컴포넌트 선언
function Login() {
   const [inputs, setInputs] = useState ({ //useState를 이용해 inputs객체 선언
    id:"", //id와 pass의 기본값은 빈 문자열.
    pass:"",
   })
   
   //input값이 변경될 때마다 실행되는 handleChange함수 선언
   const handleChange = e => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
   }

    const navigate = useNavigate(); //리액트 라우터의 useNavigate hook을 이용해 페이지 이동
    
    const {login} = useContext(AuthContext); //AuthContext의 login함수를 가져옴

    //로그인버튼 클릭했을때
    const Login = async (e) => {
        console.log(inputs);

        e.preventDefault();
     try {
        await login(inputs); //inputs값을 인자로 전달하여 login함수를 호풀
        navigate("/home");// 성공적으로 로그인 되면 /home경로로 이동
     } catch(err) {
        console.log(err);
       }}
       

    return(
        <div id="login">
            <h2>LOG IN</h2>
            <div>
                <div className="LoginInput" ><img className="loginIcon"src={id}/><input type='text' name='id' 
                 onChange={handleChange} placeholder="아이디" /></div>
            </div>
            <div>
            
            <div className="LoginInput"><img className="loginIcon"src={pw}/><input type='password' name='pass' 
                 onChange={handleChange}  placeholder="비밀번호" /></div>
            </div>
        
            <div type='button' id="LoginBtn" onClick={Login}>로그인</div>
            <div id="loginTxt">아이디/비밀번호 찾기 <span><Link to="/register">회원가입</Link></span></div>
        
        </div>
    )
}

export default Login;