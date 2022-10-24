<template>
  <el-container>
    <el-header>
      <AppHeaders></AppHeaders>
    </el-header>
    <el-container>
      <el-aside width="200px">AppSide
        <AppSide></AppSide>
      </el-aside>
      <el-main>
        <AppMain></AppMain>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppHeaders from '@/layout/AppHeaders/AppHeaders'
import AppMain from '@/layout/AppMain/AppMain'
import AppSide from '@/layout/AppSide/AppSide'

export default {
  name: 'index',
  components: {
    AppHeaders,
    AppMain,
    AppSide
  }
}
</script>

<style lang="scss" scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
