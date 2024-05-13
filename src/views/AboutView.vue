
<template >
  <v-container fluid>
    <v-row  align="center" justify="center" >
      <v-col  cols="12" sm="12">
        <v-card class="elevation-6 mt-10">
          <v-window class="h-[90vh]"  >
            <v-window-item class="h-[100%]" :value="1" style="border:solid 3px blue;">
              <v-row class="h-[100%] "  >  

                <v-col cols="12" sm="4" align="center"  justify="center" class="bg-primary-color mt-2 h-[100%]" >
                  <div style="display:flex;align-items:center; height:100%;" >
                    <v-card-text class="white--text w-100" >
                      <h1 class="text-center mb-6 w-[223px] h-[32px]">Clever<span style="color:white;">Docs</span></h1>
                      <h6 class="text-center">Empower Your Team <br/>Elevate Your Result </h6>
                    </v-card-text>
                  </div>
                </v-col>
                <v-col cols="12" class="mt-24" sm="8"  align="center"  >
                  <v-card-text class="mt-12">
                    <h1 class="text-center">Welcome</h1>
                    <p class="text-center">Sign in to your account</p>
                    <v-row align="center" >
                      <v-col cols="12" >
                        <v-text-field 
                          variant="outlined"
                          type="email"
                          clearable
                          label="Email"
                          placeholder="example@gmail.com"
                          outlined
                          dense
                          color="blue"
                          class="mt-6 bg-white"
                          style="width: 378px;"
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
                          class="mt-1 bg-white"
                          style="width: 378px;" >
                        </v-text-field>
                        <v-btn color="#1ED760" class="mt-1  p-70" dark block tile>Login</v-btn> <!-- تحديد العرض بقيمة نسبية -->
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
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 54px */
  
}

p {
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 36px */
}

h6 {
  color: white;
font-size: 28px;
font-style: normal;
font-weight: 500;
line-height: 150%; /* 42px */}

@media (max-width:960px) {
  .v-window-item .v-row:first-child{
    display: flex;
    flex-direction:column-reverse;
    border:solid 12px red;


  }
}
</style>



