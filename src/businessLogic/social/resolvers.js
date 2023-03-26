import relationshipRequests from '../../restConsumption/social/requests';

const relationshipResolvers = {
    Query: {
        
        followersAll: (_, {followedId}) => {
            return relationshipRequests.followersAll(_, {followedId})
        },
        followingAll: (_, {followerId}) => {
            return relationshipRequests.followingAll(_, {followerId})
        },
        blockedAll: (_, {followedId}) => {
            return relationshipRequests.blockedAll(_, {followedId})
        },
        numberFollowers: (_, {followedId}) => {
            return relationshipRequests.numberFollowers(_, {followedId})
        },
        numberFollowing: (_, {followerId}) => {
            return relationshipRequests.numberFollowing(_, {followerId})
        },
        numberBlocked: (_, {followedId}) => {
            return relationshipRequests.numberBlocked(_, {followedId})
        },
        isBlocked: (_, {followedId, followerId}) => {
            return relationshipRequests.isBlocked(_, {followedId, followerId})
        },
        isFollow: (_, {followedId, followerId}) => {
            return relationshipRequests.isFollow(_, {followedId, followerId})
        }            
    },

    Mutation: {
        createRelationship: (_, {relationship}) => {
            return relationshipRequests.createRelationship(_, {relationship})
        },
        disblock: (_, {followedId, followerId}) => {
            return relationshipRequests.disblock(_, {followedId, followerId})
        },
        unfollow: (_, {followedId, followerId}) => {
            return relationshipRequests.unfollow(_, {followedId, followerId})
        },
    }
    
}

export default relationshipResolvers;