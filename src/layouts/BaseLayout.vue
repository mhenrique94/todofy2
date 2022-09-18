<template>
  <div>
    <v-app-bar app color="#fb2784">
      <Navbar />
    </v-app-bar>
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
        ><v-icon>mdi-arrow-up</v-icon></v-btn
      >
      <Calendar />
    </v-main>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Calendar from "@/components/Calendar.vue";

export default {
  name: "BaseLayout",
  components: {
    Navbar,
    Calendar,
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
