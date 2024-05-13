<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-card class="elevation-6 mt-10">
          <v-window>
            <v-window-item>
              <v-row>
                <v-col cols="12" md="6" sm="12" lg="6" align="center" justify="center" class="bg-primary-color mt-3">
                  <div class="text-center" style="display:flex;align-items:center; height:100%;">
                    <v-card-text class="white--text">
                      <h1 class="mb-6">Clever<span style="color: white;">Docs</span></h1>
                      <h6>Empower Your Team <br/>Elevate Your Result</h6>
                    </v-card-text>
                  </div>
                </v-col>
                <v-col cols="12" md="6" sm="12" lg="6" align="center"  justify="center"  class="mt-24 h-[80vh]" style="max-width: 95%;">
                  <v-card-text class="mt-12">
                    <h1 class="text-center">Welcome</h1>
                    <p class="text-center">Sign in to your account</p>
                    <v-row align="center">
                      <v-col cols="12">
                        <v-text-field
                          variant="outlined"
                          type="email"
                          clearable
                          label="Email"
                          placeholder="example@gmail.com"
                          outlined
                          dense
                          color="blue"
                          class="mt-6"
                          style="width: 100%; max-width: 375px;"
                        ></v-text-field>
                        <v-text-field
                          variant="outlined"
                          :type="showPassword ? 'text' : 'password'"
                          :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                          @click:append-inner="togglePasswordVisibility"
                          label="Password"
                          placeholder="******"
                          outlined
                          dense
                          color="blue"
                          class="mt-1"
                          style="width: 100%; max-width: 375px;" 
                        ></v-text-field>
                        <v-btn color="#1ED760" class="mt-1 mr-1" dark block tile>Login</v-btn>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      showPassword: false
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
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
    min-width:200px;
  }
}

</style>
