import relationshipResolvers from '../social/resolvers';
import profileResolvers from '../profile/resolvers';
import twidditsResolvers from '../twiddits/resolvers';
 


const userFeedResolvers = {
    Query: {
        userFeed: async (_, {userId}) => {
            const id = userId
            const followedList = await relationshipResolvers.Query.followingAll(_, {followerId:id})
            const returnFeed = [];
            // Ahora iteramos sobre los resultados para obtener los datos de los perfiles de cada twiddit
            for (let i = 0; i < followedList.length; i++) {
                const twiddit = {}
                const followeeID = followedList[i].followedId;
                twiddit["user"] = await profileResolvers.Query.viewProfile(_, {id: followeeID})
                twiddit["twiddit"] = await twidditsResolvers.Query.infoTwidditsUser(_, {userId: followeeID.toString()})
                returnFeed.push(twiddit)
                console.log(twiddit)
            }
            
            return returnFeed
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
    }
    
}

export default userFeedResolvers;