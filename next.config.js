// this is equivalent of doing export default in the front end
// env can be accessed both front end and backend by process.env.something
const { PHASE_DEVELOPMENT_SERVER,} = require("next/constants");

// we make it a function, so that we can use if statement to check constants(PHASE)
module.exports = (phase) => {
    if(phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                NEXT_PUBLIC_MONGODB_USERNAME: "primaryclient",
                NEXT_PUBLIC_MONGODB_PASSWORD: "ppclient",
                NEXT_PUBLIC_MONGODB_CLUSTER: "cluster0",
                NEXT_PUBLIC_MONGODB_DATABASE: "my-site-dev"
            }
        }
    }
    // down here, means we are not in development server
    return {
        env: {
            SERVER: "place_holder",
        }
    }
}