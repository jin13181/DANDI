import {db} from "../db.js"

export const getRecords = (req,res)=>{
   const q = "SELECT id, location_no, datetime FROM member m JOIN record r ON m.no = r.member_no";

   db.query(q, (err,data)=>{
    if(err) return res.send(err)

    return res.status(200).json(data);
   })
}


export const getRecord = (req,res)=>{
    let member_no = req.params.member_no;
    if (!member_no) {
      return res.status(400).send('Missing member_no parameter');
    }


    //const q = `SELECT id, location_no, datetime FROM member m JOIN record r ON m.no = r.member_no WHERE member_no = ${member_no}`;
    const q = `SELECT location_no, name , code ,datetime FROM location l JOIN record r ON l.no = r.location_no WHERE member_no = ${member_no}`;


    db.query(q, (err,data)=>{
     if(err) return res.send(err)
 
     return res.status(200).json(data);
    })
 }

 export const getRecordCount = (req,res)=>{
  let member_no = req.params.member_no;
  if (!member_no) {
    return res.status(400).send('Missing member_no parameter');
  }

  const q = `SELECT COUNT(location_no) AS total FROM member m JOIN record r ON m.no = r.member_no WHERE member_no = ${member_no}`;


  db.query(q, (err,data)=>{
   if(err) return res.send(err)

   return res.status(200).json(data);
  })
}

export const getStampRecord = (req,res)=>{
  let member_no = req.params.member_no;
  if (!member_no) {
    return res.status(400).send('Missing member_no parameter');
  }

  const q = `SELECT no AS location_no, code ,IF(NO IN (SELECT location_no FROM record WHERE member_no = ${member_no}), 'Y', 'N') AS visited FROM location;`;


  db.query(q, (err,data)=>{
   if(err) return res.send(err)

   return res.status(200).json(data);
  })
}


//qr code
export const addRecord = (req,res)=>{


    const q = "SELECT * FROM record WHERE member_no = ? AND location_no = ? "


    const values = [
        req.body.member_no,
        req.body.location_no,
    ]

    db.query(q, values , (err,data)=>{
     if(err) return res.send(err)
     if(data.length) return res.status(409).json({code:"NO",message:"이미 인증하신 장소입니다."});

      const q = "INSERT INTO record(member_no ,location_no) VALUES (?,?)";

     
     db.query(q, values, (err,data)=>{
      if(err) return res.json(err);
      return res.status(201).json({code:"OK",message:"record has been created."});
    })


    });
 };