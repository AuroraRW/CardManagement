const submitEle = document.querySelector('button')
submitEle.addEventListener('click',(e)=>{
    e.preventDefault()
    // remove warning
    const warningEle = document.querySelectorAll('p')
    if(warningEle.length!==0){
        warningEle.forEach((element)=>{
            element.remove()
        })
    }
    const email = document.querySelectorAll('.form-control')[0].value
    const password = document.querySelectorAll('.form-control')[1].value
    const firstName = document.querySelectorAll('.form-control')[2].value
    const lastName = document.querySelectorAll('.form-control')[3].value
    // add validation here
    //////////add your code here///////////

    //////////////////////////////////////
    const genderEle = document.querySelector('input[name="gender"]:checked')
    const perferEle = document.querySelectorAll('input[type="checkbox"]:checked')


    // validation
    if(!genderEle){
        // create an element to show the warning
        const warningEle = document.createElement('p')
        warningEle.setAttribute('class', 'warning')
        warningEle.innerText = 'Please select gender'
        document.querySelector('.gender-section').appendChild(warningEle)
    }else if(!perferEle.length){
        // when true, that means user click nothing
        const warningEle = document.createElement('p')
        warningEle.setAttribute('class', 'warning')
        warningEle.innerText = 'Please select'
        document.querySelector('.preference').appendChild(warningEle)
    }else{
        const gender = genderEle.value
        let perfer=[]
        perferEle.forEach(ele=>{
            perfer.push(ele.value)
        })
        console.log(email)
        console.log(password)
        console.log(firstName)
        console.log(lastName)
        console.log(gender)
        console.log(perfer)
    }
})