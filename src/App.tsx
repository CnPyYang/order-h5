import { useState } from 'react'
import Comp1 from '@/components/Comp1/index'
import Comp2 from "@/components/Comp2/index";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Comp1 />
      <Comp2 />
    </div>
  );
}

export default App
