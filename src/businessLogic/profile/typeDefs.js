export const profileTypeDef = `
    type ProfileView {
        email: String!
        birthday: String!
        phone: String!
        profile_photo: String!
        description: String!
        username: String!
    }

    type NotificationView {
        followerUsername: String!
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
      viewNotifications(id: Int!): [NotificationView]
  `;

export const profileMutations = `
      updateProfile(id: Int!, profile: ProfileUpdate!): ProfileView
  `;