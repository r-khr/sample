import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import {readFileSync} from 'fs';
import path from 'path';
import resolvers from './resolvers';

const PORT = parseInt('3000');
const typeDefs = readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8');

(async () => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const {url} = await startStandaloneServer(apolloServer, {
    listen: {port: PORT},
  });

  console.log(`🚀 Server ready at: ${url}`);
})();
