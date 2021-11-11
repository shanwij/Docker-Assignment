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

class StudentsInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
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

    handleIncludeStudent = async () => {
        const { std_name, std_coz, address } = this.state
        const payload = { std_name, std_coz, address }

        await api.insertStudent(payload).then(res => {
            window.alert(`Student inserted successfully`)
            this.setState({
                std_name: '',
                std_coz: '',
                address: '',
            })
        })
    }

    render() {
        const { std_name, std_coz, address } = this.state
        return (
            <Wrapper>
                <Title>Create Student</Title>

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

                <Label>Address : </Label>
                <InputText
                    type="text"
                    value={address}
                    onChange={this.handleChangeInputAddress}
                />

                <Button onClick={this.handleIncludeStudent}>Add Student</Button>
                <CancelButton href={'/students/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default StudentsInsert