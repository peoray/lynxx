<template>
  <div v-if="loading">
    <img src="../assets/spinner.gif" alt="" />
  </div>

  <div v-else>
    <button class="btn" @click="$router.go(-1)" type="button">
      &#8592; Go Back
    </button>

    <div class="img-container">
      <h2>Name of Image:{{ imageName || $router.params.id }}</h2>
      <img :src="image" alt="image file" />
    </div>
  </div>
</template>

<script>
import { fetchImage } from '../api'

export default {
  name: 'image-details',
  data () {
    return {
      image: null,
      loading: false
    }
  },
  async mounted () {
    await this.getImage()
  },
  computed: {
    imageName () {
      return this.$route.params.name
    }
  },
  methods: {
    async getImage () {
      this.loading = true
      try {
        const res = await fetchImage(this.$route.params.id)
        const bytes = new Uint8Array(res)

        // eslint-disable-next-line no-return-assign
        const binary = bytes.reduce(
          (data, b) => (data += String.fromCharCode(b)),
          ''
        )

        this.image = 'data:image/jpeg;base64,' + btoa(binary)
        this.loading = false
      } catch (error) {
        console.error(error)
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.btn {
  background: rgba(242, 242, 242, 0.7);
  border: 0;
  padding: 16px 24px;
  cursor: pointer;
}

.btn:hover {
  background: rgba(242, 242, 242, 1);
}

.img-container {
  margin-top: 40px;
}

 img {
  max-width: 100%;
  height: 100%;
}
</style>
