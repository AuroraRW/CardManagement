$(document).ready(()=>{
    $('button').on('click',(e)=>{
        e.preventDefault()

        $('#login-email').removeClass('warning')
        $('#login-email').siblings('p').css('display', 'none')
        $('#login-password').removeClass('warning')
        $('#login-password').siblings('p').css('display', 'none')

        const email = $('#login-email').val()
        const password = $('#login-password').val()
        console.log(email)
        console.log(password)

        let reEmail = /[a-z]+@[a-z]+\.[a-z]+/
        let rePassword = /[a-zA-Z0-9]{6,20}/
        if(!reEmail.test(email)){
            $('#login-email').addClass('warning')
            $('#login-email').siblings('p').css('display', 'block')
            console.log('email should be in correct format!')
        }else if(!rePassword.test(password)){
            $('#login-password').addClass('warning')
            $('#login-password').siblings('p').css('display', 'block')
            console.log('password should be in correct format!')
        }else{
            // database
            console.log(email)
            console.log(password)
            window.location.href='cards.html'
        }
    })
})