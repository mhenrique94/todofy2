<template>
  <div>
    <v-main class="mx-4 mb-12 adjust-footer">
      <router-view />
      <v-btn
        fab
        large
        class="zIndex ma-8 pink white--text lighten-1"
        fixed
        bottom
        right
        v-show="loggedUser"
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
  },
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
