export const validateUsername = ( username : string ) : boolean => {
  const testUsername : RegExp = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;

  return testUsername.test(username);
}

export const validateEmail = ( email : string ) : boolean => {
  const testEmail : RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return testEmail.test(email);
}

export const validatePassword = ( password : string ) : boolean => {
  if(password.search(/[a-z]/) < 0) {
    return false
  }
  if(password.search(/[A-Z]/) < 0) {
    return false
  }
  if(password.search(/[0-9]/) < 0) {
    return false
  }
  if(password.length < 8 || password.length > 24) {
    return false
  }
  return true
}

export const register = ( users : Array<any>, username : string, email : string, password : string ) : boolean => {
  if(users.length < 1 || users === null || !Array.isArray(users)) {
    return false
  }

  for(let i : number = 0; i < users.length; i++) {
    if( username === users[i].username || email === users[i].email || password === users[i].password) {
      return false
    }
  }

  if(username.length < 1 || email.length < 1 || password.length < 1) {
    return false
  }

  return true
}