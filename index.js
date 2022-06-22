const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
type Book {
    title: String
    author: String
}

type Query {
    books: [Book]
}
`;

const resolvers = {
    Query: {
        books: () => books,
    },
};

const books = [
    {
        title: "Do Androids Dream of Electric Sheep?",
        author: "Philip K. Dick",
    },
    {
        title: "Everything I Never Told You",
        author: "Celeste Ng",
    },
    {
        title: "Is Everyone Hanging Out Without Me? (and Other Concerns)",
        author: "Mindy Kaling",
    },
    {
        title: "The Electric Kool-Aid Acid Test",
        author: "Tom Wolfe",
    },
    
];

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({ url }) => {
    console.log(`Server is ready at ${url}`);
});
