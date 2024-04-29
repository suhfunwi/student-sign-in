<script setup>

import  {ref} from "vue";

const props = defineProps({
  student :Object
})
const emit = defineEmits(['arrived-or-left', 'delete-student'])
const isStudentPresent = ref(props.student.present)
const notifyArrivedOrLeft = () => {
  //tell parent that student arrived or left - emit event
  emit('arrived-or-left', props.student, isStudentPresent.value)
}
const confirmThenDeleteStudent = () => {
  emit('delete-student', props.student)
}
</script>

<template>
  <!--
        Each row will have a checkbox, bound to the app's data
        When the checkbox is checked/unchecked,
        the student will be signed in/out -->
  <tr class="align-middle" v-bind:class="{present:student.present, absent: !student.present}">
    <!--adds bootstrap styles specific to absent/present students,
        v-bind associates the element with the styles-->
    <td>{{ student.name }}</td>
    <td>{{student.starID}}</td>
    <td>
<!--      todo v-model checkbox?-->
      <input type="checkbox" v-model="isStudentPresent" v-on:change="notifyArrivedOrLeft">
      <span v-if="student.present" class="mx-3">Here!</span>
      <span v-else class="mx-3">Not here</span>
      <!--                        adding the attendance checkboxes for each student-->
      <!--                        also a bootstrap class to style it and give margins between the text and checkbox-->
    </td>
    <td>
      <button v-on:click="confirmThenDeleteStudent(student)" class="btn btn-danger">
        <i class="bi-trash-fill"></i>Delete
      </button>
    </td>
    <!--adding the delete button and the corresponding icon from bootstrap-->
  </tr>
</template>

<style scoped>
.present {
  color: gray;
  font-style: italic;
}

.absent {
  color: black;
  font-weight: bold;
}
</style>