<template>
  <el-container class="layout-default">
    <el-header height='197px'>
      <my-header></my-header>
    </el-header>
    <el-main>
      <keep-alive>
        <nuxt />
      </keep-alive>
    </el-main>
    <el-footer height='auto'>
      <my-footer />
    </el-footer>
  </el-container>
</template>

<script>
import MyHeader from '@/components/public/header/Index.vue'
import MyFooter from '@/components/public/footer/Index.vue'
export default {
  components: {
    MyHeader,
    MyFooter
  }
};
</script>

<style lang='scss'>
</style>