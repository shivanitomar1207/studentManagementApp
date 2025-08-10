import axios from 'axios';

export function getStudents() {
  return axios.get('https://studentmanagementapp-1-kicn.onrender.com/students/')
    .then(response => response.data)
}

export function addStudent(student){
  return axios.post('https://studentmanagementapp-1-kicn.onrender.com/students/', {
    studentId:null,
    FirstName:student.FirstName.value,
    LastName:student.LastName.value,
    RegistrationNo:student.RegistrationNo.value,
    Email:student.Email.value,
    Course:student.Course.value
  })
    .then(response=>response.data)
}

export function updateStudent(stuid, student) {
  return axios.put('https://studentmanagementapp-1-kicn.onrender.com/students/' + stuid + '/', {
    FirstName:student.FirstName.value,
    LastName:student.LastName.value,
    RegistrationNo:student.RegistrationNo.value,
    Email:student.Email.value,
    Course:student.Course.value
  })
   .then(response => response.data)
}

export function deleteStudent(studentId) {
  return axios.delete('https://studentmanagementapp-1-kicn.onrender.com/students/' + studentId + '/', {
   method: 'DELETE',
   headers: {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }
  })
  .then(response => response.data)
}