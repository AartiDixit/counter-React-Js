import { useState, useEffect } from 'react'
import './App.css';
import CounterComponent from './Components/CounterComponent';


function App() {
	const [count, setCount] = useState(0)
	const [error, setError] = useState("")
    useEffect(() =>{
		console.log(count);
	},[count])
	return (
		<div className="App">
<CounterComponent count={count} setCount={setCount} error={error} setError={setError}/>
		</div>
	);
}

export default App;
