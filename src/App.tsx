import { useState } from 'react'
import { useRoutes, Link } from 'react-router-dom';
import router from './router';

function App() {
  const [count, setCount] = useState(0)
  const outlat = useRoutes(router);

  return (
    <div className="App">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/dddd">dddd</Link>
      {/* 占位符。类似于窗口，展示组件的，类似vue的router-view */}
      {/* <Outlet /> */}
      {outlat}
    </div>
  );
}

export default App
