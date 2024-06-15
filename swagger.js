const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        title: 'Contacts API',
        description: 'Contacts API'
    },
    host: 'cse-341-project1-ymsc.onrender.com',
    schemes: ['https']
}

const outputFile = './swagger.json'
const endpointsFiles = ['./routes/index.js']

//this will generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc)