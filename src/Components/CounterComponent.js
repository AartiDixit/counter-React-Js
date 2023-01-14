const CounterComponent = ({ count, setCount, error, setError }) => {
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };
  const message = ()=>{
	if(count === 0){
		setError("Cannot go below 0")
	}
  }
  const reset = () => {
    setCount(0);
  };
  return (
    <div className="container">
        <p className="heading">Counter using Reract</p>
        <div className="text">Your Current Count is : {count}</div>
       {error && <div className="error">Error : {error} </div>}
        <div className="btn">
          <button onClick={increment} className="btn1">
            Increment
          </button>
          <button onClick={()=>{
			decrement()
			message()
		  }} className="btn1">
            Decrement
          </button>
          {count>10 && (
            <button onClick={reset} className="btn2">
              GO BACK TO 0
            </button>
          )}
        </div>
    </div>
  );
};

export default CounterComponent;
