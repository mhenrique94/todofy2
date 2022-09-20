<template>
  <v-container>
    <!-- snackbar -->
    <v-snackbar v-model="snackbar.show" :value="true" absolute left shaped top>
      {{ snackbar.message }}
    </v-snackbar>
    <v-row class="text-center">
      <v-col md="6" offset-md="3">
        <v-card class="pa-4 rounded mt-6" outlined tile>
          <h2>Login</h2>
          <v-form v-model="valid">
            <v-text-field
              v-model="username"
              label="Usuário"
              required
              outlined
              append-icon="fa-user"
              v-on:keyup.enter="signup"
            ></v-text-field>

            <v-text-field
              v-model="name"
              label="Nome"
              required
              outlined
              append-icon="fa-user"
              v-on:keyup.enter="signup"
            ></v-text-field>

            <v-text-field
              v-model="email"
              label="Email"
              type="email"
              required
              outlined
              append-icon="fa-envelope"
              v-on:keyup.enter="signup"
            ></v-text-field>

            <v-text-field
              v-model="password"
              label="Senha"
              type="password"
              required
              outlined
              append-icon="fa-key"
              v-on:keyup.enter="signup"
            ></v-text-field>

            <v-btn
              :loading="loading"
              :disabled="!valid"
              color="secondary"
              class="mr-4"
              x-large
              block
              @click="signup"
              >Registrar <v-icon class="pl-3">fa-arrow-right</v-icon></v-btn
            >
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AuthApi from "@/api/auth.api.js";

export default {
  data: () => {
    return {
      loading: false,
      valid: false,
      username: "",
      name: "",
      email: "",
      password: "",
      snackbar: {
        show: false,
        message: "",
      },
    };
  },
  methods: {
    signup() {
      this.loading = true;
      AuthApi.signup(this.username, this.name, this.email, this.password)
        .then((user) => {
          console.log("login ok", user);
          this.$router.push({ name: "home" });
        })
        .catch((error) => {
          console.log("Deu erro: ", error);
          this.snackbar.message = "Usuario ou senha invalida";
          this.snackbar.show = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
