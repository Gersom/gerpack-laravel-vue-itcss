<template lang="pug">
  .c-ger-user-config
    .c-ger-user-config__front
      figure
        img(:src="userProfile.image200px")
      span {{ userProfile.firstName }}
    ul.c-ger-user-config__config
      p Configuración
      //- li.u-flex.u-align-center
      //-   router-link(:to="{ name: 'AdminProfile' }")
      //-     i.u-icon user
      //-     span Editar Cuenta
      li(@click="signOut")
        i.u-icon lock
        span Cerrar Sesión
</template>

<script>
  export default {
    methods: {
      signOut () {
        // singOut method function
      }
    }
  }
</script>
