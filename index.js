const loginEle = document.querySelector('button')
loginEle.addEventListener('click',(e)=>{
    e.preventDefault()
    document.getElementById('login-email').nextElementSibling.style.display = 'none'
    document.getElementById('login-email').classList.remove("warning");
    document.getElementById('login-password').nextElementSibling.style.display = 'none'
    document.getElementById('login-password').classList.remove("warning");

    const email = document.getElementById('login-email').value
    const password = document.getElementById('login-password').value
    

    let reEmail = /[a-z]+@[a-z]+\.[a-z]+/
    let rePassword = /[a-zA-Z0-9]{6,20}/
    if(!reEmail.test(email)){
        document.getElementById('login-email').classList.add("warning");
        document.getElementById('login-email').nextElementSibling.style.display = 'block'
        console.log('email should be in correct format!')
    }else if(!rePassword.test(password)){
        document.getElementById('login-password').classList.add("warning");
        document.getElementById('login-password').nextElementSibling.style.display = 'block'
        console.log('password should be in correct format!')
    }else{
        // database
        console.log(email)
        console.log(password)
        window.location.href='cards.html'
    }
})