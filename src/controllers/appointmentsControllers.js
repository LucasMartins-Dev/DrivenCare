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

async function searchAppointmentbyDoctorName(req,res,next){
  const name = req.params;
  try{
    await appointmentServices.searchDoctorName({name})
    return res.sendStatus(201);
  }catch(err){
    next(err)
  }
}

async function searchAppointmentbySpecialty(req,res,next){
  const specialty = req.params;
  try{
    await appointmentServices.searchSpecialty({specialty})
    return res.sendStatus(201);
  }catch(err){
    next(err)
  }
}

async function searchAppointmentbyCity(req,res,next){
  const city = req.params;
  try{
    await appointmentServices.searchCity({city})
    return res.sendStatus(201);
  }catch(err){
    next(err)
  }
}

export default {
  searchAppointmentbyCity,
  searchAppointmentbyDoctorName,
  searchAppointmentbySpecialty,
  newAppointment
}



