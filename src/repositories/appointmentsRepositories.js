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
  
  export default {
    create
  }