import React, { Component } from 'react'
import styled from 'styled-components'

import Links from './Links'

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
    margin-bottom: 50 px;
`

class NavBar extends Component {
    render() {
        return (
                <Nav>
                    <Links />
                </Nav>
        )
    }
}

export default NavBar