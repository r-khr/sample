const resolvers = {
  Query: {
    test: async (_: any, args: any) => {
      console.log(args);
      return 'test123';
    },
  },
};

export default resolvers;
