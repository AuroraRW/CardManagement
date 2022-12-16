const submitBtn = document.querySelector('button')
submitBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    const dataList = document.querySelectorAll('.form-control')
    const cardName = dataList[0].value
    const cardDescription = dataList[1].value
    const cardLevel = dataList[2].value
    const cardPoint = dataList[3].value
    const cardImageURL = dataList[4].value
    // validation
    /////////////add code here/////////////
    const data = {name:cardName, description:cardDescription, 
                  level: cardLevel, point: cardPoint, imageURL:cardImageURL}
    console.log(data)
    localStorage.setItem('card', JSON.stringify(data))
    window.location.href = 'cards.html'
})