import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class StudentUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            std_name: '',
            std_coz: '',
            address: '',
        }
    }

    handleChangeInputStdname = async event => {
        const std_name = event.target.value
        this.setState({ std_name })
    }

    handleChangeInputStdcoz = async event => {
        const std_coz = event.target.value
        this.setState({ std_coz })
    }

    handleChangeInputAddress = async event => {
        const address = event.target.value
        this.setState({ address })
    }

    handleUpdateStudent = async () => {
        const { id, std_name, std_coz, address } = this.state
        const payload = { std_name, std_coz, address}

        await api.updateStudentById(id, payload).then(res => {
            window.alert(`Student updated successfully`)
            this.setState({
                std_name: '',
                std_coz: '',
                address: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const student = await api.getStudentById(id)

        this.setState({
            std_name: student.data.data.std_name,
            std_coz: student.data.data.std_coz,
            address: student.data.data.address,
        })
    }

    render() {
        const { std_name, std_coz, address } = this.state
        return (
            <Wrapper>
                <Title>Update Student</Title>

                <Label>Student Name: </Label>
                <InputText
                    type="text"
                    value={std_name}
                    onChange={this.handleChangeInputStdname}
                />

                <Label>Course Name: </Label>
                <InputText
                    type="text"
                    value={std_coz}
                    onChange={this.handleChangeInputStdcoz}
                />

                <Label>Address: </Label>
                <InputText
                    type="text"
                    value={address}
                    onChange={this.handleChangeInputAddress}
                />

                <Button onClick={this.handleUpdateStudent} >Update Student</Button>
                <CancelButton href={'/students/list'}>Student List</CancelButton>
            </Wrapper>
        )
    }
}

export default StudentUpdate