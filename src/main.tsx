
import ReactDOM from 'react-dom/client'
// 初始样式
import 'reset-css'
// 框架样式
import '@/assets/style/global.scss'
// import Router from './router'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
// 状态管理
import { Provider } from 'react-redux'
import store from '@/store'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
