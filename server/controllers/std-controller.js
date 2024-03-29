const Student = require('../models/std-model')

createStudent = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a Student details',
        })
    }

    const student = new Student(body)

    if (!student) {
        return res.status(400).json({ success: false, error: err })
    }

    student
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: student._id,
                message: 'Student created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Student not created!',
            })
        })
}

updateStudent = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Student.findOne({ _id: req.params.id }, (err, student) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Student not found!',
            })
        }
        student.std_name = body.std_name
        student.std_coz = body.std_coz
        student.address = body.address
        student
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: student._id,
                    message: 'Student updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Student not updated!',
                })
            })
    })
}

deleteStudent = async (req, res) => {
    await Student.findOneAndDelete({ _id: req.params.id }, (err, student) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!student) {
            return res
                .status(404)
                .json({ success: false, error: `Student not found` })
        }

        return res.status(200).json({ success: true, data: student })
    }).catch(err => console.log(err))
}

getStudentById = async (req, res) => {
    await Student.findOne({ _id: req.params.id }, (err, student) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!student) {
            return res
                .status(404)
                .json({ success: false, error: `Student not found` })
        }
        return res.status(200).json({ success: true, data: student })
    }).catch(err => console.log(err))
}

getStudents = async (req, res) => {
    await Student.find({}, (err, students) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!students.length) {
            return res
                .status(404)
                .json({ success: false, error: `Student not found` })
        }
        return res.status(200).json({ success: true, data: students })
    }).catch(err => console.log(err))
}

module.exports = {
    createStudent,
    updateStudent,
    deleteStudent,
    getStudents,
    getStudentById,
}