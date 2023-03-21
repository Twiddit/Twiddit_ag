export const loginTypeDef = `
    input Login {
        username: String!
        password: String
    }
`

export const registerTypeDef = `
    input Register {
        Id: Int!
        Email: String!
        Password: String!
        Birthday: String!
        Phone: String!
        LastAccess: String!
        ProfilePhoto:String!
        Description:String!
        Username:String!
        Active:Int!
    }
    type AccountResult {
        statusCode: Int
        method: String
        message: String
        data: Data
    }
    type Data {
        accessToken: String
    }
`

export const accountQueries = `
    login(loginBody: Login!): AccountResult 
    validate(token: String!): AccountResult
`

export const accountMutations = `
    register(registerBody: Register!): AccountResult
`