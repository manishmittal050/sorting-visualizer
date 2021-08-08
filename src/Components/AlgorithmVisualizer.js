import React, { useState } from 'react';
import './AlgorithmVisualizer.css';


const AlgorithmVisualizer = () => {

    const [valueArray, setValueArray] = useState(generateArrayRandomly());

    // console.log(valueArray);

    const resetArray = () => {
        setValueArray(generateArrayRandomly());
    }


    function mergeSort() { }

    function quickSort() {

    }



    const arrayChangeHandler = () => {
        setValueArray((prevState) => {
            return [prevState]
        });
        // console.log(userInput);
    };

    function bubbleSort() {
        let mainArray = valueArray;
        // console.log("Coming here", mainArray);
        for (let i = 0; i < mainArray.length; i++) {
            for (let j = 0; j < mainArray.length - i - 1; j++) {
                // console.log('here');
                setTimeout(() => {
                    if (mainArray[j] > mainArray[j + 1]) {
                        let temp = mainArray[j];
                        mainArray[j] = mainArray[j + 1];
                        mainArray[j + 1] = temp;
                        // console.log("after swazp ", mainArray)

                        setValueArray((prevState) => {
                            return [...prevState = mainArray]
                        });

                    }
                }, 100)
            }
        }
    }

    return (

        <div className='array-container'>
            {valueArray.map((value, idx) => (
                <div className='array-bar'
                    key={idx}
                    style={{ height: `${value}px` }}>
                </div>))}
            <center><button onClick={resetArray}>Generate New Array</button>
                <button onClick={bubbleSort}>Bubble Sort</button></center>
        </div>
    )

}



const generateArrayRandomly = () => {
    let arr = [];
    for (let i = 5; i < 335; i++) {
        arr.push(Math.round(Math.random() * 656));
    }
    return arr;
};
export default AlgorithmVisualizer;

