import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'; 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/dddd">dddd</Link>
      {/* 占位符。类似于窗口，展示组件的，类似vue的router-view */}
      <Outlet />
    </div>
  );
}

export default App
