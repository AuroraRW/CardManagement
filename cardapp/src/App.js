import {useState} from 'react' 
import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards';
import NewCard from './components/NewCard';

function App() {
  const cardData = [
    {
      id: 1,
      name: 'Mary',
      level: 13,
      point: 2355,
      description: 'This is description.This is description.This is description.This is description.',
      image: "https://cdn-icons-png.flaticon.com/512/147/147144.png"
    },
    {
      id: 2,
      name: 'Lucy',
      level: 10,
      point: 123,
      description: 'This is description.This is description.This is description.This is description.',
      image: "https://cdn-icons-png.flaticon.com/512/147/147144.png"
    },
    {
      id: 3,
      name: 'Tom',
      level: 9,
      point: 4323,
      description: 'This is description.This is description.This is description.This is description.',
      image: "https://cdn-icons-png.flaticon.com/512/147/147144.png"
    },
    {
      id: 4,
      name: 'Lily',
      level: 13,
      point: 765,
      description: 'This is description.This is description.This is description.This is description.',
      image: "https://cdn-icons-png.flaticon.com/512/147/147144.png"
    }
  ]
  const [isCreateCard, setIsCreateCard] = useState(false)
  const [updateData, setUpdateData] = useState(cardData)
 
  const createCardHandler = ()=>{
    setIsCreateCard(true)
    console.log(isCreateCard)
  }
  const cancelHandler = ()=>{
    setIsCreateCard(false)
  }
  const saveCardHandler = (newData)=>{
    const finalData={
      ...newData,
      id: cardData.length+1
    }
    // console.log(finalData)
    const finalCardData = [...cardData, finalData]
    
    // console.log(finalCardData)

    setIsCreateCard(false)
    setUpdateData(finalCardData)

    // cardData.push(finalData)
  }
  return (
    <div className="container">
        <Cards cardData={updateData}/>
        <button className="btn btn-warning" onClick={createCardHandler}>Create</button>
        {isCreateCard && <NewCard onSaveCard={saveCardHandler} onCancel={cancelHandler} />}
    </div>
  );
}

export default App;
