const express = require('express');

const router = express.Router();


// router.get('/', (req, res) => {
//     res.send('tools found')
// })

// router.post('/', (req, res) => {
//     res.send('tools added')
// })




router.route('/')

    /***
     * @api {get} /tools all tools
     * @apiDescription get all the tools
     * @apiPermission Admin
     * 
     * @apiHeader {string} Authorization User's access token
     * 
     * @apiParams {Number(1-)}       [page=1]     list page
     * @apiParams {Number(1-100)}    [limit=10]   users per page
     * 
     * @apiSuccess {Object[]}  all the tools
     * 
     * @apiError {Authorization 401}    Unauthorized     only authorized users can access the data
     * @apiError {Forbidden 403}        Forbidden        only admins can access the data
     */

    .get(

        (req, res) => {
            res.send('tools found')
        }
    )

    /***
     * @api {post} /tools add tools
     * @apiDescription get all the tools
     * @apiPermission Admin
     * 
     * @apiHeader {string} Authorization User's access token
     * 
     * @apiParams {Number(1-)}       [page=1]     list page
     * @apiParams {Number(1-100)}    [limit=10]   users per page
     * 
     * @apiSuccess {Object[]}  all the tools
     * 
     * @apiError {Authorization 401}    Unauthorized     only authorized users can access the data
     * @apiError {Forbidden 403}        Forbidden        only admins can access the data
     */
    .post(

        (req, res) => {
            res.send('tools added')
        }
    )

module.exports = router;