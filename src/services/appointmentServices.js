
import appointmentsRepositories from "../repositories/appointmentsRepositories.js";
import errors from "../errors/index.js";

async function newAppointment({doctorId,userId,date,time}){

        const dateObj = new Date(date);
        const dayOfWeek = dateObj.getUTCDay();
      
        // Check if day of week is Monday-Friday (1-5)
        if (dayOfWeek >= 1 && dayOfWeek <= 5) {
            
            if(time >= 8 && time <= 17){
               
                 await appointmentsRepositories.create({doctorId,userId,date,time})
                

            }else{
                throw errors.invalidHourError().message;
            }
          
        }else{
            throw errors.invalidDayError().message;
        }
       

    }

    async function duplicateAppointment({doctorId,userId,date,time}){

        const duplicate = await appointmentsRepositories.compare({doctorId,date,time})
        console.log(duplicate.rows[0])
        if(duplicate.rows[0] !== undefined){
            throw errors.invalidDateError().message;
        }

    }

    async function searchDoctorName({name}){
     const search =  await appointmentsRepositories.searchDoctorName({name})

     console.log(search)
    }
    async function searchSpecialty({specialty}){
        const search = await appointmentsRepositories.searchSpecialty({specialty})
        console.log(search)
    }
    async function searchCity({city}){
        const search = await appointmentsRepositories.searchCity({city})
        console.log(search)
    }


    export default {
        duplicateAppointment,
        newAppointment,
        searchDoctorName,
        searchSpecialty,
        searchCity
    }