import relationshipRequests from '../../restConsumption/social/requests';
import profileRequests from '../../restConsumption/profile/requests';

const relationshipResolvers = {
    Query: {
        
        followersAll: async (_, {followedId}) => {
            const id = followedId
            const user = await profileRequests.viewProfile(_, { id });
            if (user.email != undefined){
                return relationshipRequests.followersAll(_, { followedId })
            }
            return null
            
        },
        followingAll: async (_, {followerId}) => {
            const id = followerId
            const user = await profileRequests.viewProfile(_, { id });
            if (user.email != undefined){
                return relationshipRequests.followingAll(_, {followerId})
            }
            return null

        },
        blockedAll: async (_, {followedId}) => {
            const id = followedId
            const user = await profileRequests.viewProfile(_, { id });
            if (user.email != undefined){
                return relationshipRequests.blockedAll(_, {followedId})
            }
            return null

        },
        numberFollowers: async (_, {followedId}) => {
            const id = followedId
            const user = await profileRequests.viewProfile(_, { id });
            if (user.email != undefined){
                return relationshipRequests.numberFollowers(_, {followedId})
            }
            return null

        },
        numberFollowing: async (_, {followerId}) => {
            const id = followerId
            const user = await profileRequests.viewProfile(_, { id });
            if (user.email != undefined){
                return relationshipRequests.numberFollowing(_, {followerId})
            }
            return null

        },
        numberBlocked: async (_, {followedId}) => {
            const id = followedId
            const user = await profileRequests.viewProfile(_, { id });
            if (user.email != undefined){
                return relationshipRequests.numberBlocked(_, {followedId})
            }
            return null

        },
        isBlocked: async (_, {followedId, followerId}) => {
            let id = followedId
            const user1 = await profileRequests.viewProfile(_, { id });
            id = followerId
            const user2 = await profileRequests.viewProfile(_, { id });
            if (user1.email != undefined && user2.email != undefined){
                return relationshipRequests.isBlocked(_, {followedId, followerId})
            }
            return null

        },
        isFollow: async (_, {followedId, followerId}) => {
            let id = followedId
            const user1 = await profileRequests.viewProfile(_, { id });
            id = followerId
            const user2 = await profileRequests.viewProfile(_, { id });
            if (user1.email != undefined && user2.email != undefined){
                return relationshipRequests.isFollow(_, {followedId, followerId})
            }
            return null

        }            
    },

    Mutation: {
        createRelationship: async(_, {relationship}) => {
            let id = relationship.followedId
            const user1 = await profileRequests.viewProfile(_, { id });
            id = relationship.followerId
            const user2 = await profileRequests.viewProfile(_, { id });
            if (user1.email != undefined && user2.email != undefined){
                return relationshipRequests.createRelationship(_, {relationship})
            }
            return null
        },
        disblock: async(_, {followedId, followerId}) => {
            const isBlocked = await relationshipResolvers.Query.isBlocked(_, {followedId, followerId})
            if (isBlocked.blocked){
               return relationshipRequests.disblock(_, {followedId, followerId})
            }
            return null

        },
        unfollow: async(_, {followedId, followerId}) => {
            const isFollow = await relationshipResolvers.Query.isFollow(_, {followedId, followerId})
            if (isFollow.follow){
                return relationshipRequests.unfollow(_, {followedId, followerId})
            }
            return null

        },
    }
    
}

export default relationshipResolvers;