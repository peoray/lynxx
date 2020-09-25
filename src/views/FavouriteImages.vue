<template>
  <div v-if="loading">
    <img src="../assets/spinner.gif" alt="" />
  </div>

  <div v-else class="card">
    <div v-for="image in favoriteImages" :key="image.id">
      <Card :image="image"></Card>
    </div>
  </div>
</template>

<script>
import { fetchFavoriteImages } from '../api'
import Card from '../components/card/Card'

export default {
  name: 'favourite-images',
  components: {
    Card
  },
  data () {
    return {
      favoriteImages: [],
      loading: false
    }
  },
  async mounted () {
    await this.getFetchFavoriteImages()
  },
  methods: {
    async getFetchFavoriteImages () {
      this.loading = true
      try {
        const data = await fetchFavoriteImages('list')
        this.favoriteImages = data
        this.loading = false
      } catch (error) {
        this.loading = false
        console.error(error)
      }
    }
  }
}
</script>

<style></style>
