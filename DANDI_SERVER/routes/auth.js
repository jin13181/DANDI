import express from "express"
import { register, login, logout } from "../controllers/auth.js"

const router = express.Router() //라우터 객체 생성해서, router변수에 할당
//router 객체란?
//Express.js 프레임워크에서 라우팅(Routing)을 구현하는데 사용되는 핵심 객체 중 하나
//HTTP 요청 메소드(GET, POST, PUT, DELETE 등)와 URL 패턴을 결합하여 해당 요청이 들어왔을 때 실행될 콜백 함수를 등록하고 관리하는 역할

router.post("/register",register) //POST 요청을 받으면 register함수를 실행
router.post("/login",login)
router.post("/logout",logout)


export default router