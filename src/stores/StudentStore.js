import {defineStore} from "pinia"
import {ref, computed} from "vue";

export const useStudentStore = defineStore('students', () => {
    const studentList = ref([
        { name:'A.student', starID: 'sd5633aa', present: false},
        { name:'B.student', starID: 'dr5684aw', present: false},
        { name:'C.student', starID: 'sd5453af', present: false},
    ])
    const mostRecentStudent = ref({}) //empty object
    function addNewStudent(student) {
        studentList.value.push(student)
    }

    function deleteStudent(studentToDelete){
        studentList.value = studentList.value.filter( (student) =>{
            return studentToDelete !== student
            //function that makes the delete button work
        })
        mostRecentStudent.value = {} //reset most recent message
    }

    function arrivedOrLeft(student) {
        mostRecentStudent.value = student
    }

    const studentCount = computed( () => {
        return studentList.value.length
        //shows the number of students checked in
    })
    const sortedStudents = computed(()=> {
        return studentList.value.toSorted((s1, s2) => {
            return s1.name.localeCompare(s2.name)
        })//sorts the students in alphabetical order
    })

    return{
        ///reactive data
        studentList,
        mostRecentStudent,
        //functions
        addNewStudent,
        deleteStudent,
        arrivedOrLeft,
        //computed properties
        studentCount,
        sortedStudents,

    }
})