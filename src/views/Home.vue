<template>
  <div v-if="loading">
    <img src="../assets/spinner.gif" alt="" />
  </div>

  <div class="card" v-else>
    <div v-for="image in images" :key="image.id">
      <Card :image="image"></Card>
    </div>
  </div>
</template>

<script>
import { fetchImages } from '../api'
import Card from '../components/card/Card'

export default {
  name: 'Home',
  components: {
    Card
  },
  data () {
    return {
      images: [],
      loading: false
    }
  },
  async mounted () {
    this.getAllImages()
  },
  methods: {
    async getAllImages () {
      this.loading = true
      try {
        const data = await fetchImages('list')
        this.images = data
        this.loading = false
      } catch (error) {
        console.error(error)
        this.loading = false
      }
    }
  }
}
</script>
