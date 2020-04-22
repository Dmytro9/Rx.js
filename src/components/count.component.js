import React, { useState, useEffect } from "react";
import { from } from "rxjs";
import { filter, delay, map, mergeMap } from "rxjs/operators";

let numbersObservable = from([1, 2, 3, 4, 5]); // iterable
let squaredNumbers = numbersObservable.pipe(
  filter((n) => n > 2),
  mergeMap((n) => from([n]).pipe(delay(1000 * n))),
  map((n) => n * n)
);

// custom hook
const useObservable = (obsorvable, setter) => {
  useEffect(() => {
    let subscription = obsorvable.subscribe((result) => {
      setter(result);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [obsorvable, setter]);
};

// COMPONENT
function CountComponent() {
  const [currentNumber, setCurrentNumber] = useState(0);

  useObservable(squaredNumbers, setCurrentNumber);

  return (
    <>
      <span>{currentNumber}</span>
    </>
  );
}

export default CountComponent;
