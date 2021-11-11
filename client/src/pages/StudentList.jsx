import React, { Component } from 'react'
import ReactTable from 'react-table-6'
import api from '../api'

import styled from 'styled-components'

import 'react-table-6/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateStudent extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/students/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteStudent extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the student ${this.props.id} permanently?`,
            )
        ) {
            api.deleteStudentById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class StudentsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            students: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllStudents().then(students => {
            this.setState({
                students: students.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { students, isLoading } = this.state
        console.log('TCL: StudentsList -> render -> students', students)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Student Name',
                accessor: 'std_name',
                filterable: true,
            },
            {
                Header: 'Course Name',
                accessor: 'std_coz',
                filterable: true,
            },
            {
                Header: 'Address',
                accessor: 'address',
                filterable: true,
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteStudent id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateStudent id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!students.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={students}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default StudentsList