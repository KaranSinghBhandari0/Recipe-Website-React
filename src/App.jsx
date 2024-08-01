import './App.css'
import Content from './components/Content/Content';
import Navbar from './components/Navbar/Navbar'
import Loading from './components/Loading/Loading'
import { useState, useEffect } from 'react';

function App() {

  const [value, setValue] = useState("");
  const [dish, setDish] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setValue(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setDish(value);
    setValue("");
    setLoading(true);
  }

  useEffect(() => {
    if (loading) {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); // Simulate a delay of 500ms for the loading state
        return () => clearTimeout(timer);
    }
  });

  return (
    <>
    <Navbar value={value} onChange={onChange} onSubmit={onSubmit} />
    {!loading && <Content dish={dish} />}
    {loading && <Loading />}
    </>
  )
}

export default App
