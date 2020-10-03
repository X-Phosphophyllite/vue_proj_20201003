<template>
  <el-menu-item :index="index">
    <i :class="icon_class"></i>
    <span :slot="slot_name">{{title}}</span>
  </el-menu-item>
</template>

<script>
export default {
  name: "clean_m_item",
  props:{
    index:{
      type:String,
      default:'1'
    },
    icon_class:{
      type:String,
      default:''
    },
    slot_name:{
      type:String,
      default:'title'
    },
    title:{
      type:String,
      default:'导航'
    }
  },
}
</script>

<style scoped>

</style>