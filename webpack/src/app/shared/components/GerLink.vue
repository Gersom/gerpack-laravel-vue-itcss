<template lang="pug">
  span.c-ger-link(:class="{ 'c-ger-link--primary': modifierPrimary, 'c-ger-link--underline': modifierUnderline }")
    router-link(
                :to="routerLink",
                v-if="routerLink"
                ) {{ text }}
    a(
      :href="href",
      target="_blank",
      v-if="href"
      ) {{ text }}
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        required: true,
        default: '¡Hola! Soy un enlace'
      },
      routerLink: {
        type: [String, Boolean, Object],
        default: false
      },
      href: {
        type: [String, Boolean],
        default: false
      },
      modifierPrimary: {
        type: Boolean,
        default: false
      },
      modifierUnderline: {
        type: Boolean,
        default: true
      }
    }
  }
</script>
