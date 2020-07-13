import Vue from 'vue';
import VeeValidate, {Validator} from 'vee-validate'
import validatorEs from 'vee-validate/dist/locale/es'
Vue.use(VeeValidate, {
    fieldsBagName: 'veeFields'
})
Validetor.localize('es', validatorEs)