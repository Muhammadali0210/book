<template>
  <RouterLink to="/"></RouterLink>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
export default{
  data() {
    return {
    }
  },
  methods: {
    activeTheme(){
      this.$store.commit('colorTheme')  
    },
    uzLanguage(){
      this.$store.commit('uzLanguage')
    },
  },
  mounted() {
    this.activeTheme(),
    this.uzLanguage()
  },
}
</script>

<style scoped>

</style>
