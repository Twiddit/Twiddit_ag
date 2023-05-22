import profileRequests from '../../restConsumption/profile/requests';

const profileResolvers = {
    Query: {
        
        viewProfile: (_, {id}) => {
            return profileRequests.viewProfile(_, {id})
        },

        viewNotifications: async (_, {id}) => {
            const userNotifications = await profileRequests.viewNotifications(_, {id})
            const notifications = []
            for (let i=0; i < userNotifications.length; i++){
                const notification = {}
                const followerID = userNotifications[i].followerId;
                const followerData = await profileResolvers.Query.viewProfile(_, {id: followerID});
                notification["followerUsername"] = followerData.username;
                notification["followerID"] = followerID;
                notifications.push(notification);
            }
            
            return notifications
        },
                
    },

    Mutation: {
        updateProfile: (_, {id, profile}) => {
            return profileRequests.updateProfile(_, {id, profile})
        },
    }
    
}

export default profileResolvers;