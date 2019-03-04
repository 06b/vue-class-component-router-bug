<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {

  async beforeRouteEnter (to: string, from: string, next: (to?: string)=> void): Promise<void> {
    alert("beforeRouteEnter");
    next();
  }

  async beforeRouteLeave (to: string, from: string, next: (to?: string)=> void): Promise<void> {
    alert("beforeRouteLeave");
    next();
  }

}
</script>
