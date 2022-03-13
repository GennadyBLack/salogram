<template>
  <div class="pencil-wrapper">
    <div class="pencil"></div>
  </div>
</template>

<style lang="scss">
.pencil {
  position: absolute;
  width: 0.25em;
  bottom: 10px;
  height: 0.8em;
  background: #2c2c2c;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  font-size: 1em;
}

.pencil:before {
  content: '';
  position: absolute;
  top: -0.25em;
  left: 0;
  width: 0.25em;
  height: 0.2em;
  background: #2c2c2c;
  border-radius: 0.1em;
}

.pencil:after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  top: 0.65em;
  left: 0;
  border: solid 0.2em #2c2c2c;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top: solid 0.45em #2c2c2c;
}
.pencil-wrapper {
  //   overflow: hidden;
  position: absolute;
  animation-duration: 5s;
  animation-name: pencil;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes pencil {
  from {
    left: 30%;
  }

  to {
    left: 10%;
  }
}
</style>
