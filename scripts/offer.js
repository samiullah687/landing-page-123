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

document.getElementById('offer').addEventListener('submit', async (e) => {
    e.preventDefault();

    let formData = new FormData(e.target); // Use e.target instead of e
    let formObj = Object.fromEntries(formData.entries());
    console.log(formObj);
    let modalInstance = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
   

    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl)
    })

   

    const email = formObj.email
    const name = formObj.name

    if(email === "" || name === ""){
       let error_element = document.getElementById('error-span')

       error_element.innerHTML = "*Please fill out the fields*"
       error_element.style.display = "block"
       error_element.style.color = "#FF0000"

       return
    }

    //Check if email is valid

    let email_check = await checkEmail(email)

    if(!email_check){
    
       let error_element = document.getElementById('error-span')

       error_element.innerHTML = "*Please enter a valid email*"
       error_element.style.display = "block"
       error_element.style.color = "#FF0000"

       return
    }
    
    
    modalInstance.hide();
    var toast = new bootstrap.Toast(document.getElementById('myToast'));
    toast.show();

    const tags = 'Email Opt In'

    let url = localStorage.getItem("Url") || window.location.href

    let obj = {
        email: email,
        name: name,
        tags: tags,
        url: url
    }

  await fetch("/mailchimp-optin", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
    },
    body: JSON.stringify(obj)
   })


   window.location.href = "/optin.html"

    return 
});


document.getElementById('offer').addEventListener('input', function() {
    let error_element = document.getElementById('error-span');
    error_element.style.display = 'none';
});