import searchRequests from '../../restConsumption/search_engine/requests';

const searchResolvers = {
    Query: {
        
        searchTwiddit: (_, {text}) => {
            return searchRequests.searchTwiddit(_, {text})
        },
                
    },

    // Mutation: {
    //     updateProfile: (_, {id, profile}) => {
    //         return profileRequests.updateProfile(_, {id, profile})
    //     },
    // }
    
}

export default searchResolvers;