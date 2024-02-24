const verifyCertificate = async () => {

    let certificate = localStorage.getItem('certificate')
    let email = localStorage.getItem('Email') || ' '
    let phone = localStorage.getItem('Phone Number') || ' '
    let anonID = localStorage.getItem('anonID') || " "

    if(certificate != null){
          let res = await fetch("/verify-certificate", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                certificate: certificate,
                email: email,
                phone: phone,
                anonID: anonID
            }),
        });
    }
    else{
        return
    }

  
}

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


const sendData = async (
  name,
  email,
  phone,
  certificate,
  url,
  zipcode,
  state,
  address,
  annualHouseholdIncome,
  birthYear,
  gender,
  householdSize,
  coverage_type,
  anonId,
  carrier,
  timezone,
  callButtonPressed,
  accordions
) => {
  try {
    let res = await fetch("/recieve", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        carrier: carrier,
        state: state,
        url: url,
        zipcode: zipcode,
        address: address,
        annualHouseholdIncome: annualHouseholdIncome,
        gender: gender,
        birthYear: birthYear,
        householdSize: householdSize,
        coverage_type: coverage_type,
        anonId: anonId,
        certificate: certificate,
        timezone: timezone,
        callButtonPressed: callButtonPressed,
        accordions: accordions
      }),
      keepalive: true,
    });
  } catch (error) {
    console.log(error);
  }
};




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
      state: localStorage.getItem('state') || ' ',
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

const postToMailChimp = async () => {
  const email = localStorage.getItem('Email') || " "
  const name = localStorage.getItem('Name') || " "
  const tags = localStorage.getItem('Tags') || null
  const campaignId = localStorage.getItem('campaignid') || null
  const adGroupId = localStorage.getItem('adgroupid') || null

  let obj = {
    email: email,
    name: name,
    tags: tags,
    
  }

  await fetch("/mailchimp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj)
  })
}


const sendUserData = async () => {

    try {

    const callButtonPressed = localStorage.getItem("callButtonPressed") || " ";
    const title = localStorage.getItem("Title") || " ";
    const url = localStorage.getItem("Url") || " ";
    const zipcode = localStorage.getItem("Zipcode") || " ";
    const state = localStorage.getItem('state') || " ";
    
    const email = localStorage.getItem("Email") || " ";
    const name = localStorage.getItem("Name") || " ";
    const phoneNumber = localStorage.getItem("Phone Number") || " ";
    const annualHouseholdIncome = localStorage.getItem("What is your annual household income") || " ";
    const birthYear = localStorage.getItem("What is your birth year?") || " ";
    const gender = localStorage.getItem("What is your gender?") || " ";
    const householdSize = localStorage.getItem("What is your household size?") || " ";
  
    const anonId = localStorage.getItem("anonID") || " ";
    const certificate = localStorage.getItem("certificate") || " ";
    const carrier = localStorage.getItem("carrier") || " ";
    const timezone = localStorage.getItem('timezone') || " ";
    const accordions = localStorage.getItem('clickedAccordians') || " ";
    const tags = localStorage.getItem("Tags") || " ";
    const campaignId = localStorage.getItem('campaignid') || null
    const adGroupId = localStorage.getItem('adgroupid') || null

    const address = localStorage.getItem('Address') || " ";
    const coverage_type = localStorage.getItem('Coverage Type') || " ";
  
    // Create object to send in fetch request body
    const data = {
        callButtonPressed: callButtonPressed,
        title: title,
        url: url,
        zipcode: zipcode,
        state: state,
        address: address,
        email: email,
        name: name,
        phoneNumber: phoneNumber,
        annualHouseholdIncome: annualHouseholdIncome,
        birthYear: birthYear,
        gender: gender,
        householdSize: householdSize,
        coverage_type: coverage_type,
        anonId: anonId,
        certificate: certificate,
        carrier: carrier,
        timezone: timezone,
        accordions: accordions,
        tags: tags,
        campaignId: campaignId,
        adGroupId: adGroupId

    };


      //Make request to /calltools
      let split_name = name.split(' ')

      console.log(split_name)

      //Get length

      let firstname;
      let lastname;

      if(split_name.length === 1){
        firstname = split_name[0]
        lastname = "?"
      }
      else{
        firstname = split_name[0]
        lastname = split_name[1]
      }

      

      let number = phoneNumber.replace(/\D/g,'');

      

      let params = {
        source: "Internet",
        user: "101",
        pass: "yVx8qmjgjhWWvPX",
        function: "add_lead",
        phone_number: number,
        campaign_dnc_check: "Y",
        campaign_id: "1000",
        list_id: "1000",
        duplicate_check: "DUPLIST",
        hopper_priority: "99",
        add_to_hopper: "Y",
        first_name: firstname,
        last_name: lastname,
        state: state,
        postal_code: zipcode,
        email: email,
        custom_fields: "Y",
        dateofbirth: birthYear,
        address2: householdSize,
        address3: address,
        province: annualHouseholdIncome,
        security_phrase: coverage_type,
        comments: "Source: Mickie Realtime"

      }

      console.log('got here')

    

      await fetch("/ytel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params)
    })

    // Send fetch request to /formfill endpoint
    fetch("/formfill", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log("Formfill response:", data);
        })
        .catch(error => {
          
        });
        
    } catch (error) {

        console.error("Formfill error:", error);
        
    }
    
};

//Check if posted exists in local storage

let posted = localStorage.getItem('posted')

console.log(posted)

if(posted === null){

  const callButtonPressed = localStorage.getItem("callButtonPressed") || " ";
  const title = localStorage.getItem("Title") || " ";
  const url = localStorage.getItem("Url") || " ";
  const zipcode = localStorage.getItem("Zipcode") || " ";
  const state = localStorage.getItem('state') || " ";
 
  const email = localStorage.getItem("Email") || " ";
  const name = localStorage.getItem("Name") || " ";
  const phoneNumber = localStorage.getItem("Phone Number") || " ";
  const annualHouseholdIncome = localStorage.getItem("What is your annual household income") || " ";
  const birthYear = localStorage.getItem("What is your birth year?") || " ";
  const gender = localStorage.getItem("What is your gender?") || " ";
  const householdSize = localStorage.getItem("What is your household size?") || " ";

  const address = localStorage.getItem('Address') || " ";
  const coverage_type = localStorage.getItem('Coverage Type') || " ";

  const anonId = localStorage.getItem("anonID") || " ";
  const certificate = localStorage.getItem("certificate") || " ";
  const carrier = localStorage.getItem("carrier") || " ";
  const timezone = localStorage.getItem('timezone') || " ";
  const accordions = localStorage.getItem('clickedAccordians') || " ";




  verifyCertificate()
  sendUserData();
  sendData(
      name,
      email,
      phoneNumber,
      certificate,
      url,
      zipcode,
      state,
      address,
      annualHouseholdIncome,
      birthYear,
      gender,
      householdSize,
      coverage_type,
      anonId,
      carrier,
      timezone,
      callButtonPressed,
      accordions
  );

  localStorage.setItem('posted', 'true')

  
  let emailCheckResults = checkEmail(email)

  if(emailCheckResults){
    console.log('email is good')
    postToMailChimp()
  }



  


}
else{
    console.log('User already submitted!')
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
