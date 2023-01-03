import{auth, signOut, db, ref, get, child } from './firebase.js'
$(document).ready(()=>{
    let name = localStorage.getItem('name')
    if(name){
        // show the name
        $($('p')[0]).text('Hi, ' + name)
        // show cards
        const dbRef = ref(db);
        get(child(dbRef, 'Cards')).then((snapshot) => {
            if (snapshot.exists()) {
                // console.log(snapshot.val());
                const cards = Object.values(snapshot.val())
                console.log(cards)
                // sort by level 
                cards.forEach(cardData=>{
                    let $newCard = $(`<div class="card d-flex flex-row shadow m-2 p-0" style="width: 28rem;">
                        <div class="bg-info rounded-2 px-2" style="width: 10rem;">
                            <div class="bg-secondary m-3 rounded-3">
                                <p class="text-center text-white fw-bolder px-2 text-nowrap">LEVEL ${cardData.level}</p>
                            </div>
                            <div class="d-flex justify-content-center"> 
                                <img style="width:100px" src=${cardData.imageURL} alt="male avatar with beard">
                            </div>
                            <div class="bg-secondary m-2 px-2 rounded-3"> 
                                <p class="text-center text-white fw-bolder text-nowrap">${cardData.point} POINTS</p>
                            </div>
                        </div>
                        <div class="m-3 position-relative" style="width: 16rem;">
                            <div>
                                <h1> ${cardData.name} </h1>
                            </div>
                            <div>
                                <p class="lh-sm"> ${cardData.description}</p>
                            </div>
                            <div class="d-flex justify-content-end position-absolute bottom-0 end-0">
                                <a href="https://www.google.com" class="text-decoration-none">LinkedIn </a>
                            </div>
                        </div>
                    </div>`)
                    $('#cards').append($newCard)
                })
                
            } else {
                console.log("No data available");
            }
            }).catch((error) => {
            console.error(error);
            });

    }

    $($('button')[0]).on('click', ()=>{

        signOut(auth)
        .then(() => {
            // Sign-out successful.
            localStorage.removeItem('name')
            window.location.href="index.html"
          })
        .catch((error) => {
            console.log(error)  
        });
    })
    $($('button')[1]).on('click', ()=>{
        window.location.href="create.html"
    })
})