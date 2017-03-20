<template>
  <div id="app">

    <brand></brand>

    <div class="container center">

      <router-link v-if="$route.name != 'battle'" class="button"
        to="/">Back to home</router-link>

      <router-view></router-view>

      <router-link v-if="$route.name != 'ranking'" class="button"
        to="/ranking">Ranking</router-link>

    </div>

  </div>
</template>

<script>
import Brand from './components/Brand'

export default {
  name: 'app',
  components: { Brand },
}
</script>

<style>
html, body {
  font-family: Roboto, Arial, sans-serif;
  background: #ECEFF1;
  color: rgba(0,0,0,0.87);
}

.secondary-text {
  color: rgba(0,0,0,0.54);
}

.center {
  text-align: center;
}

.button {
  width: 250px;
  text-align: center;
  display: inline-block;
  padding: 8px;
  text-decoration: none;
  font-weight: 500;
  background: rgb(3,155,229);
  color: white;
  border: 1px solid rgb(3,155,229);
  border-radius: 3px;
  font-size: 16px;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);
}

.button:hover {
  text-decoration: none;
  transition: color 0.2s;
  color: #000;
  cursor: pointer;
}
</style>
