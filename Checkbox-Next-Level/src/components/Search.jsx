import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import results from "../data/results";
import { CheckIcon } from "./CheckIcon";
import { ContentType } from "./ContentType";
import { ModifiedAt } from "./ModifiedAt";
import { TaskListContainer } from "./TaskListButtonContainer";

export const Search = function () {
  const history = useHistory();
  const checkRef = useRef();
  let [selection, setSelection] = useState({});
  const [count, setCount] = useState(0);

  useEffect(() => {
    let obj = {};
    for (let i = 0; i < results.length; i++) {
      obj[i] = false;
    }
    setSelection(obj);
  }, []);
  const selectAll = () => {
    if (checkRef.current.checked) {
      let obj = {};
      for (let i = 0; i < results.length; i++) {
        obj[i] = true;
      }
      setSelection(obj);
    } else {
      let obj = {};
      for (let i = 0; i < results.length; i++) {
        obj[i] = false;
      }
      setSelection(obj);
      setCount(0);
    }
  };
  const checkOne = (index) => {
    if (selection[index] === false) {
      selection[index] = true;
      setCount((count) => count + 1);
    } else {
      selection[index] = false;
      setCount((count) => count - 1);
    }
  };
  return (
    <main>
      <TaskListContainer />
      <header>
        <button className="">Hide from Search</button>
        {count >= 2 ? (
          <input
            ref={checkRef}
            id={`select-all`}
            onClick={selectAll}
            tabIndex="0"
            type="checkbox"
            indeterminate="true"
          />
        ) : (
          <input
            ref={checkRef}
            id={`select-all`}
            onClick={selectAll}
            tabIndex="0"
            type="checkbox"
            indeterminate="false"
          />
        )}

        <label htmlFor={`select-all`} className="checkbox"></label>
        <button className="previous">Previous Page</button>
        <button className="next">Next Page</button>
      </header>
      <ul>
        {results.map((result, index) => {
          return (
            <li key={index} className={selection[index] ? "selected" : ""}>
              <input
                id={`search-${index}`}
                tabIndex="0"
                type="checkbox"
                checked={selection[index]}
                onClick={() => checkOne(index)}
              />
              <label htmlFor={`search-${index}`} className="checkbox"></label>
              <div className="thumbnail">
                <img src="https://www.thehairpin.com/wp-content/uploads/2011/01/0dVOZPKzES40OrMqJ.jpg" />
              </div>

              <div className="info">
                <h3>{result.hed || result.name}</h3>
                <span className="publish-status">
                  <span className="icon">
                    <CheckIcon />
                  </span>
                  Published
                </span>
                <span className="type">
                  <ContentType collection={result.collection} />
                </span>
                {result.channel && (
                  <span className="channel">{result.channel}</span>
                )}
                <span className="modified-at">
                  <ModifiedAt date={new Date(Date.parse(result.modifiedAt))} />
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
