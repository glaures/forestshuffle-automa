<script setup>

import {computed, onMounted, ref} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const actions = ['-4<', '-4>', '-3>', '-3<', '+4', '+4', '+3', '+3', '+2', '+2', '-2<', '-2<', '-2>', '-2>', '-1>', '-1>', '-1<', '-1<', '+1', '+1']
let actionsLeft = [...actions]
const currentAction = ref(null)

const discard = computed(() => currentAction.value?.indexOf('1') >= 0)

function next() {
  actionsLeft.splice(actionsLeft.findIndex((a) => a === currentAction.value), 1)
  if (actionsLeft.length === 0)
    actionsLeft = [...actions]
  currentAction.value = actionsLeft[~~(Math.random() * actionsLeft.length)]
}

onMounted(() => {
    document.addEventListener('keydown', next);
})

next()
</script>

<template>
  <div class="wrapper user-select-none" @click="next">
    <div class="game-card rounded-4">
      <div class="game-card-text">
        {{ currentAction }}
      </div>
      <div class="discard rounded-3" v-if="discard">
        <span>1</span>
        <div class="cross">
          <font-awesome-icon icon="circle-xmark"/>
        </div>
      </div>
    </div>
    <div class="footer w-100 text-light justify-content-center align-items-center">
      <div class="d-flex justify-content-center"><a href="https://glaures.github.io/forestshuffle/?distributed=true" target="_new" class="link-light">{{$t('scoringApp')}}</a></div>
      <div class="d-flex justify-content-center mt-2"><router-link to="/imprint" class="link-light">{{$t('imprint')}}</router-link></div>
    </div>
  </div>
</template>


<style scoped>
.wrapper {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: -2;
  min-height: 100vh;
  height: 100vh;
  min-width: 100vw;
  width: 100vw;
  padding: 3vw 3vh;
  background-image: url("/img/wood.png");
  background-repeat: repeat;
  font-family: varela-round, sans-serif;
  font-weight: bold;
  color: white;
}

@font-face {
  font-family: 'varela-round';
  src: url('@/assets/fonts/VarelaRound-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.game-card {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10vh;
  width: 94vw;
  min-width: 94vw;
  max-width: 94vw;
  height: 85vh;
  min-height: 85vh;
  max-height: 85vh;
  background-image: url("/img/card-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 1),
  0 6px 20px rgba(0, 0, 0, 0.19);
  transition: all 0.3s ease;
}

.game-card-text {
  position: relative;
  display: flex;
  justify-content: center;
  text-shadow: 4px 4px black;
  font-size: 12rem;
  width: 100%
}

.discard {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 25%;
  color: white;
  border: 4px solid white;
  min-width: 50px;
  width: 50px;
  max-width: 50px;
  min-height: 70px;
  max-height: 70px;
  font-size: 35px;
  font-weight: bold;
}

.cross {
  position: absolute;
  bottom: -25px;
  right: -24px;
  font-size: 30px;
}

.footer {
  display: block;
  position: fixed;
  bottom: 10px;
  text-wrap: nowrap;
  font-size: 11px;
  text-decoration: none;
}
</style>