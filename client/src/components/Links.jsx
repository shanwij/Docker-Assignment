import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})`
margin-left: 50px;`

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/students/list" className="navbar-brand">
                    Student Details Application
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/students/list" className="nav-link">
                                Students List
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/students/create" className="nav-link">
                                Create Students
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links