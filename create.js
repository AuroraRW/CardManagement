import {db, ref,set} from './firebase.js'
$(document).ready(()=>{
    $('button').on('click',(e)=>{
        e.preventDefault()
        const cardName = $($('.form-control')[0]).val()
        const cardDescription = $('.form-control')[1].value
        const cardLevel = $($('.form-control')[2]).val()
        const cardPoint = $($('.form-control')[3]).val()
        const cardImageURL = $($('.form-control')[4]).val()
        // validation
        /////////////add code here/////////////
        const data = {name:cardName, description:cardDescription, 
                        level: cardLevel, point: cardPoint, imageURL:cardImageURL}
        console.log(data)
        // save data into db
        const cardKey = getRandomKey()
        set(ref(db, 'Cards/' + cardKey), data)
        .then(()=>{
            window.location.href = "cards.html"
        })
    })
})
const getRandomKey = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const length = 28;
    let randomStr = "";
    for (let i = 0; i < length; i++) {
      const randomNum = Math.floor(Math.random() * characters.length);
      randomStr += characters[randomNum];
    }
    return randomStr;
  };