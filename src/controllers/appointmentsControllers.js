import appointmentServices from "../services/appointmentServices.js";

async function newAppointment(req,res,next){
    const {doctorId,userId,date,time} = req.body;
    try{
      await appointmentServices.duplicateAppointment({doctorId,date,time})
      await appointmentServices.newAppointment({doctorId,userId,date,time})
      return res.sendStatus(201);

    }catch(err){
        next(err)
    }
}

export default {
  newAppointment
}