import React, {useState} from 'react';


function App() {

    const [list, setList] = useState([
        {value: 0, id: 1, numberOfButton: [1]},
        {value: 1, id: 2, numberOfButton: [1, 2, 3, 4]},
        {value: 2, id: 3, numberOfButton: [1, 2, 3]},
    ])

    const [number, setNumber] = useState(0);

    const addButton = () => {
        const newButton = [];
        for ( let i = 1; i <= number; i++){
            newButton.push(i);
        }
        const newCounter =
             {value:inputValue,
            id: Math.random(),
            numberOfButton: newButton}

            const newList = [...list,newCounter];
        setList(newList);
        setInputValue(0);
    }

    const [inputValue, setInputValue] = useState('');


 const counterPlus = (id, value) => {
     const newList = list.map(el => {
         if (el.id === id) {
             //return {value: el.value + 1, id: el.id}
             return {...el, value: el.value + value}
         }
         return el;
     })

     setList(newList);
 }

 const flipCounters = (index, value) => {

     const flipElements = [...list]
     const temp = flipElements[index]
     flipElements[index] = flipElements[index + value]
     flipElements[index + value] = temp

     setList(flipElements);

 }

    return (
        <div>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(+e.target.value)}/>

            <input type="text" value={number} onChange={(e) => setNumber(+e.target.value)}/>

                    <button  onClick={addButton}>Create</button>

    {list.map((elem, index) =>
                <div key={elem.id}>



                    {elem.numberOfButton.map(el => <button onClick={() => counterPlus(elem.id, -el)}>{-el}</button>)}

                    {elem.value}

                    {elem.numberOfButton.map(el => <button onClick={() => counterPlus(elem.id, el)}>{el}</button>)}
                    <button onClick={() => flipCounters(index,-1) } disabled={index === 0}>up</button>
                    <button onClick={() => flipCounters(index, 1)} disabled={index === list.length -1}>down</button>



                </div>)}
        </div>
    );
}

export default App;
