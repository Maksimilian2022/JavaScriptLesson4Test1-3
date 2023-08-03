 function getPasswordChecker(password) {
    let pas = password
     function PasswordChecker(pas) {
        if (pas.lenght >= 10) {
            return true
        }
        return false
     }

     return PasswordChecker(pas)
 }


