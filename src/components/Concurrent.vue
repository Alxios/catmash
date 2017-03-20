<template>
  <div class="image" :style="backgroundImage(image.url)">
    <div class="image-selection">
      <button class="button" @click="select">Select</button>
    </div>
  </div>
</template>

<script>
import { backgroundImage } from '../utils'

export default {
  name: 'concurrent',

  props: ['image'],

  methods: {
    select() {
      this.$emit('select', this.image)
    },

    backgroundImage
  }

}
</script>

<style scoped>
.image {
  max-width: 350px;
  height: 350px;
  background-size: cover;
  background-position: center;
  margin: 40px auto;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2),0 1px 1px 0 rgba(0,0,0,0.14),0 2px 1px -1px rgba(0,0,0,0.12);
  border: 5px solid white;
  border-radius: 2px;
}

.image .image-selection {
  opacity: 0;
  background-color: rgba(0,0,0, 0.70);
  color: white;
  text-align: center;
  height: 100%;
}

.image:hover {
  transition: border 0.4s;
  border: 5px solid rgb(3,155,229);
}

.image:hover .image-selection {
  transition: opacity 0.3s;
  opacity: 1;
}

.image .image-selection button {
  position: relative;
  top: 45%
}
</style>
