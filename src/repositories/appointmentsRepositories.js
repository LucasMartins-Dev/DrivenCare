import connectionDb from "../config/database.js";


async function create({ doctorId,userId,date,time}) {

      await connectionDb.query(
        `
            INSERT INTO appointments ("doctorId","userId",date,time)
            VALUES ($1, $2, $3, $4)
        `,
        [doctorId,userId,date,time]
      );

  }

  async function compare ({ doctorId,date,time}){
    const comparate = await connectionDb.query(`
    SELECT * FROM appointments WHERE "doctorId" = $1 AND date = $2 AND time = $3
    `,
    [doctorId,date,time]);
    return comparate
  }
  
   
  


  export default {
    create,
    compare
    
  }

 