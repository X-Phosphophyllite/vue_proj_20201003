<template>
  <div>
    <main_tab></main_tab>
    <h1>{{my_msg}}</h1>
    <el-button @click="call_call_back">click me</el-button>
  </div>
</template>

<script>
import main_tab from './components/main_tab'
import store from './store'
import {call_back} from "../network/request";

export default {
  name: 'app',
  components: {
    main_tab
  },
  data(){
    return{
      my_msg:1
    }
  },
  methods:{
    increment(){
      this.my_msg++
    },
    call_call_back(){
      call_back("im calling call back from App.vue",this.set_msg)
    },
    set_msg(new_msg){
      this.my_msg=new_msg
    }
  }
}
</script>

<style>

</style>
