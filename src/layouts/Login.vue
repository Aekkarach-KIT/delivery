<template>
  <q-layout view="hHh Lpr lFf">
    <q-page-container class="bg-white">
      <q-page padding class="row items-center justify-center">
        <div class="col-4">
          <q-img
            placeholder-src="../assets/images/loginpage.jpg.jpg"
            src="../assets/images/loginpage.jpg.jpg"
            spinner-color="white"
          ></q-img>
        </div>

        <div class="col-5">
          <div
            class="text-h6 q-pb-md text-blue-8 text-center text-weight-bolder"
          >
            Back Office
          </div>

          <q-input
            filled
            v-model="name"
            label="Username"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type Username',
            ]"
          />

          <q-input
            v-model="password"
            filled
            :type="isPwd ? 'password' : 'text'"
            label="Password"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>

          <div class="col">
            <template>
              <q-btn
                label="Login"
                type="submit"
                color="positive"
                class="btn-login"
              />
            </template>

            <q-btn
              label="Reset"
              type="reset"
              color="negative"
              class="btn-reset"
            />
          </div>
        </div>
        <div class="q-pa-md">
          <q-btn color="red" @click="showLoading" label="Show Loading" />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { route } from "quasar/wrappers";
import routes from "src/router/routes";
import router from "src/router";
const admin = { name: "admin", password: "1234" };
import { QSpinnerFacebook, Quasar, Loading } from "quasar";

const routepath = {
  path: "/",
  component: () => import("layouts/MainLayout.vue"),
};

export default {
  data() {
    return {
      name: "",
      password: "",
      isPwd: true,
    };
  },

  methods: {
    showLoading() {
      this.$q.loading.show({
        message:
          'Some important <b>process</b> is in progress.<br/><span class="text-orange text-weight-bold">Hang on...</span>',
      });

      // hiding in 3s
      this.timer = setTimeout(() => {
        this.$q.loading.hide();
        this.timer = void 0;
      }, 3000);
    },
  },

  beforeDestroy() {
    if (this.timer !== void 0) {
      clearTimeout(this.timer);
      this.$q.loading.hide();
    }
  },
};
</script>

<style scoped>
.col-4 {
  width: 30%;
}
.col-5 {
  width: 30%;
  position: relative;
}
.btn-login {
  width: 45%;
  height: 0.5in;
  text-align: center;
}
.btn-reset {
  width: 45%;
  left: 10%;
  height: 0.5in;
  text-align: center;
}
@media only screen and (max-width: 718px) {
  /* For mobile phones: */
  [class*="col-"] {
    width: 100%;
  }
  .btn-login {
    width: 80%;
    padding: 3px;
    text-align: center;
    left: 10%;
  }
  .btn-reset {
    width: 80%;
    padding: 3px;
    left: 10%;
    text-align: center;
    margin-top: 10px;
  }
}
</style>
