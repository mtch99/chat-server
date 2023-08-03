import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql

    type Message {
        content: String
    }

    type Query {
        listMessages: [Message]
    }

    type Mutation{
        createMessage(input: createMessageInput): String
    }

    input createMessageInput {
        content: String
    }
`;


const messageList = [
    {
        content: "Hello world"
    }
]



const resolvers = {
    Query: {
        listMessages: () => {
            return messageList
        }
    },

    Mutation: {
        createMessage: (input) => {
            messageList.push()
            return input
        }
    }
}


const server = new ApolloServer({
    typeDefs,
    resolvers
})

await startStandaloneServer(server, {
    listen: { port: 4000 },
});