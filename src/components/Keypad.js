// import React, { useEffect, useState } from "react";
import { letters } from "../data";
export default function Keypad({ usedKeys }) {
  // const [letters, setLetters] = useState(null);

  // useEffect(() => {
  //   fetch("http://localhost:3001/letters")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setLetters(json);
  //     });
  // }, []);
  const letter = letters;
  return (
    <div className="keypad">
      {letter &&
        letter.map((l) => {
          const color = usedKeys[l.key];
          return (
            <div key={l.key} className={color}>
              {l.key}
            </div>
          );
        })}
    </div>
  );
}
