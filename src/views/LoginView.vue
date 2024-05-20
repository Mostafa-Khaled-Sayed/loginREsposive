<template>
  <v-card class="mt-2">
    <v-window>
      <v-window-item>
        <v-row>
          <v-col
            cols="12"
            md="4"
            sm="12"
            lg="4"
            align="center"
            justify="center"
            class="bg-primary-color mt-3"
          >
            <div
              class="text-center"
              style="display: flex; align-items: center; height: 100%"
            >
              <v-card-text class="white--text">
                <h1 class="mb-6">
                Clever<span style="color: white">Docs</span>
                </h1>
                <h6>Empower Your Team<br />Elevate Your Result</h6>
              </v-card-text>
            </div>
          </v-col>

          <v-col
            cols="12"
            md="8"
            sm="12"
            lg="8"
            align="center"
            justify="center"
            class="mt-2 h-[100vh]"
            style="max-width: 95%"
          >
            <div class="d-flex justify-end align-start" style="height: 100px">
              <v-btn
                color="#F6F6F6"
                class="mt-1 mr-13 ml-13 translateButton"
                style="border-radius: 10px !important;"
                @click="toggleLanguage"
                dark
                tile
                >{{ currentLanguage === "ar" ? "English" : "عربي" }}</v-btn
              >
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
                    :error-messages="
                      v$.email && v$.email.$errors[0] ? v$.email.$errors[0].$message : ''
                    "
                    color="blue"
                    class="mt-6"
                    style="width: 100%; max-width: 375px"
                  ></v-text-field>
                  <v-text-field
                    variant="outlined"
                    :type="showPassword ? 'text' : 'password'"
                    :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                    :label="texts.passwordLabel"
                    :placeholder="texts.passwordPlaceholder"
                    v-model="state.password"
                    :error-messages="
                      v$.password && v$.password.$errors[0]
                        ? v$.password.$errors[0].$message
                        : ''
                    "
                    @click:append-inner="togglePasswordVisibility"
                    dense
                    color="blue"
                    class="mt-1"
                    style="width: 100%; max-width: 375px"
                  ></v-text-field>
                  <v-alert v-if="state.error" type="error" class="max-w-[370px] mt-6 mb-6" close-icon
                  outlined>
                    {{ currentLanguage === 'en' ? 'Username or password is incorrect. Please contact your enterprise\'s administrator if it continues.' : 'اسم المستخدم أو كلمة المرور غير صحيحة. يرجى الاتصال بمسؤول مؤسستك إذا استمر الأمر'}}
                  </v-alert>
                  
                  <v-btn
                    color="#1ED760"
                    class="mt-1 mr-1"
                    @click="loginToken"
                    style="
                      color: white;
                      width: 100%;
                      max-width: 375px;
                      border-radius: 10px !important;"
                    dark
                    block
                    tile
                    >{{ texts.loginButton }}</v-btn
                  >
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
import { mapActions, useStore } from "vuex";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import Result from 'postcss/lib/result';

export default {
  setup() {
    const state = reactive({
      password: "",
      email: "",
      error:false,
    });

    const rules = {
      email: { required, email },
      password: { required, minLength: minLength(6) },
    };
    const v$ = useVuelidate(rules, state);
    const showPassword = ref(false);
    const currentLanguage = ref(localStorage.getItem("language") || "ar");
    const texts = ref({});
    // const errors=ref(false);
    const router = useRouter();
    const store=useStore();
    const loginToken = async () => {
      v$.value.$validate();
      if (!v$.value.$error) {
        
         store.dispatch("login", {email: state.email,
          password: state.password}).then(
            result=>{
                !result? router.push("/"):'';
                state.error=result

        });
        
      }
    };
    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    };

    const toggleLanguage = () => {
      currentLanguage.value = currentLanguage.value === "ar" ? "en" : "ar";
      document.documentElement.setAttribute(
        "dir",
        currentLanguage.value === "ar" ? "rtl" : "ltr"
      );
      localStorage.setItem("language", currentLanguage.value);
      setTexts();
    };


    const setTexts = () => {
      if (currentLanguage.value === "ar") {
        texts.value = {
          welcome: "مرحبا بك",
          signIn: "سجل الدخول إلى حسابك",
          emailLabel: "البريد الإلكتروني",
          emailPlaceholder: "example@gmail.com",
          passwordLabel: "كلمة المرور",
          passwordPlaceholder: "******",
          loginButton: "تسجيل الدخول",
        };
      } else {
        texts.value = {
          welcome: "Welcome",
          signIn: "Sign in to your account",
          emailLabel: "Email",
          emailPlaceholder: "example@gmail.com",
          passwordLabel: "Password",
          passwordPlaceholder: "******",
          loginButton: "Login",
        };
      }
    };

    setTexts(); // Call setTexts initially to set texts based on the initial language

    return {
      state,
      v$,
      showPassword,
      currentLanguage,
      texts,
      togglePasswordVisibility,
      toggleLanguage,
      loginToken,
    };
  },
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
.translateButton{
    min-width: 36px;
    height: 36px; 
}
@media only screen and (max-width: 600px) {
  /* Styles for small screens */
  button {
    min-width: 200px;
    border-radius: 10px;
  }
}
</style>
