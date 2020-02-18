import React, { Component } from 'react';
import Layout from '../src/HOC/Layout/Layout'
import Quiz from '../src/containers/Quiz/Quiz'
import QuizList from '../src/containers/QuizList/QuizList'
import Auth from '../src/containers/Auth/Auth'
import QuizCreator from '../src/containers/QuizCreator/QuizCreator'
import Logout from '../src/components/Logout/Logout'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { autologin } from '../src/Store/Actions/auth'



class App extends Component {
  
    componentDidMount() {
        this.props.autologin()
    }
  
    render() {

    let routes = (
        <Switch>
            <Route path="/auth" component={Auth}/>
            <Route path="/quiz/:id" component={Quiz}/>
            <Route path="/" exact component={QuizList}/>
            <Redirect to={'/'} />
        </Switch>
    )

    if (this.props.isAuthenticated) {
        routes = (
            <Switch>
            <Route path="/auth" component={Auth}/>
            <Route path="/quiz-creator" component={QuizCreator}/>
            <Route path="/quiz/:id" component={Quiz}/>
            <Route path="/logout" component={Logout} />
            <Route path="/" exact component={QuizList}/>
            <Redirect to={'/'} />
        </Switch>
        )
    }

    return (
        <Layout>
            { routes }
        </Layout>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token
  }
}

function mapDispatchToProps(dispatch) {
    return {
        autologin: () => dispatch(autologin())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
