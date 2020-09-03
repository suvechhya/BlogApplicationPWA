import React, { lazy } from 'react';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";

const BookmarksPage = lazy(() => import('./Bookmarks'));
const ProfilePage = lazy(() => import('./Profile'));
const MyPostsPage = lazy(() => import('./MyPosts'));
const CreatePostPage = lazy(() => import('./CreatePost'));

function AuthenticatedLayout() {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route path={`${path}/bookmarks`}>
                    <BookmarksPage />
                </Route>
                <Route path={`${path}/myposts`}>
                    <MyPostsPage />
                </Route>
                <Route path={`${path}/createpost`}>
                    <CreatePostPage />
                </Route>
                <Route path={`${path}/profile`}>
                    <ProfilePage />
                </Route>
            </Switch>
        </div>
    );
}

export default AuthenticatedLayout;
