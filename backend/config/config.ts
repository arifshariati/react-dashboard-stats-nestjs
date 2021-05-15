const config = {
    mongo: {
        uri: 'mongodb://admin:admin@mongodb:27017/react-dashboard-nestjs?authSource=admin',
        config: {
            useNewUrlParser: true,
            useFindAndModify: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            autoCreate: true,
        },
    }
}
export default config;