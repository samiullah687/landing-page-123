const validatePhoneNumber = async (phoneNumber) => {
    try {
      const response = await fetch("/phone-number", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber: phoneNumber }),
        keepalive: true,
      });
      const data = await response.json();
  
      const carrier = data.carrier
      const isValid = data.valid;
  
      if(carrier === ""){
        return false
      }
  
      if(isValid){
        return true
      }
  
      
    } catch (error) {
      console.error("Error:", error);
    }
};
  
const checkEmail = async (email) => {
  
    try {
      
      let response = await fetch("/verify-email", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email
        })
      })
  
      const data = await response.json();
  
      let result = data.result
  
      if(result === "ok" || result === "catch_all"){
        return true
      }
      else{
        return false
      }
  
      
  
    } catch (error) {
      console.log(error)
    }
  
  }

const submitForm = async () => {

    let first_name = document.getElementById('first-name-dnc').value
    let last_name = document.getElementById('last-name-dnc').value
    let phone = document.getElementById('phone-dnc').value
    let email = document.getElementById('email-dnc').value
    let captcha_respose = document.getElementById('captcha')

    if(!email || !phone || !first_name || !last_name){
        document.getElementById('success').innerHTML = "Please fill out all fields"
        document.getElementById('success').style.display = "block"
        document.getElementById('success').style.color = "red"
        return
    }

    let checkPhone = await validatePhoneNumber(phone)

    if(!checkPhone){
        document.getElementById('success').innerHTML = "Please enter valid phone"
        document.getElementById('success').style.display = "block"
        document.getElementById('success').style.color = "red"
        return
    }

    let confirmEmail = await checkEmail(email)

    if(!confirmEmail){
        document.getElementById('success').innerHTML = "Please enter valid email"
        document.getElementById('success').style.display = "block"
        document.getElementById('success').style.color = "red"
        return
    }

    

    document.getElementById('success').innerHTML = "Form submitted successfully."
    document.getElementById('success').style.display = "block"
    document.getElementById('success').style.color = "green"

    document.getElementById('submit').setAttribute('disabled', true)

    try {
        let res = await fetch("/donotcallmeform", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: first_name,
            last_name: last_name,
            phone: phone,
            email: email,
          }),
          
        });

       
      } catch (error) {
        console.log(error);
    }
    
   
    

    


}

document.getElementById('submit').addEventListener('click', async () => {
    await submitForm()
})