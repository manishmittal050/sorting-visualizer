import React, { useState } from 'react';
import './AlgorithmVisualizer.css';
import { getMergeSortAnimations } from "./AlgorithmImplementation";
import { SelectionSortImplementation } from './SelectionSortImplementation';


const AlgorithmVisualizer = () => {

    const [valueArray, setValueArray] = useState(generateArrayRandomly());


    const resetArray = () => {
        setValueArray(generateArrayRandomly());
    }




    function mergeSort(array) {
        const animations = getMergeSortAnimations(valueArray);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? "turquoise" : "pink";
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 2);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * 2);
            }
        }

    }



    function quickSort() {

    }

    function insertionSOrt() {

    }

    function selectionSort() {
        const animations = SelectionSortImplementation(valueArray);


        console.log(animations);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                console.log("edsc ", animations[i]);
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? "turquoise" : "pink";
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 4);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * 4);
            }
        }

    }




    // const arrayChangeHandler = () => {
    //     setValueArray((prevState) => {
    //         return [prevState]
    //     });
    //     // console.log(userInput);
    // };

    function bubbleSort() {
        let mainArray = valueArray;

        // console.log("Coming here", mainArray);
        for (let i = 0; i < mainArray.length; i++) {
            for (let j = 0; j < mainArray.length - i - 1; j++) {
                setTimeout(() => {
                    if (mainArray[j] > mainArray[j + 1]) {


                        let temp = mainArray[j];
                        mainArray[j] = mainArray[j + 1];
                        mainArray[j + 1] = temp;

                        setValueArray((prevState) => {
                            return [...prevState = mainArray]
                        });

                    }
                }, 50)



            }
        }
    }

    return (
        <React.Fragment>
            <div className="header">
                <h1>Visualizer</h1>
            </div>
            <div className='array-container'>

                {valueArray.map((value, idx) => (
                    <div className='array-bar'
                        key={idx}
                        style={{ height: `${value}px` }}>
                    </div>))}
                <div className="button-container">
                    <center><button onClick={resetArray}>Generate New Array</button>
                        <button onClick={bubbleSort}>Bubble Sort</button>
                        <button onClick={mergeSort}>Merge Sort</button>
                        <button onClick={selectionSort}>Selection Sort</button>
                    </center>
                </div>
            </div>
        </React.Fragment>
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

