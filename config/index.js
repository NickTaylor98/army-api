const {
    API_SERVER_PORT = 3030,
    API_DB_PORT = 27017,
    API_DB_HOST = 'localhost',
    API_DB_NAME = 'army-database'
} = process.env;

module.exports = {
    server: {
        port: API_SERVER_PORT,
    },
    database: {
        port: API_DB_PORT,
        host: API_DB_HOST,
        name: API_DB_NAME,
    },
}