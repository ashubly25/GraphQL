const express = require('express');
const expressGraphQL = require('express-graphql');

const app = express();

app.use('/graphql', expressGraphQL({
	schema:schema,
	graphql:true
}));

app.listen(4000, () => {
	console.log('Server is listening on port 4000..'); 
});