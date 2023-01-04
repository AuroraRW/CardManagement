import {apiKey, databaseUrl} from './firebase.js'
const singupUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
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
            const url = singupUrl + apiKey
            fetch(url,{
                method:'POST',
                body: JSON.stringify({email:email,password:password,returnSecureToken:true})
            })
            .then(res=>{
                return res.json()
            })
            .then(response=>{
                console.log(response)
                const userKey = response.localId
                const token = response.idToken
                const dataUrl = databaseUrl+'/Users/'+userKey+'/.json?auth='+ token
                fetch(dataUrl,{
                    method: 'PUT',
                    body: JSON.stringify(userData)
                })
                .then(response=>{
                    return response.json()
                })
                .then(response=>{
                    localStorage.setItem('token', token)
                    localStorage.setItem('name', response.FirstName)
                    window.location.href="cards.html"
                })
            })
        }
    })
})