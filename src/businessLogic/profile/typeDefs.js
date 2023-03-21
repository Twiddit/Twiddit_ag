export const viewProfileTypeDef = `
    type ProfileView {
        Email: String!
        Password: String!
        Birthday: String!
        Phone: String!
        LastAccess: String!
        ProfilePhoto:String!
        Description:String!
        Username:String!
    }
`;

export const updateProfileTypeDef = `
    input InputProfile {
        Email: String!
        Phone: String!       
        Password: String!
        Description: String!
    }
    type ProfileResult {
        statusCode: Int
        method: String
        message: String
        data: ProfileView
    }
`

export const profileQueries = `
      viewProfile(username: String!): ProfileResult
  `;

export const profileMutations = `
      updateProfile(username: String!, profile: InputProfile!): ProfileResult
  `;