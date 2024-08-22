// 该文件是整个项目的入口文件
// 引入vue
import { createApp } from 'vue'
// 引入app组件，她是所有组件的父组件
import App from './App.vue'

// 穿件vue实例对象
createApp(App).mount('#app')

// vue2中：
// new Vue({
//   el:'#app',
//   render: h=>h(APP),
// })