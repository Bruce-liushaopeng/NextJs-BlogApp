// this is equivalent of doing export default in the front end
// env can be accessed both front end and backend by process.env.something
const { PHASE_DEVELOPMENT_SERVER,} = require("next/constants");

// we make it a function, so that we can use if statement to check constants(PHASE)
module.exports = (phase) => {
    if(phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: "primaryclient",
                mongodb_password: "ppclient",
                mongodb_cluster: "cluster0",
                mongodb_database: "my-site-dev"
            }
        }
    }
}