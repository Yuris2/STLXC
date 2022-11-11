//Navigation Bar

const toggleButton = document.getElementsByClassName('toggle-button')[0] //Output is an array and we want the first element
const navbarLocation = document.getElementsByClassName('navbar-locations')[0]

toggleButton.addEventListener('click', () => {
    navbarLocation.classList.toggle('active')
})

//Contact Form

$(document).ready(function () { //Sorry I basically copied and pasted this. Don't know jQuery
    $('.submit').click(function (event) {
    
        let email = $('.email').val()
        let subject = $('.subject').val()
        let message = $('.message').val()
        let statusElm = $('.status')
        statusElm.empty()

        if(email.length > 5 && email.includes('@') && email.includes ('.'))
            statusElm.append('<div>Email entered correctly</div>')
        else {
            event.preventDefault () //Do not trigger submit
            statusElm.append('<div class="error_messages">There is something wrong with the email</div>')
        }

        if(subject.length > 2) {
            //statusElm.append('<div> The subject is valid</div>')
        }
        else {
            event.preventDefault () //Do not trigger submit
            statusElm.append('<div class="error_messages">There is something wrong with the subject</div>')
        }

        if (message.length >=10) {
            //statusElm.append('<div> The message is valid</div>')
        }
        else {
            event.preventDefault () //Do not trigger submit
            statusElm.append('<div class="error_messages">The message is under 20 characters</div>')
        }

    })
})
