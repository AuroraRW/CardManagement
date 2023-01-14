const CardBar = (props)=>{
    let output = props.title==='LEVEL'? 'LEVEL '+props.level : props.point+' POINTS'
    return(
        <div className="bg-secondary m-2 px-2 rounded-3">
            <p className="text-center text-white fw-bolder text-nowrap">{output}</p>
        </div>
    )
}

export default CardBar