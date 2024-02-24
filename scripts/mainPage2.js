const storeZipcode = async () => {
  const zipcodeInput = document.getElementById('zipcode');
  const zipcodeValue = zipcodeInput.value

  if(zipcodeValue == ""){
    
    window.location.href = '/q1.html'
    return
  }

  let data = await fetch("/get-timezone", {
              method: "POST",
              headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({
                zipcode: zipcodeValue
              }),
  });

  let response = await data.json()


  if(response && response.timezone !== null){
    localStorage.setItem('Zipcode', zipcodeValue);
    localStorage.setItem('timezone', response.timezone[0])
    localStorage.setItem('state', response.timezone[1])

    
    window.location.href = '/q1.html'
  }
  else{
    localStorage.setItem('Zipcode', " ");
    localStorage.setItem('timezone', " ")
    localStorage.setItem('state', " ")
    
    window.location.href = '/q1.html'
  }


  
};

function appendToLocalStorage(){

  localStorage.removeItem('Zipcode');
  localStorage.removeItem('state')
  localStorage.removeItem('When do you need coverage?')
  localStorage.removeItem('What is your household size?')
  localStorage.removeItem('What is your annual household income')
  localStorage.removeItem('What is your birth year?')
  localStorage.removeItem('What is your gender?')
  localStorage.removeItem('Are dental or vision plans important to you?')
  localStorage.removeItem('Name')
  localStorage.removeItem('Email')
  localStorage.removeItem('carrier')
  localStorage.removeItem('Phone Number')
  localStorage.removeItem('certificate')
  localStorage.removeItem('callButtonPressed')
  localStorage.removeItem('timezone')
  localStorage.removeItem('clickedAccordians')
  localStorage.removeItem('posted')
  localStorage.removeItem('Url Name')
  localStorage.removeItem('mouseleft')
  localStorage.removeItem('Coverage Type')
  localStorage.removeItem('Address')

  const urlParams = new URLSearchParams(window.location.search);

  const urlObj = decodeURIComponent(urlParams.get("url")).replace(/.*\.html/, '');

  let urlParams2 = new URLSearchParams(urlObj)

    // Check if campaignid parameter exists
    if (urlParams2.has('campaignid')) {
      const campaignId = urlParams2.get('campaignid');
      localStorage.setItem('campaignid', campaignId);
    }

    // Check if adgroupid parameter exists
    if (urlParams2.has('adgroupid')) {
      const adGroupId = urlParams2.get('adgroupid');
      localStorage.setItem('adgroupid', adGroupId);
    }
    const url = decodeURIComponent(urlParams.get("url")).replace(/\.html.*$/, "");
    const fileName = url.split("/").pop(); // get the last part of the URL path
    //If filename contains "q-", do not display the headline
  
    const formattedName = fileName.replace(/-/g, " ").replace(/q /g, "").replace(/q-/g, "").replace(/_/g, " ").replace(/.html/g, "").replace(/%20/g, " ").replace(/%3F/g, "?").replace(/%3D/g, "=").replace(/%2C/g, ",").replace(/%2F/g, "/").replace(/%3A/g, ":").replace(/%26/g, "&").replace(/%23/g, "#").replace(/%24/g, "$").replace(/%25/g, "%").replace(/%3B/g, ";").replace(/%2B/g, "+").replace(/%40/g, "@");
    
    const headline = document.getElementById("headlineTitle");
  
    //If the headline contains "q-", do not display the headline
    
    if ( formattedName === null || !formattedName.toLowerCase().includes('null') && !fileName.includes('q-'))
    {
  
        let formattedNameCapitalLetters = formattedName.split(' ').map((word) => {
          return word[0].toUpperCase() + word.substring(1); 
        }).join(" ");
  
      
  
        
        headline.innerHTML = `<b>${formattedNameCapitalLetters}</b>`;

        localStorage.setItem('Url Name', formattedNameCapitalLetters);
        
  
        fetch("/title", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title: `${formattedName} - ${window.location.href}` })
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
    }

    console.log("urlParams, formattedName",window.location.href, formattedName)
    localStorage.setItem('Url', window.location.href);
    localStorage.setItem('Title', formattedName);
    localStorage.setItem("Tags", formattedName)

    if( formattedName === null || formattedName.toLowerCase().includes('null')){
      localStorage.setItem("Tags", "Generic")
    }

   

  // 8310012039587
  let code = "";
  for (let i = 0; i < 10; i++) {
    code += Math.floor(Math.random() * 10);
  }
  if (!localStorage.getItem('anonID')) {
  localStorage.setItem("anonID",code)
  }
}

const storeAccordian = async (accordianText) => {
//Get from localStorage if exists



let clickedAccordians = localStorage.getItem('clickedAccordians')

if(!clickedAccordians){
  localStorage.setItem('clickedAccordians', accordianText)
}

else{

  let clickedAccordiansArray = clickedAccordians.split('|')

  //Check if accordianText is already in the array, if so, return

  if(clickedAccordiansArray.includes(accordianText)){
    return
  }
  else{
    clickedAccordiansArray.push(accordianText)

    let combinedClickedAccordiansStr = clickedAccordiansArray.join('|')

    localStorage.setItem('clickedAccordians', combinedClickedAccordiansStr)
  }

  
}


}

appendToLocalStorage()
document.querySelector('#button').addEventListener('click', () => {
  storeZipcode();
});


document.querySelector('#button2').addEventListener('click', () => {
  
  window.location.href = '/q1.html'
})