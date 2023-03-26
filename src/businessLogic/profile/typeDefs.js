export const profileTypeDef = `
    type ProfileView {
        email: String!
        birthday: String!
        phone: String!
        profile_photo: String!
        description: String!
        username: String!
    }

    input ProfileUpdate {
        email: String
        birthday: String
        phone: String
        profile_photo: String
        description: String
        username: String
    }
`;

export const profileQueries = `
      viewProfile(id: Int!): ProfileView
  `;

export const profileMutations = `
      updateProfile(id: Int!, profile: ProfileUpdate!): ProfileView
  `;