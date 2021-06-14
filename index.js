const express = require("express")
const app = express();
const PORT = 3002
const { graphqlHTTP } = require('express-graphql');
const schema = require('./Schemas')


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))
app.listen(PORT, () => {
    console.log("Server Running")
})