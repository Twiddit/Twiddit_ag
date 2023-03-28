import twidditsRequest from '../../restConsumption/twiddits/requests';

const twidditsResolvers = {
  Query: {
    twidditsAll: (_) => {
      return twidditsRequest.twidditsAll(_)
    },
    twiddit: (_, { twidditId }) => {
      return twidditsRequest.twiddit(_, { twidditId })
    },
    repliesAll: (_) => {
      return twidditsRequest.repliesAll(_)
    },
    reply: (_, { replyId }) => {
      return twidditsRequest.reply(_, { replyId })
    },
    repliesTwiddit: (_, { twidditId }) => {
      return twidditsRequest.repliesTwiddit(_, { twidditId })
    },
    numberOfRepliesTwiddit: (_, { twidditId }) => {
      return twidditsRequest.numberOfRepliesTwiddit(_, { twidditId })
    },
    repliesReply: (_, { replyId }) => {
      return twidditsRequest.repliesReply(_, { replyId })
    },
    numberOfRepliesReply: (_, { replyId }) => {
      return twidditsRequest.numberOfRepliesReply(_, { replyId })
    },
    likesTwiddit: (_, { twidditId }) => {
      return twidditsRequest.likesTwiddit(_, { twidditId })
    },
    numberOfLikesTwiddit: (_, { twidditId }) => {
      return twidditsRequest.numberOfLikesTwiddit(_, { twidditId })
    },
    likesReply: (_, { replyId }) => {
      return twidditsRequest.likesReply(_, { replyId })
    },
    numberOfLikesReply: (_, { replyId }) => {
      return twidditsRequest.numberOfLikesReply(_, { replyId })
    },
    dislikesTwiddit: (_, { twidditId }) => {
      return twidditsRequest.dislikesTwiddit(_, { twidditId })
    },
    numberOfDislikesTwiddit: (_, { twidditId }) => {
      return twidditsRequest.numberOfDislikesTwiddit(_, { twidditId })
    },
    dislikesReply: (_, { replyId }) => {
      return twidditsRequest.dislikesReply(_, { replyId })
    },
    numberOfDislikesReply: (_, { replyId }) => {
      return twidditsRequest.numberOfDislikesReply(_, { replyId })
    },
    infoTwiddit: (_, { twidditId }) => {
      return twidditsRequest.infoTwiddit(_, { twidditId })
    },
    infoTwidditsUser: (_, { userId }) => {
      return twidditsRequest.infoTwidditsUser(_, { userId })
    },
    infoTwidditsCommuniddit: (_, { communidditId }) => {
      return twidditsRequest.infoTwidditsCommuniddit(_, { communidditId })
    },
    infoTwidditsByTag: (_, { tag }) => {
      return twidditsRequest.infoTwidditsByTag(_, { tag })
    },
  },

  Mutation: {
    createTwiddit: (_, { twiddit }) => {
      return twidditsRequest.createTwiddit(_, { twiddit })
    },
    modTwiddit: (_, { twidditId, twiddit }) => {
      return twidditsRequest.modTwiddit(_, { twidditId, twiddit })
    },
    deleteTwiddit: (_, { twidditId }) => {
      return twidditsRequest.deleteTwiddit(_, { twidditId })
    },
    createReply: (_, { reply }) => {
      return twidditsRequest.createReply(_, { reply })
    },
    modReply: (_, { replyId, reply }) => {
      return twidditsRequest.modReply(_, { replyId, reply })
    },
    deleteReply: (_, { replyId }) => {
      return twidditsRequest.deleteReply(_, { replyId })
    },
    createLike: (_, { like }) => {
      return twidditsRequest.createLike(_, { like })
    },
    deleteLike: (_, { likeId }) => {
      return twidditsRequest.deleteLike(_, { likeId })
    },
    createDislike: (_, { dislike }) => {
      return twidditsRequest.createDislike(_, { dislike })
    },
    deleteDislike: (_, { dislikeId }) => {
      return twidditsRequest.deleteDislike(_, { dislikeId })
    },
  }
};

export default twidditsResolvers;
