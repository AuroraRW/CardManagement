import CardInfor from "./CardInfor"
const Cards = (props)=>{
    // console.log(props.cardData)
    return(
        <div className="row">
            {props.cardData.map(card=>(
                <CardInfor key={card.id} name={card.name} level={card.level} 
                            point={card.point} image={card.image} description={card.description}/>
            ))}

          {/* <CardInfor />   
          <CardInfor />  
          <CardInfor />  
          <CardInfor />  */}
        </div>
    )
}

export default Cards