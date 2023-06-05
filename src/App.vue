<template>
  <div>
    <button @click="getMovies">Get Movies</button>
    <TestComp :movies="list" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import TestComp from "./components/TestComp.vue";

const list = ref([]);

function getMovies () {
  fetch("https://fake-movie-api.onrender.com/api/movies", {
    headers: {
      authKey: 'RmFrZU1vdmllQVBJLWM5MzU1ZjE0LTM3ZGUtNDAzNC1hMTAzLTRkOTcxOTYwOWRmNg==',
    }
  })
    .then(async (response) => {
      list.value = await response.json()
    });
}
</script>

