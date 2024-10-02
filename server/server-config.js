import { configDotenv } from 'dotenv'
configDotenv()

const databaseName = process.env.MONGO_DB_NAME || 'DEFAULT_OR_FALLBACK_DB_NAME'
const apiEndpointUrl = process.env.API_ENDPOINT_URL || '/api'

const config = {
    apiEndpointUrl,
    env: process.env.NODE_ENV ? process.env.NODE_ENV.toUpperCase() : undefined,
    stage: process.env.STAGE ? process.env.STAGE.toUpperCase() : undefined,
    jwtSecret: process.env.JWT_SECRET || 'SECRET_KEY',
    port: process.env.PORT || '3000',
    mongoDbName: databaseName,
    mongoUri:
        process.env.MONGO_URI ||
        `mongodb://${process.env.IP || '127.0.0.1'}:${
            process.env.MONGO_PORT || '27017'
        }/${databaseName}`,
}

console.log( config )

export default config
