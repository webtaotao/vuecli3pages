<template>
  <div class="home">
      <h1>homehomehomehome</h1>
      <div id="nav">
          <h3>nav</h3>
          <router-link to="/" tag="a" target="_blank">Home</router-link>
          <router-link to="/about">About</router-link>
          <div>
              <a href="/ui.html" target="_blank">跳转新的页面</a>
          </div>

      </div>

  </div>
</template>

<script>

export default {
  name: 'home',
}
</script>
