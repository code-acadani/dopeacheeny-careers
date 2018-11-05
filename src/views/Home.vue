<template>
  <div class="home">

    <h1>Student Name </h1>
    <ul v-for="student in students">
      <div> 
        <a v-bind:href="'/#/students/' + student.id">{{student.first_name}} {{student.last_name}}</a>
      </div>
    </ul>

  </div>
</template>

<style>
</style>

<script>

var axios = require('axios');

export default {

  data: function() {
    return {
      students: []
    };
  },
  created: function() { //Compiles before the page loads
    console.log(this.searchTerm);
    axios.get("http://localhost:3000/api/students/").then(response => {
      console.log(response.data);
      this.students = response.data;
    });
  },
  methods: {},
  computed: {}
};
</script>