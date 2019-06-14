import React from 'react'
import {Route} from 'react-router-dom'

import QuestionList from '../list/'

const Routes = () => (
    <Route path="/list" component={QuestionList} />
)

export default Routes;
