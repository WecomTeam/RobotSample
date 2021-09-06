<template>


<div class="app">
    <el-container class="wrap">
      <el-header class="header">
          <h1 class="logo"><img src="./assets/logo.svg" /><span class="title">群机器人代码示例</span></h1>
      </el-header>
      <el-container>
        
        <Robot></Robot>
      </el-container>
    </el-container>
  </div>
  
</template>

<script>

import Robot from './components/Robot.vue';


export default {
  name: 'App',
  components: {
    Robot
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}

.app {
  font-family:  Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;;
}
.wrap{
  height: 100%;
}
.header{
    display: flex;
    justify-content: space-between;    
    border-bottom: 1px solid #e7e7e7;
    align-items: center;
    box-sizing: content-box;
    background: #fff;
}

.logo{
    display: flex;
    align-items: center;
    font-weight: 600;
}
.logo img{
    width: 32px;
}
.logo .title{
    font-family:Avenir;
    color:#333;
    font-weight: 500;
    font-size: 20px;
    /* color:rgba(0,0,255,0.4); */
    letter-spacing: -0.5px;
    padding-left: 5px;
}
.el-textarea__inner{
  font-family: Arial, Helvetica, sans-serif;
}
</style>
