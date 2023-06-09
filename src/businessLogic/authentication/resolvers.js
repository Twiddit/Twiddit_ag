import authenticationRequests from '../../restConsumption/authentication/requests'

const authenticationResolvers = {
    Query: {
        login: (_, {loginBody}) => {
            console.log(loginBody)
            return authenticationRequests.login(_, {loginBody})
        }, 
        validate: (_, {token}) => {
           return authenticationRequests.validate(_, {token})
        }, 
        logout: (_, {token}) => {
            return authenticationRequests.logout(_, {token})
         } 
    },
    Mutation: {
        register: (_, { registerBody }) => {
            return authenticationRequests.register(_, { registerBody })
        },
        password: (_, { passwordChangeBody }) => {
            return authenticationRequests.password(_, { passwordChangeBody })
        }
    }
}

export default authenticationResolvers