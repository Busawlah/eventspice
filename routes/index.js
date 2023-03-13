const express = require('express');
const router = express.Router();


const userRoute = require('./user.route');
const eventRoute =  require('./event.route');
const attendeeRoute = require('./attendee.route');

const defaultRoutes = [
    {
        path: "/user",
        route: userRoute
    },
    {
        path: "/event",
        route: eventRoute
    },
    {
        path: "/attendee",
        route: attendeeRoute
    }
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route)
});


module.exports = router;
