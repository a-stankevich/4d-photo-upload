import config from './config.js'
import got from 'got'
import { fileFromPath } from "formdata-node/file-from-path"
import { FormData } from 'formdata-node'

const client = got.extend({
    prefixUrl: config.baseUrl,
    headers: {
        'client-id': config.clientId,
        'client-secret': config.clientSecret,
        'Subscription-Key': config.subscriptionKey
    }
})

const file = await fileFromPath('images/headshot.jpeg')
const metadata = { PatientId: +config.defaultPatientId, SurgeryDescription: 'Upload test' }

const formData = new FormData()
formData.set('headshot.jpeg', file)
formData.set('info', JSON.stringify(metadata))

let response;
try {
    console.log('sending photo...')
    response = await client.post('photos/upload', { body: formData })
} catch (error) {
    console.log(error.toString())
    response = error.response
}

console.log(response.statusCode, response.body)
