export const relationshipTypeDef = `
  type Relationship {
    id: Int!
    followerId: Int!
    followedId: Int!
    blocked: Boolean!
  }
  type NumberBlocked {
    numberBlocked: Int!
  }
  type NumberFollowers {
    numberFollowers: Int!
  }
  type NumberFollowing {
    numberFollowing: Int!
  }
  type Message{
    message: String
    blocked: Boolean
    follow: Boolean
  }
  input RelationshipInput {
    followerId: Int!
    followedId: Int!
    blocked: Boolean!
  }
  `;

export const relationshipQueries = `
    followersAll(followedId: Int!): [Relationship!]
    followingAll(followerId: Int!): [Relationship!]
    blockedAll(followedId: Int!): [Relationship!]
    numberFollowers(followedId: Int!): NumberFollowers!
    numberFollowing(followerId: Int!): NumberFollowing!
    numberBlocked(followedId: Int!): NumberBlocked!
    isBlocked(followedId: Int!, followerId: Int!): Message!
    isFollow(followedId: Int!, followerId: Int!): Message!
`;

export const relationshipMutations= ` 
    createRelationship(relationship: RelationshipInput): Message!
    disblock(followedId: Int!, followerId: Int!): Message!
    unfollow(followedId: Int!, followerId: Int!): Message!
`;