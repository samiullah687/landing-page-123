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


let url_name = localStorage.getItem('Url Name')

if(url_name){
  document.getElementById('headlineTitle').innerHTML = url_name
}
else{
  document.getElementById('headlineTitle').innerHTML = 'Save up to 60% on health insurance! Complete your profile and we’ll match you with providers.'
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
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

document.getElementById("first-form").addEventListener("submit", (e) => {

  //Get form data


  e.preventDefault();

  let data = new FormData(e.target);

  let data_obj = Object.fromEntries(data.entries());

  //Check if it's empty

 
  //Check if inlineRadioOptions exists in data_obj

  if (!data_obj.inlineRadioOptions) {
    console.log('inlineRadioOptions does not exist')
    return
  }
  else{
    console.log('inlineRadioOptions exists')
  }
  
  
    localStorage.setItem('Coverage Type', data_obj.inlineRadioOptions)

    let code = "";

    for (let i = 0; i < 10; i++) {
      code += Math.floor(Math.random() * 10);
    }

    if (!localStorage.getItem('anonID')) {
      localStorage.setItem("anonID",code)

      window.location.href = "q2.html"

    }
    else{
      window.location.href = "q2.html"
    } 

   
    

  })



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





