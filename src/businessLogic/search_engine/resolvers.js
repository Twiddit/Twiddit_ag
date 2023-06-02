import searchRequests from '../../restConsumption/search_engine/requests';
import profileResolvers from '../profile/resolvers';

const searchResolvers = {
    Query: {
        
        searchTwiddit: async (_, {text}) => {
             let twidditList =  await searchRequests.searchTwiddit(_, { text });
           
             for (let i = 0; i < twidditList.length; i++) {
                const data = await profileResolvers.Query.viewProfile(_, { id: twidditList[i].userId });
                twidditList[i]["user"] =  data.username;
            }
            return twidditList;
        },
        searchUser: (_, {text}) => {
            return searchRequests.searchUser(_, {text})
        },
                
    }
    
}

export default searchResolvers;