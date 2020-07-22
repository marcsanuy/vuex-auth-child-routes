<template>
    
</template>

<script>
    export default {
        props: {
            user:{
                type: Object,
                required: true,
                validator: user => {
                   if ( ! user.hasOwnProperty('email') || ! user.hasOwnProperty('password')) {
                       console.warn('Usuario no válido')
                       return false
                   }
                   return true
                }
            }
        }
    }
</script>