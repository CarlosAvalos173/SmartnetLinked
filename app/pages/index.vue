<template>
  <v-app id="inspire">
    <NavLogin />

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="
                            text-center
                            display-2
                            black--text
                            text--accent-3
                          "
                        >
                          Sign in to SmartNet
                        </h1>

                        <h4 class="text-center mt-4">
                          Ensure your email for registration
                        </h4>
                        <v-form ref="form">
                          <v-text-field
                            label="Email"
                            name="Email"
                            type="email"
                            prepend-icon="email"
                            color="blue-grey darken-3"
                            v-model="email"
                            :rules="[rules.required, rules.email]"
                          />

                          <v-text-field
                            id="password"
                            label="Password"
                            name="password"
                            prepend-icon="lock"
                            type="password"
                            color="blue-grey darken-3"
                            v-model="password"
                            :rules="[rules.required]"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn
                          rounded
                          color="blue-grey darken-2"
                          dark
                          @click="login"
                          >SIGN IN</v-btn
                        >
                        <br /><br /><br />
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="blue-grey darken-1">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Hello, Friend!</h1>
                        <h5 class="text-center">
                          Enter your personal details and start journay with us
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++"
                          >SIGN UP</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="blue-grey darken-1">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Welcome Back!</h1>
                        <h5 class="text-center">
                          To Keep connected with us please login with your
                          personnel info
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step--"
                          >Sign in</v-btn
                        >
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="
                            text-center
                            display-2
                            black--text
                            text--accent-3
                          "
                        >
                          Create Account
                        </h1>

                        <h4 class="text-center mt-4">
                          Ensure your email for registration
                        </h4>
                        <v-form ref="form">
                          <v-text-field
                            id="first_name"
                            label="First Name"
                            name="FirstName"
                            prepend-icon="person"
                            type="text"
                            color="blue-grey darken-1"
                            v-model="first_name"
                            :rules="[rules.required]"
                          />
                          <v-text-field
                            id="last_name"
                            label="Last Name"
                            name="LastName"
                            prepend-icon="person"
                            type="text"
                            color="blue-grey darken-1"
                            v-model="last_name"
                            :rules="[rules.required]"
                          />
                          <v-text-field
                            label="Email"
                            name="Email"
                            type="email"
                            color="blue-grey darken-3"
                            prepend-icon="email"
                            v-model="email_create"
                            :rules="[rules.required, rules.email]"
                          />

                          <v-text-field
                            id="password"
                            label="Password"
                            name="password"
                            prepend-icon="lock"
                            type="password"
                            v-model="password_create"
                            color="blue-grey darken-1"
                            :rules="[rules.required]"
                          />
                          <v-text-field
                            id="phone"
                            label="Phone"
                            name="phone"
                            prepend-icon="phone"
                            type="number"
                            color="blue-grey darken-1"
                            :rules="[rules.required]"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5">
                        <v-btn
                          rounded
                          color="blue-grey darken-2"
                          dark
                          @click="register"
                          >SIGN UP</v-btn
                        >
                        <br /><br /><br />
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <Footer />
    <ScrollTop />
  </v-app>
</template>

<script>
export default {
  methods: {
    async login() {
      if (!this.$refs.form.validate()) return;

      this.$router.push("/home");
    },
    async register() {
      if (!this.$refs.form.validate()) return;
      this.$router.push("#");
    },
  },
  data: () => ({
    step: 1,
    rules: {
      required: (v) => !!v || "Required",
      email: (v) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(v) || "Invalid e-mail.";
      },
    },
  }),
  props: {
    source: String,
  },
};
</script>