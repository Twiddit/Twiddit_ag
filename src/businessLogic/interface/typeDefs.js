export const interfaceTypeDef = `
type CheckEmail {
    result: String!
  }
type GetMessages {
    result: aux1!
  }
type aux1{
  result: [String]
}

type aux2{
    _id: String!
    userId: String!
    content: String!
    edited: Boolean!
    channelId: String!
    updated_at: String!
    created_at: String!
}
  `;



export const interfaceQueries = `
    consumeCheckEmail(email:String!): CheckEmail,
    consumeGetMessages(email:String!,n:Int!):GetMessages
`;