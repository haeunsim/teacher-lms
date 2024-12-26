import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: RouteComponent, roles, ...rest }) => {
    let location = useLocation();
    const loggedInUser = useSelector((state) => state.Auth.user);

    if (!loggedInUser) {
        return <Navigate to={'/account/login'} state={{ from: location }} replace />;
    }

    // if (roles && roles.indexOf(loggedInUser.role) === -1) {
    //     return <Navigate to={{ pathname: '/' }} />;
    // }

    return <RouteComponent {...rest} />;
};

export default PrivateRoute;
