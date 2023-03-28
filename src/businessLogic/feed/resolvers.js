import relationshipResolvers from '../social/resolvers';
import profileResolvers from '../profile/resolvers';
import twidditsResolvers from '../twiddits/resolvers';

let followees = {};
let userFeedTwiddits = {};


const userFeedResolvers = {
    Query: {
        userFeed: async (_, {userId}) => {
            const id = userId
            const followedList = await relationshipResolvers.Query.followingAll(_, {followerId:id})
            
            // Ahora iteramos sobre los resultados para obtener los datos de los perfiles de cada twiddit
            for (let i = 0; i < followedList.length; i++) {
                const followeeID = followedList[i].followedId;
                followees[followeeID] = await profileResolvers.Query.viewProfile(_, {id: followeeID})
            }

            // Obtenemos los twiddits de cada usuario al que se sigue 
            for (let j = 0; j < followedList.length; j++) {
                const followeeID = followedList[j].followedId.toString();
                userFeedTwiddits[followeeID] = await twidditsResolvers.Query.infoTwidditsUser(_, {userId: followeeID})
            }
            console.log(userFeedTwiddits);
            
            
            return followedList
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