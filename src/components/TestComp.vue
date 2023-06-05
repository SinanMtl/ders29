<template>
  <ul>
    <li v-for="(movie, index) in movies" :key="index">
      <img :src="movie.Poster" />
      <span class="name">{{ movie.Title }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  props: {
    movies: { type: Array, default: () => [] },
  },
  watch: {
    count(val) {
      console.log("Changed", val);
    }
  },
  computed: {
    message() {
      return `Count is ${this.count * 2}`;
    }
  },
  methods: {
    increment() {
      this.count++;
    },
  },
  mounted() {
    console.log('Start count '+ this.count);
  }
}
</script>

<style>
.test {
  padding: 20px;
  color: white;
  background-color: blue;
}

img {
  max-width: 200px;
}

.name {
  display: block;
  padding: 20px;
}
</style>
