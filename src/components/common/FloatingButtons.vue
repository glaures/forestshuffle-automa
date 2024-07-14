<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: "FloatingButtons",
  components: {FontAwesomeIcon},
}
</script>

<template>
  <div class="wrapper">
    <div class="d-flex justify-content-around align-items-center">
      <div class="button-group">
        <font-awesome-icon class="btn btn-primary rounded-5 py-2 shadow"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  position: fixed;
  bottom: 1vh;
  right: 1vw;
  display: flex;
}

</style>