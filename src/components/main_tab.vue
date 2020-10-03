<template>
  <el-row  class="tac">
    <el-col :span="4">
      <el-menu
          default-active="2"
          class="el-menu">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航1</span>
          </template>
          <el-menu-item-group title="test">
            <el-menu-item index="1-1">LWA</el-menu-item>
            <el-menu-item index="1-2">其它</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <clean_m_item index="2" icon_class="el-icon-menu" title="导航2"/>

        <clean_m_item index="3" icon_class="el-icon-document" title="导航3"/>

        <clean_m_item index="4" icon_class="el-icon-setting" title="导航4"/>

      </el-menu>
    </el-col>
    <h1>{{$store.state.name}}</h1>
  </el-row>
</template>

<script>
import clean_m_item from "./clean_m_item";
export default {
  name: "main_tab",
  components:{
    clean_m_item
  }
}
</script>

<style scoped>

</style>