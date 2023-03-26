export const communidditsTypeDef = `
  type Communiddit {
    communidittId: Int!
    name: String!
    aboutUs: String
    tags: [String]
    resources: String
    rules: String
    mods: [String!]
    members: [String!]
  }
  input CommunidditInput {
    name: String!
    aboutUs: String
    tags: [String]
    resources: String
    rules: String
    mods: [String!]
    members: [String]
  }
  input CommunidditModInput {
    name: String
    aboutUs: String
    tags: [String]
    resources: String
    rules: String
    mods: [String]
    members: [String]
  }`;

export const communidditsQueries = `
    communidditsAll: [Communiddit!],
    communidditById(communidditId:Int!):Communiddit!
`;

export const communidditsMutations= `
  createCommuniddit(communiddit:CommunidditInput):String!,
  deleteCommuniddit(communidditId:Int!):String!,
  modCommunidditName(communidditId:Int!,name:CommunidditModInput!):String!,
  modCommunidditAboutUs(communidditId:Int!,aboutUs:CommunidditModInput!):String!,
  modCommunidditTags(communidditId:Int!,tags:CommunidditModInput!):String!,
  modCommunidditResources(communidditId:Int!,resources:CommunidditModInput!):String!,
  modCommunidditRules(communidditId:Int!,rules:CommunidditModInput!):String!,
  modCommunidditMods(communidditId:Int!,mods:CommunidditModInput!):String!,
  addCommunidditMember(communidditId:Int!,userId:Int!):String!,
  removeCommunidditMember(communidditId:Int!,userId:Int!):String!
  `;