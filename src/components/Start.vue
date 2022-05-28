<template>
    <img class="logo-app" src="../assets/sebmatezar.jpg">
  <div>
    <h1>SEBMATEZAR</h1>
    <input class="form-control search-crime" type="text" placeholder="auto theft">
    <router-link to="/search">
        <button type="button" class="btn btn-primary" style="margin: 10px;">Search</button>
    </router-link>
    <p class="search-engine-info">
        A search engine dedicated to finding information about crimes commited in Atlanta from 2009 to 2017
    </p>
  </div>
</template>

<script>
export default {
  name: 'StartPage',
}
</script>

<style scoped>
.logo-app {
    height: 300px;
    width: auto;
}
.search-crime {
  width: 500px;
  display: block;
  margin-right: auto;
  margin-left: auto;
}
.search-engine-info {
    font-weight: bold; 
    margin-top: 150px;
}
</style>
