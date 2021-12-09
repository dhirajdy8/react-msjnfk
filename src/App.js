import React, { Fragment, useRef, useEffect, useState } from 'react';
function App() {
  // Creating a ref object using useRef hook
  const focusPoint = useRef('null');
  const [count, setCount] = useState(0);
  const onClickHandler = () => {
    focusPoint.current.value =
      'The quick brown fox jumps over the lazy dog' + count;
    focusPoint.current.focus();
    setCount((count) => count + 1);
  };
  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <Fragment>
      <div>
        <button onClick={onClickHandler}>ACTION</button>
      </div>
      <label>
        Click on the action button to focus and populate the text. {count}
      </label>
      <br />
      <textarea ref={focusPoint} />
    </Fragment>
  );
}

export default App;
