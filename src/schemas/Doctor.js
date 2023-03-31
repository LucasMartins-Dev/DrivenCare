
import joi from "joi";

export const doctorSchemma = joi.object({
  name: joi.string().min(2).required(),
  email: joi.string().email().required(),
  specialty: joi.string().required(),
  password: joi.string().required(),
});