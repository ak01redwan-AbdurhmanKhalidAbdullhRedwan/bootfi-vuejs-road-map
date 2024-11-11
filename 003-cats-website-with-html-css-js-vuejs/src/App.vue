<template>
   <div class="container">
     <MainHeader />
     <MainContent />
     <DecorativeCatImg />
   </div>
</template>

<script>
import '@/assets/style/style.css'
import MainHeader from './components/MainHeader.vue';
import MainContent from './components/MainContent.vue';
import DecorativeCatImg from './components/DecorativeCatImg.vue';

export default {
  name: 'App',
  components: {
    MainHeader,
    MainContent,
    DecorativeCatImg
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
