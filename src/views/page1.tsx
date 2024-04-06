import { Input, Button } from "antd";
import { ChangeEvent, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import store from '@/store'

type RootState = ReturnType<typeof store.getState>;

function View() {
  const [userName, setUserName] = useState('')
  // TS 提供了 ReturnType
  const { num } = useSelector((state: RootState)=> ({
    num: state.num
  }))
  const dispatch = useDispatch()

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setUserName(e.target.value);
  };

  const changeNum = () => {
    // dispatch({
    //   type: "add1",
    //   val: num + 1
    // });
    dispatch({
      type: "add2",
      val: num + 1,
    });
  }

  return (
    <div className="home">
      <Input placeholder="input" value={userName} onChange={change} />
      <div>{num}</div>
      <Button onClick={changeNum}></Button>
    </div>
  );
}

export default View;