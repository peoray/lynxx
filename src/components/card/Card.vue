<template>
  <div
    @click="goToSingleImageDetails(image.id)"
    class="card-body"
    :style="{ backgroundColor: randomColor(image.id) }"
  >
    <p class="card-title">Image Name: {{ image.name }}</p>
    <h2 class="card-heading">
      {{ image.resolution.width }} x {{ image.resolution.height }}
    </h2>
    <a href="#" class="card-link"
      >View Image</a
    >
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      required: true
    },
    name: {
      type: String
    }
  },
  data () {
    return {
      colorCache: {}
    }
  },
  methods: {
    randomColor (id) {
      const r = () => Math.floor(256 * Math.random())

      return (
        this.colorCache[id] ||
        (this.colorCache[id] = `rgba(${r()}, ${r()}, ${r()}, 1)`)
      )
    },
    goToSingleImageDetails (id) {
      this.$router.push({
        name: 'image-details',
        params: { id: `${id}`, name: this.image.name }
      })
    }
  }
}
</script>

<style>
.card-body {
  cursor: pointer;
  padding: 32px 24px;
  transition: all 0.5s;
}

.card-body:hover {
  transform: scale(1.05);
}

@media only screen and (max-width: 600px) {
  .card-body:hover {
    transform: scale(1);
  }
}

.card-title {
  font-size: 14px;
}

.card-heading {
  margin-top: 56px;
  font-size: 32px;
}

.card-link {
  display: inline-block;
  font-size: 13px;
  margin-top: 105px;
  color: rgba(255, 255, 255, 0.815);
  text-decoration: none;
}
</style>
