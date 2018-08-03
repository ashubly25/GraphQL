const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLSchema,
	GraphQLList,
	GraphQLNonNull

} = require('graphql');

const customers = [
	{id:'1', name:''}
];

const CustomerType = new GraphQLObjectType({
	name:'Customer',
	fields:() => ({
		id: {type:GraphQLString},
		name: {type: GraphQLString},
		email: {type: GraphQLString},
		age: {type: GraphQLInt},
	})
});

const RootQuery = new GraphQLObjectType({
	name:'RootQuryType',
	customer:{
		type:CustomerType
	}
});

module.exports = new GraphQLSchema({

});

