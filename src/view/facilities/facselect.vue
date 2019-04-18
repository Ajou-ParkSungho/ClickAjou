<template>
<transition name="main-fade">
  <div class="section">
    <show-section />
  </div>
</transition>
</template>

<script>

import ShowSection from "../../components/ShowSection";

export default {
  name: "FacSelect",
  components: {
    ShowSection
  }
};

</script>

<style>


</style>
