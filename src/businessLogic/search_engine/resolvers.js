import searchRequests from '../../restConsumption/search_engine/requests';

const searchResolvers = {
    Query: {
        
        searchTwiddit: (_, {text}) => {
            return searchRequests.searchTwiddit(_, {text})
        },
        searchUser: (_, {text}) => {
            return searchRequests.searchUser(_, {text})
        },
                
    }
    
}

export default searchResolvers;