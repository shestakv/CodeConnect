const LazyUserPage = React.lazy(
    () => import(/* webpackChunkName: "user-page" */ "./UserPage")
);