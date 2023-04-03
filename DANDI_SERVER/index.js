//Express를 이용한 Node.js 서버의 구성을 담당
import express from "express"
import authRoutes from "./routes/auth.js"
import memberRoutes from "./routes/members.js"
import locationRoutes from "./routes/locations.js"
import hintRoutes from "./routes/hints.js"
import recordRoutes from "./routes/records.js"
import rankRoutes from "./routes/ranks.js"
import cookieParser from "cookie-parser"
import cors from "cors";



const app = express(); //Express 어플리케이션 객체 생성


app.use(cors());
app.use(express.json());
app.use(cookieParser()); //쿠키를 파싱할 수 있도록
app.use("/api/auth",authRoutes); // /api/auth 경로로 들어오는 요청에 대해서는 authRoutes에서 처리하도록
app.use("/api/members",memberRoutes);
app.use("/api/location",locationRoutes);
app.use("/api/hint",hintRoutes);
app.use("/api/record",recordRoutes);
app.use("/api/rank",rankRoutes);

app.listen(8080, ()=>{
    console.log("Connected to!");
})