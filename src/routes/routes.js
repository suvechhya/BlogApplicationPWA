import React, { Suspense, lazy } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Navigation from '../components/BottomNavigation';
import Header from '../components/Header';

const HomePage = lazy(() => import('../pages/Home'));
const LoginPage = lazy(() => import('../pages/Login'));
const AuthenticatedLayout = lazy(() => import('../pages/AuthenticatedLayout'));

function Routes() {
    return (
        <Router>
            <div>
                <Header></Header>
                <div className="app-body">
                    <Switch>
                        <Route path="/login">
                            <Suspense fallback={<div>Loading... </div>}>
                                <LoginPage />
                            </Suspense>
                        </Route>
                        <PrivateRoute path="/account">
                            <Suspense fallback={<div>Loading... </div>}>
                                <AuthenticatedLayout />
                            </Suspense>
                        </PrivateRoute>
                        <Route path="/">
                            <Suspense fallback={<div>Loading... </div>}>
                                <HomePage />
                            </Suspense>
                        </Route>
                    </Switch>
                </div>
                <Navigation></Navigation>
            </div>
        </Router>
    );
}

export default Routes;
