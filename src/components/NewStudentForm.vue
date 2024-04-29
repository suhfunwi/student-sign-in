<script setup>
import {ref} from "vue"
import {useStudentStore} from "../stores/StudentStore.js";
const studentStore = useStudentStore()


const newStudentName = ref('')
const newStarID = ref('')
const formErrors = ref([])
const addStudent = () => {
  formErrors.value = [] //reset form errors

  if (!newStudentName.value){//check if newstudentname is invalid
    formErrors.value.push('Student name must be entered')
  }
  if (!newStarID.value) {
    formErrors.value.push('StarID must be entered')
  }
  //if there are no errors is the form valid
  if (formErrors.value.length == 0){
    let student = {
      name: newStudentName.value,
      starID: newStarID.value,
      present: false
    }

    //todo - How to add student?
    studentStore.addNewStudent(student)
    //add student to  the store

    newStudentName.value = ''
    newStarID.value = ''
  }
}
</script>

<template>
  <div id="new-student-form-errors" class="m-2">
    <!-- TODO show errors from form validation -->
    <div v-if="formErrors.length > 0" class="alert alert-danger">
      <li v-for="error in formErrors" v-bind:key="error">
        {{error}}
      </li>
    </div>
  </div>


  <div id="new-student-form" class="card add-student m-2 p-2">
    <h4 class="card-title">Add new student</h4>

    <div class="form-group mb-3">
      <label for="name">Name</label>
      <!-- TODO v-model newStudentName -->
      <input v-model.trim="newStudentName" id="name" class="form-control">
      <!--v-model links the html with the corresponding data in the script for the vue app
          '.trim' removes empty spaces in the input-->
    </div>


  <div class="form-group mb-3">
    <label for="starID">Star ID</label>
    <input id="starID" class="form-control" v-model.trim="newStarID">
  </div>

  <button class="btn btn-primary" v-on:click="addStudent">Add</button>
    </div>
</template>

<style scoped>

</style>

