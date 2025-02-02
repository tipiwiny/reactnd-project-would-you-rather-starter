import { Route,Redirect } from 'react-router-dom'


const PrivateRoute = ({ component: Component, authed, ...rest }) => (
    <Route {...rest} render={(props) => (
      authed=== true
        ? <Component {...props} />
        : <Redirect to='/' />
    )} />
  )

  export default PrivateRoute