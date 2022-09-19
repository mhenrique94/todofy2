<template>
  <div>
    <v-main class="mx-8 mb-12 adjust-footer">
      <router-view />
      <v-btn
        fab
        large
        class="zIndex ma-8 pink white--text lighten-1"
        fixed
        bottom
        right
        @click="scrollToTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-main>
  </div>
</template>

<script>
export default {
  name: "BaseLayout",
  props: ["loggedUser", "loggedUsername"],
  // data() {
  //   return {
  //     //loggedUsername: this.getUserInfo(),
  //     show: false,
  //   };
  // },
  computed: {
    show() {
      if (this.loggedUser) {
        return true;
      }
      return false;
    },
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    // getUserInfo() {
    //   let usertInfo = JSON.parse(
    //     window.localStorage.getItem("loggedUserInfos")
    //   );
    //   console.log("base=== get user foi chamado", usertInfo);
    //   return (
    //     usertInfo.username.charAt(0).toUpperCase() + usertInfo.username.slice(1)
    //   );
    // },
  },
  // created() {
  //   console.log("base=== created");
  //   this.getUser();
  //   this.exhibs();
  // },
};
</script>

<style scoped>
.adjust-footer {
  min-height: calc(100vh - 161px - 48px);
}

.zIndex {
  z-index: 2;
}
</style>
