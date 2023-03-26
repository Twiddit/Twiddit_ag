import profileRequests from '../../restConsumption/profile/requests';

const profileResolvers = {
    Query: {
        
        viewProfile: (_, {id}) => {
            return profileRequests.viewProfile(_, {id})
        },
                
    },

    Mutation: {
        updateProfile: (_, {id, profile}) => {
            return profileRequests.updateProfile(_, {id, profile})
        },
    }
    
}

export default profileResolvers;