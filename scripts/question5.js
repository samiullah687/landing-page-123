
let url_name = localStorage.getItem('Url Name')

if(url_name){
  document.getElementById('headlineTitle').innerHTML = url_name
}
else{
  document.getElementById('headlineTitle').innerHTML = 'Save up to 60% on health insurance! Complete your profile and we’ll match you with providers.'
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


let code = "";
for (let i = 0; i < 10; i++) {
  code += Math.floor(Math.random() * 10);
}
if (!localStorage.getItem("anonID")) {
  localStorage.setItem("anonID", code);
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



function handleButtonClick() {
  let month = document.getElementById("month").value;
  let day = document.getElementById("day").value;
  let year = document.getElementById("year").value;



  if(!month || !day || !year) {
    document.getElementById('required').innerHTML = "Please fill out all fields"
    return
  }




  //Check if user input letters instead of numbers

  if(isNaN(month) || isNaN(day) || isNaN(year)) {
    document.getElementById('required').innerHTML = "Please enter numbers only"
    return
  }


  
  
  if(year.length < 4){

    document.getElementById('required').innerHTML = "Please enter a valid year in YYYY format"

    //Remove was validated class from form

    document.getElementById('date-of-birth-form').classList.remove('was-validated')
    //Add -is-invalid class to year id input

    document.getElementById('year').classList.add('is-invalid')
    return
  }

  if(day.length < 2){

    document.getElementById('required').innerHTML = "Please enter a valid day in DD format Example: 04"

    //Remove was validated class from form

    document.getElementById('date-of-birth-form').classList.remove('was-validated')
    //Add -is-invalid class to year id input
    document.getElementById('day').classList.add('is-invalid')


    return
  }

  if(month.length < 2){

    document.getElementById('required').innerHTML = "Please enter a valid month in month format. Example 04"

    //Remove was validated class from form

    document.getElementById('date-of-birth-form').classList.remove('was-validated')

    //Add -is-invalid class to year id input

    document.getElementById('month').classList.add('is-invalid')
    return
  }

  let allowedMonths = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']

  if(!allowedMonths.includes(month)){
    document.getElementById('required').innerHTML = "Please enter a valid month"

    //Remove was validated class from form

    document.getElementById('date-of-birth-form').classList.remove('was-validated')

    //Add -is-invalid class to year id input

    document.getElementById('month').classList.add('is-invalid')
    return
  }

  

  if(parseInt(day) > 31){
    document.getElementById('required').innerHTML = "Please enter a valid day."

    //Remove was validated class from form

    document.getElementById('date-of-birth-form').classList.remove('was-validated')

    //Add -is-invalid class to year id input

    document.getElementById('day').classList.add('is-invalid')

    return
  }

  if(parseInt(day) < 1){
    document.getElementById('required').innerHTML = "Please enter a valid day."

    //Remove was validated class from form

    document.getElementById('date-of-birth-form').classList.remove('was-validated')

    //Add -is-invalid class to year id input

    document.getElementById('day').classList.add('is-invalid')
    return
  }


  //Check if user input is in the future

  let currentYear = parseInt(new Date().getFullYear())

  console.log(currentYear)


  if(currentYear < year) {
    document.getElementById('required').innerHTML = "Please enter a year in the past"

    //Remove was validated class from form

    document.getElementById('date-of-birth-form').classList.remove('was-validated')

    //Add -is-invalid class to year id input  

    document.getElementById('year').classList.add('is-invalid')
    return
  }

  if(currentYear === year) {
    document.getElementById('required').innerHTML = "Please enter a year in the past"

    //Remove was validated class from form

    document.getElementById('date-of-birth-form').classList.remove('was-validated')

    //Add -is-invalid class to year id input

    document.getElementById('year').classList.add('is-invalid')
    return
  }

  //Check if the user is 21 years old or older

  if(currentYear - year < 21) {
    document.getElementById('required').innerHTML = "*You must be at least 21 years old to complete this form*"

    //Remove was validated class from form

    document.getElementById('date-of-birth-form').classList.remove('was-validated')

    //Add -is-invalid class to year id input

    document.getElementById('year').classList.add('is-invalid')


    return
  }

  

  if(currentYear - year > 120){
    document.getElementById('required').innerHTML = "Please enter a valid year"

    //Remove was validated class from form

    console.log('Got here')

    //Add -is-invalid class to year id input

    document.getElementById('year').classList.add('is-invalid')


    document.getElementById('date-of-birth-form').classList.remove('was-validated')


    return
  }

  console.log('Got here')

  let combinedStr = `${month}/${day}/${year}`
  localStorage.setItem('What is your birth year?', combinedStr)
  window.location.href = '/q6.html'
  
}


 
document.addEventListener("DOMContentLoaded", function() {
  var id1 = document.getElementById("month");
  var id2 = document.getElementById("day");
  var id3 = document.getElementById("year");

  id1.addEventListener("keyup", function(event) {
    if (this.value.length === this.maxLength) {
      id2.focus();
    }
    else if(event.key === "Backspace" && this.value.length === 0){
      id1.focus();
    }
  });


  id2.addEventListener("keyup", function(event) {
    if (this.value.length === this.maxLength) {
      id3.focus();
    }
    else if(event.key === "Backspace" && this.value.length === 0){
      id1.focus();
    }
  })

  id3.addEventListener("keyup", function(event) {
    if(event.key === "Backspace" && this.value.length === 0){
      id2.focus();
    }
  }
  )
  
});

document.getElementById("date-of-birth-form").addEventListener("submit", (e) => {

  e.preventDefault();

  handleButtonClick();
});

document.addEventListener('keypress',  function (e) {
  if (e.key === "Enter"){

    document.getElementById("submit-form").click();
  }
});

document.addEventListener('input', function (e) {

  document.getElementById('required').innerHTML = ""
});

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

