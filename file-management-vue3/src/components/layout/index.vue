<template>
    <div class="common-layout">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-aside width="200px" height="100%">
            <Aside />
        </el-aside>
        <el-container>
          <el-main>
            <Main />
          </el-main>
          <el-footer>
            <Footer />
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Main from './components/Main.vue';
import Aside from './components/Aside.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

// 导出
export default {
  name: 'Layout',
};

</script>