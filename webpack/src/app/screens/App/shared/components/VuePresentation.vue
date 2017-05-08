<template lang="pug">
  .c-vue-presentation
    h1 {{ msg }}
    h2 Essential Links

    ul
      li: <a href="https://vuejs.org" target="_blank">Core Docs</a>
      li: <a href="https://forum.vuejs.org" target="_blank">Forum</a>
      li: <a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a>
      li: <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
      <br>
      li: <a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a>

    h2 Ecosystem
    ul
      li: <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
      li: <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
      li: <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
      li: <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
