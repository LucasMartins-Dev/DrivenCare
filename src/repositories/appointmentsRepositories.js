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
  
  async function searchDoctorName ({name}){
    const comparate = await connectionDb.query(`
    SELECT * FROM doctors WHERE name like '%${name.doctorname}%' 
    `
    );
    return comparate.rows
  }
  async function searchSpecialty ({specialty}){
    
    const comparate = await connectionDb.query(`
    SELECT * FROM doctors WHERE specialty like '%${specialty.specialty}%' 
    `
    );
    return comparate.rows
  }
  async function searchCity ({city}){
    
    console.log(Number(city.city))

    const comparate = await connectionDb.query(`
    SELECT * FROM doctors WHERE city = $1 
    `
    ,[Number(city.city)]);
    console.log(comparate)
    return comparate.rows
  }

  export default {
    create,
    compare,
    searchDoctorName,
    searchSpecialty,
    searchCity
  }

 