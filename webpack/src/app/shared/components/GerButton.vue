<template lang="pug">
  button.c-ger-button(
                  :class="{ 'c-ger-button--default': modifierDefault, 'c-ger-button--transparent': modifierTransparent, 'c-ger-button--width': modifierWidth }",
                  :type="type",
                  @click="clickButton"
                  )
    i.u-icon(v-if="iconText", aria-hidden="true") {{ iconText }}
    span {{ text }}
</template>

<script>
  export default {
    props: {
      iconText: {
        type: [String, Boolean],
        default: false
      },
      modifierDefault: {
        type: Boolean,
        default: false
      },
      modifierTransparent: {
        type: Boolean,
        default: false
      },
      modifierWidth: {
        type: Boolean,
        default: false
      },
      text: {
        type: String,
        required: true,
        default: '¡Hola! Soy un boton'
      },
      type: {
        type: String,
        default: 'button'
      }
    },
    methods: {
      clickButton () {
        this.$emit('click')
      }
    }
  }
</script>
