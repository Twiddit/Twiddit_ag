export const userFeedTypeDef = `
    type Twiddit2 {
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

    type ProfileViewFeed {
        profile_photo: String!
        username: String!
    }

    type TwidditFeed {
        user: ProfileViewFeed
        twiddit: [InfoTwiddit2]
    }
    
    type InfoTwiddit2{
        twiddit: Twiddit2
        number_of_replies: Int
        number_of_likes: Int
        number_of_dislikes: Int
        isRetwiddit: Boolean
        originalTwiddit: InfoTwiddit2
    }
  `;

export const userFeedQueries = `
    userFeed(userId: Int!): [TwidditFeed!]
    myTwiddits(userId: Int!): TwidditFeed
    communidditsFeed(communidditId: Int!): [TwidditFeed!]
`;

export const userFeedMutations= ` 
`;
