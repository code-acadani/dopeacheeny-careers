<template>
  <div class="students-show">

    <h1>Student Students</h1>
    <h4>First Name: {{student.first_name}}</h4>
    <h4>Last Name: {{student.last_name}}</h4>
    <h4>Email: {{student.email}}</h4>
    <h4>Phone Number: {{student.phone_number}}</h4>
    <h4>Bio: {{student.short_bio}}</h4>
    <h4>Linkedin: {{student.linkedIn_url}}</h4>
    <h4>Twitter: {{student.twitter_handle}}</h4>
    <h4>Personal Blog Website: {{student.personal_blog_website_url}}</h4>
    <h4>Online Resume: {{student.online_resume_url}}</h4>
    <h4>Github URL: {{student.github_url}}</h4>
    <h4>Photo: {{student.photo}}</h4>
    <h4>Linkedin: {{student.linkedIn_url}}</h4>


    <h1>Skills: </h1>
    <ol v-for="skill in student.skills">
        <li>{{skill}}</li>
    </ol>

    <h1>Education: </h1>
    <ol v-for="education in student.educations">
        <li>{{education}}</li>
    </ol>

    <h1>Experiences: </h1>
    <ol v-for="experience in student.experiences">
        <li>{{experience}}</li>
    </ol>

    <h1>Capstone: </h1>
    <ol v-for="capstone in student.capstones">
        <li>{{capstone}}</li>
    </ol>

  </div>
</template>

<style>
</style>

<script>
  import axios from "axios";

export default {
    data: function() {
      return {
        student: {}
      };
    },
    created: function() { //Compiles before the page loads
      axios.get("http://localhost:3000/api/students/" + this.$route.params.id).then(response => {
        console.log(response.data);
        this.student = response.data;
      });
    },
    methods: {},
    computed: {}
};
</script>
