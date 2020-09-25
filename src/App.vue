<template>
  <div>
    <div id="nav">
      <router-link exact to="/">Home</router-link> |
      <router-link to="/favourites">Favourites</router-link>
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style>
body {
  font-family: "Courier New", Courier, monospace, sans-serif;
}

.container {
  padding: 0 90px;
}

@media only screen and (max-width: 968px) {
  .container {
    padding: 0 22px;
  }
}

@media only screen and (max-width: 600px) {
  .container {
    padding: 0 18px;
  }
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.card {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 40px;

  margin-top: 40px;
  color: #f4f4f4;
}

@media only screen and (max-width: 968px) {
  .card {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media only screen and (max-width: 600px) {
  .card {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
