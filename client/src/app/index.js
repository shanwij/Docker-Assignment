import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { StudentList, StudentsInsert, StudentsUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/students/list" exact component={StudentList} />
                <Route path="/students/create" exact component={StudentsInsert} />
                <Route
                    path="/students/update/:id"
                    exact component={StudentsUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App