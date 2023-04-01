import relationshipResolvers from '../social/resolvers';
import profileResolvers from '../profile/resolvers';
import twidditsResolvers from '../twiddits/resolvers';
 
var groupBy = function(xs) {
    return xs.reduce(function(rv, x) {
      (rv[x.twiddit.userId] = rv[x.twiddit.userId] || []).push(x);
      return rv;
    }, {});
  };

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
            }
            
            return returnFeed
        },
        myTwiddits: async (_, {userId}) => {
            const twiddit = {}
            twiddit["user"] = await profileResolvers.Query.viewProfile(_, {id: userId})
            twiddit["twiddit"] = await twidditsResolvers.Query.infoTwidditsUser(_, {userId: userId.toString()})
            return twiddit
        },
        communidditsFeed: async (_, {communidditId}) => {
            const twiddit = await twidditsResolvers.Query.infoTwidditsCommuniddit(_, {communidditId: communidditId.toString()})
            const groupedFeed = groupBy(twiddit);
            const returnFeed = []
            // Recorremos el objeto de GroupBy usuarios
            for(const [key, value] of Object.entries(groupedFeed)){
                const userData = await profileResolvers.Query.viewProfile(_, {id: key})
                returnFeed.push({"user": userData, "twiddit": value})
            }

            // const userData = await profileResolvers.Query.viewProfile(_, {id: key})
            console.log(returnFeed)
            return returnFeed
        },   
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