import dotenv from 'dotenv-flow'
dotenv.config({
    node_env: process.env.NODE_ENV || 'dev',
    path: process.cwd() + '/config'
})


const config = {
    baseUrl: process.env.BASE_URL,
    clientId: process.env.API_CLIENT_ID,
    clientSecret: process.env.API_CLIENT_SECRET,
    subscriptionKey: process.env.API_SUBSCRIPTION_KEY,
    defaultPatientId: process.env.DEFAULT_PATIENT_ID
}

export default config
