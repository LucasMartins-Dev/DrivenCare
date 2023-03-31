import connectionDb from "../config/database.js";

async function findByEmail(email) {
  return await connectionDb.query(
    `    
    SELECT * FROM doctors WHERE email=$1
  `,
    [email]
  );
}

async function create({ name, email, specialty, password }) {
  await connectionDb.query(
    `
        INSERT INTO doctors (name, email, specialty, password)
        VALUES ($1, $2, $3, $4)
    `,
    [name, email,specialty, password]
  );
}

async function createSession({ token, userId }) {
    const doctorSessions = await connectionDb.query(
        `SELECT * FROM sessions WHERE "docId" = $1`
        , 
        [userId]
        );
        if (doctorSessions.rowCount !== 0){
          await connectionDb.query(
            `
                UPDATE sessions SET token = $1 WHERE 
                "docId" = $2   
            `,
            [token, userId]
          );
        }else{
          await connectionDb.query(
            `
                INSERT INTO sessions (token, "docId")
                VALUES ($1, $2)
            `,
            [token, userId]
          );
        }
}

async function findSessionByToken(token) {
  return await connectionDb.query(
    `
        SELECT * FROM sessions WHERE token = $1
    `,
    [token]
  );
}

async function findById(id) {
  return await connectionDb.query(
    `    
    SELECT * FROM doctors WHERE id=$1
  `,
    [id]
  );
}

export default {
  findByEmail,
  create,
  createSession,
  findById,
  findSessionByToken,
};