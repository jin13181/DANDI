import { createContext, useEffect,useState } from "react"
import axios from "axios"


export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

    //currentUser와 setCurrentUser라는 useState hook을 사용하여 currentUser 변수와 함수를 만든다
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user") || null ))

    //login이라는 비동기 함수를 만듦
    const login = async(LoginId,LoginPw) => {
        //axios 사용하여 post요청 보냄
        const res = await axios.post("https://api-fvwt.onrender.com/api/auth/login", LoginId,LoginPw);
        setCurrentUser(res.data);
    }
    //logout이라는 비동기 함수
    const logout = async(e)=>{
        //axios 사용하여 post요청 보냄
        await axios.post("https://api-fvwt.onrender.com/api/auth/logout");
        setCurrentUser(null);
        window.location.href="/";
    };



    useEffect(()=> {
        //currentUser를 localStorage에 저장
        localStorage.setItem("user", JSON.stringify(currentUser));
    },[currentUser]);

    return(
        <AuthContext.Provider value={{currentUser,login,logout}}> 
            {children}
        </AuthContext.Provider>
        //AuthContext.Provider는 AuthContext의 값을 하위 컴포넌트로 전달하는 React컴포넌트
        //AuthContextProvider 컴포넌트의 내부에서 
        //AuthContext.Provider로 
        //currentUser, login, logout 값을 제공하여 하위 컴포넌트에서 이를 사용할 수 있게 함
        //
        //즉, AuthContext.Provider를 사용하면 해당 컴포넌트의 자식 컴포넌트들에서 currentUser, login, logout 값을 useContext를 통해 손쉽게 가져와 사용할 수 있다
    )   
}

//https://api-fvwt.onrender.com/api/auth/login
