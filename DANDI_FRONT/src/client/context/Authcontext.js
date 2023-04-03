import { createContext, useEffect,useState } from "react"
import axios from "axios"


export const AuthContext = createContext()
//createContext() : 리액트 함수, 전역상태를 관리하기 위한 Context객체 생성 역할

export const AuthContextProvider = ({children}) => {

    //currentUser와 setCurrentUser라는 useState hook을 사용하여 currentUser 변수와 함수를 만든다
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user") || null ))
    //localStorage에 저장된 "user" 항목을 가져와서 JSON.parse()메소드를 사용하여 JavaScript객체로 파싱
    //JSON.parse() : JSON형식의 문자열을 JavaScript 객체로 변환하는 역할
    //useState() : 리액트 컴포넌트의 상태(state)관리 위해 사용
    //             배열을 반환하는 함수, 첫번째 원소는 state값을 나타내는 변수, 두번째 원소는 state값을 업데이트할 때 사용하는 함수
    //             useState()함수를 호출할 때 인자로 전달하는 값은 state변수의 초기값
    //             state값이 변경되면 컴포넌트가 재렌더링됨

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


    //useEffect() : 함수형 컴포넌트에서 side effect를 수행하기 위해 사용
    //              side effect란, 컴포넌트가 렌더링 될 때 발생하지 않는 컴포넌트 외부의 변화
    //              ex) API요청, DOM조작, 타이머 설정
    //              컴포넌트가 렌더링 된 후에 실행되는 함수를 받음
    //              이 함수를 통해 side effect를 수행하고, 필요한 경우 state를 업데이트
    //              첫번째 인자로 실행할 함수를 받고, 두번째 인자로 배열을 받음
    //              두번째 인자로 전달된 배열에는 useEffect() 함수가 의존하는 state나 props를 포함시킬 수 있음
    //              두번째 인자로 전달된 배열이 비어있는 경우, useEffect()함수는 처음 렌더링될 때 한 번만 실행됨
    //              컴포넌트가 렌더링될 때마다 반복적으로 실행되는 코드를 방지하고, 성능을 최적화할 수 있음
    useEffect(()=> {
        //currentUser를 localStorage에 저장
        localStorage.setItem("user", JSON.stringify(currentUser));
        //JSON.stringfy() : JavaScript객체를 JSON형식의 문자열로 변환하는 역할
        //localStorage.setItem() : localStorage에 데이터 저장하는 역할 
        //                         첫번째 인자로 저장할 데이터의 key, 두번째 인자로 저장할 데이터 값 
        //                         (이때, 저장할 데이터는 반드시 문자열 형태여야함. JSON형태 불가능)
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
