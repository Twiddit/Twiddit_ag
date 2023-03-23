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
    type AccountResult {
        message: String
        data: String!
    }
    type RegistrationResult {
        message: String
    }

    type ValidationResult {
        message: String
        validToken: String!
    }
`

export const authenticationQueries = `
    login(loginBody: Login!): AccountResult 
    validate(token: String!): ValidationResult
`

export const authenticationMutations = `
    register(registerBody: Register!): RegistrationResult
`