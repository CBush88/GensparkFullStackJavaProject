export const validPassword = () => {

    const passwordForValidation = document.getElementById("password").value
    const repeatPasswordForValidation = document.getElementById("repeatPassword").value

    const hasLowercase = /[a-z]+/.test(passwordForValidation)
    const hasUppercase = /[A-Z]+/.test(passwordForValidation)
    const hasDigit = /[0-9]+/.test(passwordForValidation)

    const errLabel = document.getElementById("errLabel")
    errLabel.style = "display:hidden;"
    errLabel.textContent = ""
    
    if(passwordForValidation === repeatPasswordForValidation && hasLowercase && hasUppercase && hasDigit){
      return true;
    }else if (passwordForValidation !== repeatPasswordForValidation) {
      errLabel.style = "display:inline; color:red; font-weight:normal;"
      errLabel.textContent = "Passwords must match!"
    }else if (!hasLowercase){
      errLabel.style = "display:inline; color:red; font-weight:normal;"
      errLabel.textContent = "Must contain a lowercase letter!"
    }else if (!hasUppercase){
      errLabel.style = "display:inline; color:red; font-weight:normal;"
      errLabel.textContent = "Must contain an uppercase letter!"
    }else {
      errLabel.style = "display:inline; color:red; font-weight:normal;"
      errLabel.textContent = "Must contain a number!"
    }
    return false;
  }

  export const validGenre = () => {
    const genre = document.getElementById("genre").value
    const errLab = document.getElementById("errLabel")
    const onlyLetters = /^[a-zA-Z]+$/.test(genre)

    errLab.style = "display:hidden;"
    errLab.textContent = ""

    if(!onlyLetters){
        errLab.style = "display:inline; color:red; font-weight:normal;"
        errLab.textContent = "The genre should have no symbols or numbers!"
        return false;
    }
    return true;
  }

  export const validPrice = () => {
    const price = document.getElementById("price").value
    const errLab = document.getElementById("errLabel")
    const onlyNumbers = /^[0-9]+$/.test(price)

    errLab.style = "display:hidden;"
    errLab.textContent = ""

    if(!onlyNumbers){
        errLab.style = "display:inline; color:red; font-weight:normal;"
        errLab.textContent = "The price should only contain numbers!"
        return false;
    }
    return true;
  }
