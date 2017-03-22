<template>
  <div class="row align-items-center full-height" v-if="currentBattle">

    <div class="col-12 col-md">
      <concurrent :image="currentBattle.first" @select="select"></concurrent>
    </div>

    <div class="col-12 col-md-1 secondary-text center">OR</div>

    <div class="col-12 col-md">
      <concurrent :image="currentBattle.second" @select="select"></concurrent>
    </div>

  </div>
</template>

<script>
import firebase from 'firebase'
import Concurrent from '../Concurrent'

import { randomInArray } from '../../utils'

export default {
  name: 'battle',

  components: { Concurrent },

  data () {
    return {
      currentBattle: false,
    }
  },

  firebase: {
    images: firebase.database().ref('images')
  },

  mounted () {
    this.$firebaseRefs.images.once('value', value => {
      this.initBattle()
    })
  },

  methods: {

    initBattle () {
      let first = randomInArray(this.images)
      let second = randomInArray(this.images)

      while (first == second) {
        second = randomInArray(this.images)
      }

      this.currentBattle = { first, second }
    },

    select (image) {

      let winner = image['.key']

      let battle = this.currentBattle
      let losser = battle.first == image
        ? battle.second['.key']
        : battle.first['.key']

      this.increment(winner, 'wins')
      this.increment(losser, 'losses')

      this.initBattle()
    },

    increment (id, type) {
      let ref = this.$firebaseRefs.images.child(id).child(type)

      ref.transaction(value => {
        if (!value) return 1
        return value + 1
      })
    }

  }
}
</script>

<style scoped>
.full-height {
}
</style>
