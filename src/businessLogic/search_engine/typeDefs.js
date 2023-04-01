export const search_engineTypeDef = `
    type Twiddit3{
        _id: String!
        userId: Int!
        communidditsId: String
        retwidditId: String
        text: String
        creationDate: String!
        imageURL1: String
        imageURL2: String
        imageURL3: String
        imageURL4: String
        videoURL: String
        tags: [String]
    }
  `;






export const search_engineQueries = `
searchTwiddit(text: String!): [Twiddit3!]
`;

export const search_engineMutations= ` 
`;