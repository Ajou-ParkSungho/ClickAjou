<template>
<transition name="main-fade">
  <div class="librarySeat">
    <div v-if="floor==3">
      <floor3 />
    </div>
    <div v-else-if="floor==4">
      <floor4 />
    </div>
  </div>
</transition>
</template>

<script>

import floor3 from "./f3";
import floor4 from "./f4";

export default {
  name: "libraryList", 
  data(){
    return {
      floor:this.$route.params.floor
    }
  },
  components: {
    floor3,
    floor4
  }
};

</script>

<style scoped>
  
</style>
