export const checkValidData = (email,password) => {
    if (email.length < 5 || password.length < 8) {
        return "Email or Password lengths should be at least 5 and 8 characters respectively. Email should not contain spaces and should have a valid domain. Password should contain at least one uppercase letter, one lowercase letter, one";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passWordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]+$/;//+
    if(!emailRegex.test(email)){
        return "Enter Valid Email";
    }
    else if(!passWordRegex.test(password)){
        return "Enter Valid Password";
    }
    else return null;
};