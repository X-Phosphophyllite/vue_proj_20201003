import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'


Vue.config.productionTip = false
Vue.use(ElementUI)


new Vue({
  router,
  store,
  render: h => h(App)

}).$mount('#app')


//axios old way
//
// axios({
//   url:'http://123.207.32.32:8000/home/data',
//   method:'get',
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res => {
//   console.log(res);
// })
//
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000
//
// axios.all([axios({
//   url:'/home/multidata'
// }),axios({
//   url:'/home/data'
// })]).then(axios.spread((res1,res2) => {
//   console.log(res1);
//   console.log(res2);
// }))


import {request} from '../network/request'

request({
  url:'/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})




