<script setup>
import {useStudentStore} from "../stores/StudentStore.js";
import {storeToRefs} from "pinia";
const studentStore = useStudentStore()
const {mostRecentStudent} = storeToRefs(studentStore)
</script>

<template>
  <div id="welcome-or-goodbye-message" class="m-2">

    <!-- TODO show a message when student arrives or leaves  -->
    <div v-if="mostRecentStudent.name">

    </div>
    <div v-if="mostRecentStudent.present" class="alert alert-success">
      Welcome, {{mostRecentStudent.name}}!
    </div>
    <div v-else class="alert alert-info">
      Goodbye! {{mostRecentStudent.name}}, see you later!
    </div>
    <!--This is setting up the welcome and goodbye messages for
        when each student checks in and out of class-->
  </div>

</template>
<style scoped>

</style>


