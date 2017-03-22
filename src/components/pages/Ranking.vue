<template>
  <table class="table table-hover table-striped">
    <thead>
      <tr>
        <th>#</th>
        <th>Image</th>
        <th>Wins</th>
        <th>losses</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="({id, url, wins, losses}, i) in orderByRank">
        <th scope="row">{{ i }}</th>
        <td>
          <div class="d-flex mr-2 image-64" :style="backgroundImage(url)" :alt="id"></div>
        </td>
        <td>{{ wins || 0 }}</td>
        <td>{{ losses || 0 }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import firebase from 'firebase'
import { backgroundImage } from '../../utils'

export default {
  name: 'ranking',

  firebase: {
    images: firebase.database().ref('images')
  },

  methods: { backgroundImage },

  computed : {
    orderByRank () {
      return this.images.sort( (a, b) => {
        let totalA = a.wins - a.losses
        let totalB = b.wins - b.losses

        return totalB - (totalA)
      })
    }
  }

}
</script>

<style scoped>
.image-64 {
  height: 64px;
  width: 64px;
  background-size: cover;
  background-position: center;
}
</style>
