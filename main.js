
const regExps = [/^[0-9a-zA-Z]{1,30}$/,
                /^[0-9a-zA-Z]{1,30}$/,                                              
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/,           
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/
            ]
const inputIds = ['firstname', 'lastname', 'email', 'password']

    // Password Requirement
    // Contains at least one digit (\d)
    // Contains at least one lowercase letter ([a-z])
    // Contains at least one uppercase letter ([A-Z])
    // Contains at least one special character ([!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])
    // Is at least 8 characters long (.{8,})


function _(id){
    return document.getElementById(id)
}

function updateButton(){

    console.log('updateButton')

    let allPassed=true;
    
    for(let i=0; i<4; i++)
    {
        
        const met = regExps[i].test(_(inputIds[i]).value);

        console.log(regExps[i])
        console.log(inputIds[i])
        console.log('met', met)

        if(!met)
        {
            allPassed = false
            break;
        }
    }

    if(allPassed)
    {
        console.log('pass')
        // pass
        _('claim_button').disabled = false;
        _('claim_button').classList.remove('disabled');
    }
    else{
        console.log('fail')
        // fail
        _('claim_button').disabled = true;
        _('claim_button').classList.add('disabled');
    }

}

function setupInput(id, rgx){
    var elm = _(id)
    elm.addEventListener('keyup', function(e){
        var value = e.target.value;
        if(rgx.test(value)){
            // passed
            e.target.classList.remove('invalid')
        }
        else{
            // failed
            e.target.classList.add('invalid')
        }

        updateButton()
    })
}


document.addEventListener("DOMContentLoaded", function(event) {
    for(var i=0; i<4; i++)
        setupInput(inputIds[i], regExps[i])

  });

