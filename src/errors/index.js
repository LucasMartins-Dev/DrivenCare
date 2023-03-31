function conflictError(message) {
    return {
      name: "ConflictError",
      message,
    };
  }
  
  function duplicatedEmailError(email) {
    return {
      name: "DuplicatedEmailError",
      message: "There is already an user with given email",
      email,
    };
  }
  
  function unauthorizedError() {
    return {
      name: "UnauthorizedError",
      message: "You must be signed in to continue",
    };
  }
  
  function notFoundError() {
    return {
      name: "NotFoundError",
      message: "No result for this search!",
    };
  }
  
  function invalidCredentialsError() {
    return {
      name: "InvalidCredentialsError",
      message: "Email or password are incorrect",
    };
  }

  function invalidDayError (){
    return {
      name: "InvalidDayError",
      message: "The day needs to be monday to friday",
    };
  }

  function invalidHourError (){
    return {
      name: "InvalidHourError",
      message: "The hour must be an integer and be between 8 and 17",
    };
  }
  
  
  export default {
    invalidHourError,
    invalidDayError,
    conflictError,
    duplicatedEmailError,
    unauthorizedError,
    notFoundError,
    invalidCredentialsError,
  };