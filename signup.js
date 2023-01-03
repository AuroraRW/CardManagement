import {auth, createUserWithEmailAndPassword, db, ref, set} from './firebase.js'
$(document).ready(()=>{
    $('button').on('click',(e)=>{
        e.preventDefault()

        // remove warning
        if($('p').length){
            $('p').each(function(){
                $(this).remove()
            })
        }
        
        const email = $($('.form-control')[0]).val()
        const password = $($('.form-control')[1]).val()
        const firstName = $($('.form-control')[2]).val()
        const lastName = $($('.form-control')[3]).val()
    // add validation here
    //////////add your code here///////////

    //////////////////////////////////////
        const $genderEle = $('input[name="gender"]:checked')
        const $perferEle = $('input[type="checkbox"]:checked')

        if($genderEle.length==0){
            const $warningEle = $('<p></p>')
            $warningEle.text('Please select gender')
            $warningEle.attr('class', 'warning')
            $('.gender-section').append($warningEle)
        }else if($perferEle.length==0){
            const $warningEle = $('<p></p>')
            $warningEle.text('Please select')
            $warningEle.attr('class', 'warning')
            $('.preference').append($warningEle)
        }else{
            const gender = $genderEle.val()
            let perfer=[]
            // $perferEle.each(i=>{
            //     // console.log($($perferEle[i]).val())
            //     perfer.push($($perferEle[i]).val())
            // })

            $perferEle.each(function(){
                // console.log($(this).val())
                perfer.push($(this).val())
            })

            // console.log(email)
            // console.log(password)
            // console.log(firstName)
            // console.log(lastName)
            // console.log(gender)
            // console.log(perfer)
            const userData = {Email: email, Password: password, 
                FirstName: firstName, LastName: lastName, 
                Gender: gender, Perfer:perfer}
            
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const userKey = user.uid
                // save into db
                set(ref(db, 'Users/' + userKey), userData)
                .then(()=>{
                    localStorage.setItem('name', firstName)
                    window.location.href = "cards.html"
                })
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
        }
    })
})