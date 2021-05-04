require('dotenv').config()
import sanityClient from '@sanity/client'

const projectId = require('projectId')

export default sanityClient({
    projectId: "projectId",
    dataset: "production"
})