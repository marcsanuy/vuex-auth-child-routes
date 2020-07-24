<template>
    <b-form @submit.prevent="~emit('login')">
        <b-form-group
            label="Email"
            description="Los datos son privados"
        >
            <b-form-input
                type="email"
                autocomplete="off"
                v-model="user.email"
                v-validate="'required|email'"
                name="email"
                placeholder="Introduce el email admin@vue.com"
            ></b-form-input>
            <b-form-invalid-feedback>
                {{ errrors.first('email')}}
            </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
            label="Password"
                    >
            <b-form-input
                type="password"
                autocomplete="off"
                v-model="user.password"
                v-validate="'required|min:6'"
                name="password"
                placeholder="Introduce el password @Password1"
            ></b-form-input>
            <b-form-invalid-feedback>
                {{ errrors.first('password')}}
            </b-form-invalid-feedback>
        </b-form-group>

        <b-button
            :disabled="errors.any() || ! user.password"
            type="submit"
            variant="primary"
        >
        Iniciar sesión
        
        </b-button>

    </b-form>    
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