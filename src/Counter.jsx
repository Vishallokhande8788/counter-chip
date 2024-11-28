import { useState } from "react";

const Counter = () => {
  let [counter, updateCounter] = useState(0);

  // let stateValue = stateSeAayiHuiValue[0];
  // const updateKarneWalaFunction = stateSeAayiHuiValue[1];

  function handleClick() {
    updateCounter(counter + 1);
  }

  function handleDecrement() {
    updateCounter(counter - 1);
  }

  return (
    <div className="flex items-center justify-center h-40 w-70 h-50 border-2 border-black rounded  mainbox center-div container mx-auto m-20 bg-pink-200">
      <button
        className="bg-blue-500 text-white p-2 rounded-md mr-2 w-32 h-10"
        onClick={handleClick}
      >
        Increment
      </button>
      <p>Count: {counter}</p>
      <button
        className="bg-blue-500 text-white p-2 rounded-md ml-2 w-32 h-10"
        onClick={handleDecrement}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;


