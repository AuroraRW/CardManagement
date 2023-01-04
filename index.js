import {apiKey, databaseUrl} from './firebase.js'
const signinUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='
$(document).ready(()=>{
    $('button').on('click',(e)=>{
        e.preventDefault()

        $('#login-email').removeClass('warning')
        $('#login-email').siblings('p').css('display', 'none')
        $('#login-password').removeClass('warning')
        $('#login-password').siblings('p').css('display', 'none')

        const email = $('#login-email').val()
        const password = $('#login-password').val()
        // console.log(email)
        // console.log(password)

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
            // console.log(email)
            // console.log(password)

            const url = signinUrl + apiKey
            fetch(url,{
                method:'POST',
                body: JSON.stringify({email:email,password:password,returnSecureToken:true})
            })
            .then(res=>{
                return res.json()
            })
            .then(response=>{
                const userKey = response.localId
                // save user infor into database
                const token = response.idToken
                const url = databaseUrl+'/Users/'+userKey+'/.json?auth='+ token

                // get the user infor from database
                fetch(url)
                .then(response=>{
                    return response.json()
                })
                .then(response=>{
                    console.log(response)
                    // console.log(response.FirstName)
                    localStorage.setItem('token', token)
                    localStorage.setItem('name', response.FirstName)
                    window.location.href="cards.html"
                })
            })
            // signInWithEmailAndPassword(auth, email, password)
            // .then((userCredential) => {
            //     // Signed in 
            //     const user = userCredential.user;
            //     // console.log(user)
            //     const userKey = user.uid
            //     const dbRef = ref(db);
            //     get(child(dbRef, `Users/${userKey}`)).then((snapshot) => {
            //         if (snapshot.exists()) {
            //             // console.log(snapshot.val());
            //             let name = snapshot.val().FirstName
            //             localStorage.setItem('name', name)
            //             window.location.href='cards.html'

            //         } else {
            //           console.log("No data available");
            //         }
            //       }).catch((error) => {
            //         console.error(error);
            //       });
            // })
            // .catch((error) => {
            //     const errorCode = error.code;
            //     const errorMessage = error.message;
            //     console.log(errorMessage)
            // });
            
        }
    })
})