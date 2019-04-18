<template>
  <transition name="slide">
    <div class="facplaceFirst">
      <h2>예약하실 장소의 위치를 클릭하여 주세요.</h2> <br />
      <google-map />
    </div>
  </transition>
</template>

<script>
import GoogleMap from "../../components/GoogleMap";

export default {
  name: "FacplaceFirst",
  components: {
    GoogleMap
  }
};

</script>

<style>
  
</style>
