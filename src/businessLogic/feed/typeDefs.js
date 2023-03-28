export const userFeedTypeDef = `
    type Relationship2 {
        id: Int!
        followerId: Int!
        followedId: Int!
        blocked: Boolean!
    }
  `;

export const userFeedQueries = `
    userFeed(userId: Int!): [Relationship2!]
`;

export const userFeedMutations= ` 
`;
