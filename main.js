
function _(id){
    return document.getElementById(id)
}

function setupInput(id, rgx){
    var elm = _(id)
    elm.addEventListener('keyup', function(e){
        var value = e.target.value;
        if(rgx.test(value)){
            // passed
            e.target.classList.remove('invalid')

            _("claim_button").disabled=false;
            _("claim_button").classList.remove('disabled')

            // console.log('pass')
            // console.log(e.target)
            // console.log(_("claim_button"))
        }
        else{
            // failed
            e.target.classList.add('invalid')

            _("claim_button").disabled=true;
            _("claim_button").classList.add('disabled')

            // console.log('fail')
            // console.log(e.target)
            // console.log(_("claim_button"))
        }
    })
}

document.addEventListener("DOMContentLoaded", function(event) {
    // Your code to be executed after the HTML content has loaded goes here
        
    setupInput('firstname', /^[0-9a-zA-Z]{1,30}$/)
    setupInput('lastname', /^[0-9a-zA-Z]{1,30}$/)
    setupInput('email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    setupInput('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/)

    // Password Requirement
    // Contains at least one digit (\d)
    // Contains at least one lowercase letter ([a-z])
    // Contains at least one uppercase letter ([A-Z])
    // Contains at least one special character ([!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])
    // Is at least 8 characters long (.{8,})
  });

