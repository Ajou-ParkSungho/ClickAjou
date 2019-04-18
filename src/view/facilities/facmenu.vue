<template>
  <transition name="slide">
    <div class="facmenu">
      <router-link to="/menu/facmenu/facplaceFirst"><img src="../../assets/facilities/placeFirst.png"><br>장소 먼저</router-link><br><br><br>
      <router-link to="/menu/facmenu/factimeFirst"><img src="../../assets/facilities/timeFirst.png"><br>시간 먼저</router-link>
    </div>
  </transition>
</template>

<script>

export default {
  name: "FacMenu"
};

</script>

<style scoped>


</style>
