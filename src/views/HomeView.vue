<template>
        <v-card class="mt-2">
          <v-window>
            <v-window-item>
              <v-row>
                <v-col  cols="12" md="4" sm="12" lg="4" align="center" justify="center" class="bg-primary-color mt-3">
                  <div class="text-center" style="display:flex;align-items:center; height:100%;">
                    <v-card-text class="white--text">
                      <h1 class="mb-6">{{ texts.title }}<span style="color: white;">{{ texts.subtitle }}</span></h1>
                      <h6>{{ texts.tagline1 }} <br/>{{ texts.tagline2 }}</h6>
                    </v-card-text>
                  </div>
                </v-col> 
                
                <v-col cols="12" md="8" sm="12" lg="8" align="center" justify="center" class="mt-2 h-[100vh]" style="max-width: 95%;" >
                  <div class="d-flex justify-end align-start" style="height: 100px;">
                    <v-btn color="#1ED760" class="mt-1 mr-1" @click="toggleLanguage" dark tile>{{ currentLanguage === "ar" ?   "عربي":"English" }}</v-btn>
                  </div>
                  
                  <v-card-text class="mt-12">
                    <h1 class="text-center">{{ texts.welcome }}</h1>
                    <p class="text-center">{{ texts.signIn }}</p>
                    <v-row align="center">
                      <v-col cols="12">
                        <v-text-field
                          variant="outlined"
                          type="email"
                          clearable
                          :label="texts.emailLabel"
                          :placeholder="texts.emailPlaceholder"
                          outlined
                          dense
                          v-model="state.email"
                          :error-messages="v$.email && v$.email.$errors[0] ? v$.email.$errors[0].$message : ''"
                          color="blue"
                          class="mt-6"
                          style="width: 100%; max-width: 375px;"
                        ></v-text-field>
                        <v-text-field
                          variant="outlined"
                          :type="showPassword ? 'text' : 'password'"
                          :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                          :label="texts.passwordLabel"
                          :placeholder="texts.passwordPlaceholder"
                          
                          v-model="state.password"
                          :error-messages="v$.password && v$.password.$errors[0] ? v$.password.$errors[0].$message : ''"
                          @click:append-inner="togglePasswordVisibility"

                          dense
                          color="blue"
                          class="mt-1"
                          style="width: 100%; max-width: 375px;"
                        ></v-text-field>
                        <v-btn color="#1ED760" class="mt-1 mr-1" @click="loginToken" style="color:white;" dark block tile>{{ texts.loginButton }}</v-btn>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      
</template>

<script>
import { mapState } from 'vuex';
import { useVuelidate } from '@vuelidate/core'
import { required, email,minLength } from '@vuelidate/validators'
import { computed, reactive } from 'vue';
import { rule } from 'postcss';
export default {
  setup(){
    const state=reactive({
      
      password: '',
      email:'',
      showPassword: false,
      currentLanguage: localStorage.getItem('language') || 'ar', // default to 'ar'
      texts: {}
    });
    const rules=computed(()=>{
      return { email:{required,email},
      password:{required,minLength:minLength(6)}
    }
    });
    const v$=useVuelidate(rules,state)
    return {
      v$,state
    }
  },
  mounted() {
    this.setTexts();
    document.documentElement.setAttribute('dir', this.currentLanguage === 'ar' ? 'rtl' : 'ltr');
  },
  computed:{
    ...mapState('auth',{

    }),
  },
  methods: {

    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === 'ar' ? 'en' : 'ar';
      document.documentElement.setAttribute('dir', this.currentLanguage === 'ar' ? 'rtl' : 'ltr');
      localStorage.setItem('language', this.currentLanguage);
      this.setTexts();
    },
    loginToken() {
      //check the validations 
      this.v$.$validate();
      if(!this.v$.$error){

      }

    },
    setTexts() {
      if (this.currentLanguage === 'ar') {
        this.texts = {
          title: 'مستندات',
          subtitle: 'ذكية',
          tagline1: 'تعزيز فريقك',
          tagline2: 'رفع نتائجك',
          welcome: 'مرحبا',
          signIn: 'سجل الدخول إلى حسابك',
          emailLabel: 'البريد الإلكتروني',
          emailPlaceholder: 'example@gmail.com',
          passwordLabel: 'كلمة المرور',
          passwordPlaceholder: '******',
          loginButton: 'تسجيل الدخول'
        };
      } else {
        this.texts = {
          title: 'Clever',
          subtitle: 'Docs',
          tagline1: 'Empower Your Team',
          tagline2: 'Elevate Your Result',
          welcome: 'Welcome',
          signIn: 'Sign in to your account',
          emailLabel: 'Email',
          emailPlaceholder: 'example@gmail.com',
          passwordLabel: 'Password',
          passwordPlaceholder: '******',
          loginButton: 'Login'
        };
      }
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.2;
}

p {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.2;
}

h6 {
  color: white;
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 1.2;
}
button {
  min-width: 350px;
}
@media only screen and (max-width: 600px) {
  /* Styles for small screens */
  button {
    min-width: 200px;
    border-radius: 50%;
  }
}
</style>
