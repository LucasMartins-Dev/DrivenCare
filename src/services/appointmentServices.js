
import appointmentsRepositories from "../repositories/appointmentsRepositories.js";
import errors from "../errors/index.js";

async function newAppointment({doctorId,userId,date,time}){

        const dateObj = new Date(date);
        const dayOfWeek = dateObj.getUTCDay();
      
        // Check if day of week is Monday-Friday (1-5)
        if (dayOfWeek >= 1 && dayOfWeek <= 5) {
            console.log("chegou aqui")
            if(time >= 8 && time <= 17){
                console.log("chegou aqui tambem")
                await appointmentsRepositories.create({doctorId,userId,date,time})

            }else{
                throw errors.invalidHourError();
            }
          
        }else{
            throw errors.invalidDayError();
        }
       

    }


    export default {
        newAppointment
    }