export const twidditsTypeDef = `
  type Twiddit {
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

  input TwidditInput {
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

  type Reply {
    _id: String!
    userId: Int!
    threadId: String
    twidditId: String!
    text: String
    creationDate: String!
    imageURL1: String
    imageURL2: String
    imageURL3: String
    imageURL4: String
    videoURL: String
  }

  input ReplyInput {
    userId: Int!
    threadId: String
    twidditId: String!
    text: String
    creationDate: String!
    imageURL1: String
    imageURL2: String
    imageURL3: String
    imageURL4: String
    videoURL: String
  }

  type Like {
    _id: String!
    userId: Int!
    creationDate: String!
    twidditId: String
    replyId: String
  }

  input LikeInput {
    userId: Int!
    creationDate: String!
    twidditId: String
    replyId: String
  }

  type Dislike {
    _id: String!
    userId: Int!
    creationDate: String!
    twidditId: String
    replyId: String
  }

  input DislikeInput {
    userId: Int!
    creationDate: String!
    twidditId: String
    replyId: String
  }

  type InfoTwiddit{
    twiddit: Twiddit
    number_of_replies: Int
    replies: [Reply]
    number_of_likes: Int
    like: [Like]
    number_of_dislikes: Int
    dislike: [Dislike]
    isRetwiddit: Boolean
    originalTwiddit: InfoTwiddit
  }
`;

export const twidditsQueries = `
  twidditsAll: [Twiddit!]
  twiddit(twidditId: String!): Twiddit!
  repliesAll: [Reply!]
  reply(replyId: String!): Reply!
  repliesTwiddit(twidditId: String!): [Reply!]
  numberOfRepliesTwiddit(twidditId: String!): Int!
  repliesReply(replyId: String!): [Reply!]
  numberOfRepliesReply(replyId: String!): Int!
  likesTwiddit(twidditId: String!): [Like!]
  numberOfLikesTwiddit(twidditId: String!): Int!
  likesReply(replyId: String!): [Like!]
  numberOfLikesReply(replyId: String!): Int!
  dislikesTwiddit(twidditId: String!): [Dislike!]
  numberOfDislikesTwiddit(twidditId: String!): Int!
  dislikesReply(replyId: String!): [Dislike!]
  numberOfDislikesReply(replyId: String!): Int!
  infoTwiddit(twidditId: String!): InfoTwiddit!
  infoTwidditsUser(userId: String!): [InfoTwiddit!]
  infoTwidditsCommuniddit(communidditId: String!): [InfoTwiddit!]
  infoTwidditsByTag(tag: String!): [InfoTwiddit!]
`;

export const twidditsMutations = `
  createTwiddit(twiddit: TwidditInput!): Twiddit
  modTwiddit(twidditId: String!, twiddit: TwidditInput!): Twiddit
  deleteTwiddit(twidditId: String!): Twiddit
  createReply(reply: ReplyInput!): Reply
  modReply(replyId: String!, reply: ReplyInput!): Reply
  deleteReply(replyId: String!): Reply
  createLike(like: LikeInput!): Like
  deleteLike(likeId: String!): Like
  createDislike(dislike: DislikeInput!): Dislike
  deleteDislike(dislikeId: String!): Dislike
`;