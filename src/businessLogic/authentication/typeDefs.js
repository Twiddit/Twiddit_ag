export const loginTypeDef = `
    input Login {
        email: String!
        password: String
    }
`


export const registerTypeDef = `
    input Register {
        email: String!
        password: String!
        birthday: String!
        phone: String!
        profilePhoto:String!
        description:String!
        username:String!
    }

    input PasswordChange {
        Previous: String!
        NewPass: String!
        Authorization: String!
    }

    input AuthorizationData {
        accessToken: String!
    }

    type AccountResult {
        statusCode: Int
        method: String
        message: String
        data: Data
    }
    
    type Data {
        accessToken: String
        userId: String
    }

    type RegistrationResult {
        message: String
    }

    type ValidationResult {
        message: String
    }
`

export const authenticationQueries = `
    login(loginBody: Login!): AccountResult 
    validate(token: AuthorizationData!): AccountResult
`

export const authenticationMutations = `
    register(registerBody: Register!): RegistrationResult
    password(passwordChangeBody: PasswordChange!): AccountResult
`