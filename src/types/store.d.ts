// import store from '@/store'

// 类型声明 文件 不要直接使用引入import ... from ...;  使用 import('@/store')
type RootState = ReturnType<typeof import('@/store/index').getState>;

interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: function
}