//@ts-check
import gql from 'graphql-tag';

const query = gql`
  {
    subscription {onNewMessage} 
  }
`



function getSubscriptionField(query){
    //@ts-ignore
    console.log(JSON.stringify(query, null, 2));
    return query.definitions[0].selectionSet.selections[0]?.selectionSet?.selections[0]?.name?.value
}

console.log(`Get subscription field: ${getSubscriptionField(query)}`)


import { graphql, buildSchema } from "graphql"

// Construct a schema, using GraphQL schema language
// import { typeDefs } from './src/index.js';
// var schema = buildSchema(typeDefs)

var schema2 = buildSchema(`
    type Message {
        content: String
    }

    type Query {
        listMessages: [Message]
    }

    type Mutation{
        createMessage(input: createMessageInput): String
    }

    type Subscription{
        onNewMessage: String
    }

    input createMessageInput {
        content: String
    }


`)
// Run the GraphQL query '{ hello }' and print out the response
graphql({
  schema: schema2,
  source: "{ onNewMessage }",
  rootValue: 'Subscription'
}).then(response => {
  console.log(JSON.stringify(response, null, 2))
})


import { makeExecutableSchema } from '@graphql-tools/schema'
import { parse, validate} from 'graphql'

// Create an executable schema
const executableSchema = makeExecutableSchema({
    typeDefs: schema2,
  });
  

const subscriptionQuery = `subscription { onNewMessage} `
  // Parse and validate the subscription query
const parsedQuery = parse(subscriptionQuery);
const validationErrors = validate(executableSchema, parsedQuery);

if (validationErrors.length > 0) {
console.error('Subscription query validation errors:');
validationErrors.forEach(error => {
    console.error(error);
});
} else {
console.log('Subscription query is valid');
}

