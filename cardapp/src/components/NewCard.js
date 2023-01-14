import { useState } from "react"
const NewCard = (props)=>{
    const [enteredName, setEnteredName] = useState('')
    const [enteredDescription, setEnteredDescription] = useState('')
    const [enteredLevel, setEnteredLevel] = useState(0)
    const [enteredPoint, setEnteredPoint] = useState(0)
    const [enteredImage, setEnteredImage] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        const newCardData = {
            name:enteredName,
            description: enteredDescription,
            level: enteredLevel,
            point: enteredPoint,
            image: enteredImage
        }
        props.onSaveCard(newCardData)
        setEnteredName('')
        setEnteredDescription('')
        setEnteredLevel('')
        setEnteredPoint('')
        setEnteredImage('')

    }
    const nameChangeHandler = (e)=>{
        setEnteredName(e.target.value)
    }
    const descriptionChangeHandler = (e)=>{
        setEnteredDescription(e.target.value)
    }
    const levelChangeHandler = (e)=>{
        setEnteredLevel(e.target.value)
    }
    const pointChangeHandler = (e)=>{
        setEnteredPoint(e.target.value)
    }
    const imageChangeHandler = (e)=>{
        setEnteredImage(e.target.value)
    }
    return(
        <div className="row">
            <div className="col-sm-12 col-md-4"></div>
            <div className="col-sm-12 col-md-4">
                <h1 className="text-center fst-italic">New Card</h1>
                <form action="">
                    <div>
                        <label className="form-label" >Name:</label>
                        <input className="form-control" type="text" onChange={nameChangeHandler}/>
                    </div>
                    <div>
                        <label className="form-label" >Description:</label>
                        <textarea className="form-control" onChange={descriptionChangeHandler} name="" id="" cols="30" rows="5"></textarea>
                    </div>
                    <div className="form-block">
                        <div>
                            <label className="form-label" >Level:</label>
                            <input className="form-control" onChange={levelChangeHandler} type="number" min="0"/>
                        </div>
                        <div>
                            <label className="form-label" >Points:</label>
                            <input className="form-control" onChange={pointChangeHandler} type="text"/>
                        </div>
                    </div>
                    <div>
                        <label className="form-label" >Image URL:</label>
                        <input className="form-control" onChange={imageChangeHandler} type="text"/>
                    </div>
                </form>
                <div className="d-flex justify-content-between m-3">
                    <button className="btn btn-warning" onClick={props.onCancel}>Cancel</button>
                    <button className="btn btn-warning" onClick={submitHandler}>Submit</button>
                </div>
            </div>
            <div className="col-sm-12 col-md-4"></div>
        </div>
    )
}
export default NewCard