import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8001/api',
})

export const insertStudent = payload => api.post(`/student`, payload)
export const getAllStudents = () => api.get(`/students`)
export const updateStudentById = (id, payload) => api.put(`/student/${id}`, payload)
export const deleteStudentById = id => api.delete(`/student/${id}`)
export const getStudentById = id => api.get(`/student/${id}`)

const apis = {
    insertStudent,
    getAllStudents,
    updateStudentById,
    deleteStudentById,
    getStudentById,
}

export default apis