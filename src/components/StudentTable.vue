<script setup>
//code here
import {useStudentStore} from "../stores/StudentStore.js";
//importing useStudentStore function
import {storeToRefs} from "pinia";
//imports the function to convert reactive data into components
import {computed} from "vue";
import StudentRow from "./StudentRow.vue";
const studentStore = useStudentStore()
//calling that function
const {sortedStudents, studentCount} = storeToRefs(studentStore)
//converts reactive data into components
const deleteStudent = (student) => {
  studentStore.deleteStudent(student)
}

const arrivedOrLeft = (student, isStudentPresent) => {
  student.present = isStudentPresent
  studentStore.arrivedOrLeft(student)
}
const pluralStudentMessage = computed( () =>{
  if (studentCount.value === 1) {
    return 'There is 1 student in class'
  } else {
    return `There are ${studentCount.value} students in class`
  } //Corrects a small grammar issue in the page with the count of students
})
</script>

<template>
  <div id="student-list-table" class="card m-2 p-2">
    <h4 class="card-title">Student List</h4>
    <h5 class="card-subtitle text-muted">{{pluralStudentMessage}}</h5>
    <div id="student-table">
      <table class="table">
        <thead>
        <tr>
          <th>Name</th>
          <th>StarID</th>
          <th>Present?</th>
          <th> Delete?</th>
        </tr>
        </thead>

        <tbody>
        <StudentRow
            v-for="student in sortedStudents"
            v-bind:student = "student"
            v-on:arrived-or-left="arrivedOrLeft"
            v-on:delete-student="deleteStudent"
        ></StudentRow>



        </tbody>

      </table>
    </div>
  </div>
</template>
<style scoped>
#student-table {
  max-height: 400px;
  overflow: scroll;
}

th, td {
  width: 25%;
}


</style>

