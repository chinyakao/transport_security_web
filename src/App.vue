<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');

#app {
  font-family: 'Noto Sans TC', sans-serif;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.content{ 
  padding-top: 6rem;
}
.btn{
  border-radius: 1.5rem;
  border-color: transparent;
  background-color: transparent;
  color: black;
}

.abs-center-x {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
