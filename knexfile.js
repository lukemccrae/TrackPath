require('dotenv').config();

module.exports = {

    development: { //this is when the database is local
        client: 'pg',
        connection: process.env.LOCAL_DATABASE_URL
    },

    production: { //this is the remote database
        client: 'pg',
        connection: process.env.DATABASE_URL + '?ssl=true'
    }
};
