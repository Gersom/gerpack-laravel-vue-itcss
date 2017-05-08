<template lang="pug">
  .HomeScreen(class="u-text-center")
    vue-presentation()
</template>

<script>
  import VuePresentation from 'App/shared/components/VuePresentation'

  export default {
    name: 'HomeScreen',
    components: {
      VuePresentation
    }
  }
</script>
