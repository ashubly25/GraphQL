const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLSchema,
	GraphQLList,
	GraphQLNonNull

} = require('graphql');

const customers = [
	{id:'1', name:'Ashu Tiwari', email:'atiwari@gmail.com', age:28},
	{id:'2', name:'Utkarsh Singh', email:'usingh@gmail.com', age:25},
	{id:'3', name:'Tanay Shahi', email:'tshahi@gmail.com', age:22},

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
		type:CustomerType,
		args:{
			id:{GraphQLString}
		},
		resolve(parentValue, args){
			for(let i=0; i < customers.length;i++){
				if (customers[i].id == args.id){
					return customers[i];
				}
			}
		}
	}
});

module.exports = new GraphQLSchema({
  
});
