const axios = require('axios');
const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLSchema,
	GraphQLList,
	GraphQLNonNull

} = require('graphql');


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
	fields:{
			customer:{
			type:CustomerType,
			args:{
				id:{GraphQLString}
			},
			resolve(parentValue, args){
				/*
				for(let i=0; i < customers.length;i++){
					if (customers[i].id == args.id){
						return customers[i];
					}
				}
				*/
				return axios
			}
		},
		customers:{
			type: new GraphQLList(CustomerType),
			resolve(parentValue, args){
				return customers;
			}
		}
	}
});

module.exports = new GraphQLSchema({
	query: RootQuery
  
});
