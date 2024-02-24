
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

    if(!data){
      return false
    }

    const carrier = data.carrier || "No Carrier"

    localStorage.setItem("carrier", carrier);

    const isValid = data.valid;

   

    if(isValid){
      return true
    }

    else{
      return false
    }

    
  } catch (error) {
    console.error("Error:", error);
  }
};

let url_name = localStorage.getItem('Url Name')

if(url_name){
  document.getElementById('headlineTitle').innerHTML = url_name
}
else{
  document.getElementById('headlineTitle').innerHTML = 'Save up to 60% on health insurance! Complete your profile and we’ll match you with providers.'
}

(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

document.getElementById("formzinho").addEventListener("submit",  async (e) => {

  e.preventDefault()

  console.log('Got here')

  let data = new FormData(e.target);

  let data_obj = Object.fromEntries(data.entries());

  if(!data_obj.address || !data_obj.phone){
    document.getElementById("required").innerHTML = "*Please Fill Out Fields*";
    return
  }

  console.log(data_obj)

  var address = data_obj.address;
  var phone = data_obj.phone

  

  //Remove all symbols from phone number

  phone = phone.replace(/[^0-9]/g, '')

  //Check if number starts with 1, if so remove it

  if(phone.charAt(0) === '1'){
      phone = phone.substring(1)
  }

  console.log(phone)
  

  var certificate = document.getElementById("xxTrustedFormCertUrl_0").value;

  let phoneNumber = phone

  //Remove all symbols from phone number

  phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

  //Check if number starts with 1, if so remove it

  if(phoneNumber.charAt(0) === '1'){
      phoneNumber = phoneNumber.substring(1)
  }

  console.log(phoneNumber)


  let url = localStorage.getItem("Url") || " ";
  let zipcode = localStorage.getItem("Zipcode") || " ";
  let state = localStorage.getItem('state') || " ";

  let annualHouseholdIncome =
    localStorage.getItem("What is your annual household income") || " ";
  let birthYear = localStorage.getItem("What is your birth year?") || " ";
  let gender = localStorage.getItem("What is your gender?") || " ";
  let householdSize = localStorage.getItem("What is your household size?") || " ";


  let anonId = localStorage.getItem("anonID") || " ";
  let carrier = localStorage.getItem("carrier") || " ";
  let timezone = localStorage.getItem("timezone") || " ";
  let callButtonPressed = localStorage.getItem("callButtonPressed") || " ";
  let coverage_type = localStorage.getItem('Coverage Type') || " ";





  if (
    address != "" &&
    phone != ""
  ) {
   


    let data = await validatePhoneNumber(phoneNumber)

    console.log(data)
   

    if (data !== false) {
      //Remove all symbols from phone number

      phone = phone.replace(/[^0-9]/g, '')

      //Check if number starts with 1, if so remove it

      if(phone.charAt(0) === '1'){
          phone = phone.substring(1)
      }

     
      var certificate = document.getElementById(
        "xxTrustedFormCertUrl_0"
      ).value;
      
      localStorage.setItem('Address', address)
      localStorage.setItem("Phone Number", phone);
      localStorage.setItem("certificate", certificate);

      console.log("Phone number is valid!");


        
      let annualHouseholdIncome2 = localStorage.getItem('What is your annual household income') || " ";

      if(annualHouseholdIncome2 === "BELOW $16,000"){
        window.location.href = "/aca-quote.html";
      }
      else if(annualHouseholdIncome2 === "$16,000 - $21,000"){
        window.location.href = "/aca-quote.html";
      }
      else if(annualHouseholdIncome2 === "$21,000 - $35,000"){
        window.location.href = "/aca-quote.html";
      }

      else{
        window.location.href = "/quote.html";
      }

      
    } 
    else {
      console.log("Phone number is invalid.");
      document.getElementById("required").innerHTML =
        "*Please Enter A Valid Phone Number*";

      //Add needs validation to phone number field

      //Remove was valided from form

      document.getElementById("formzinho").classList.remove("was-validated");
      document.getElementById('address').classList.add('is-valid')
      document.getElementById("phone").classList.add("is-invalid");
      
      return
    }

    
  } else {
    console.log("required");
    document.getElementById("required").innerHTML = "*Please Fill Out Fields";
  }
});

let code = "";
for (let i = 0; i < 10; i++) {
  code += Math.floor(Math.random() * 10);
}

if (!localStorage.getItem("anonID")) {
  localStorage.setItem("anonID", code);
}

const attemptedCall = async () => {
  let res = await fetch('/callbutton', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    callButtonStatus : 'Call Button Pressed',
    page: window.location.href,
    zipcode: localStorage.getItem('Zipcode') || " ",
    address: localStorage.getItem('Address')  || " ",
    whatIsYourHouseholdSize: localStorage.getItem('What is your household size?')  || " ",
    whatIsYourAnnualHouseholdIncome: localStorage.getItem('What is your annual household income')  || " ",
    whatIsYourBirthYear: localStorage.getItem('What is your birth year?')  || " ",
    whatIsYourGender: localStorage.getItem("What is your gender?") || " ",
    coverage_type: localStorage.getItem("Coverage Type") || " ",
    name: localStorage.getItem('Name') || ' ',
    email: localStorage.getItem('Email') || ' ',
    carrier: localStorage.getItem('carrier') || ' ',
    phoneNumber: localStorage.getItem('Phone Number') || ' ',
    certificate: localStorage.getItem("certificate") || ' ',
    callButtonPressed: "Yes",
    timezone: localStorage.getItem('timezone') || " ",
    clickedAccordians: localStorage.getItem('clickedAccordians') || " ",
    posted: localStorage.getItem('posted') || " ",
    urlName: localStorage.getItem('Url Name') || " ",
    anonId: localStorage.getItem('anonID') || " ",
    state: localStorage.getItem('state') || " "
  }),
  });
}


document.getElementById('call').addEventListener('click', () => {

  let callButtonPressedCheck = localStorage.getItem('callButtonPressed')

  if(!callButtonPressedCheck){
    attemptedCall()
    localStorage.setItem('callButtonPressed', "Yes")
  }
  else{
    console.log('button was already pressed')
    return
  }

  
})


document.addEventListener('input', function (e) {

  document.getElementById('required').innerHTML = ""
});



document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter'){
    document.getElementById("continue").click();
  }
})




