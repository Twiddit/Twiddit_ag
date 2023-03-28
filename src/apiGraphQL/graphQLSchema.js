import merge from 'lodash.merge'
import GraphQLJSON from 'graphql-type-json'
import { makeExecutableSchema } from 'graphql-tools'
import { mergeSchemas } from '../utilities'

import {
    loginTypeDef, registerTypeDef, authenticationQueries, authenticationMutations
} from '../businessLogic/authentication/typeDefs'

import {
    communidditsTypeDef, communidditsQueries, communidditsMutations
} from '../businessLogic/communiddits/typeDefs'

import {
    relationshipTypeDef, relationshipQueries, relationshipMutations
} from '../businessLogic/social/typeDefs'

import {
    profileTypeDef, profileQueries, profileMutations
} from '../businessLogic/profile/typeDefs'

import {
    twidditsTypeDef, twidditsQueries, twidditsMutations
} from '../businessLogic/twiddits/typeDefs'

import {
    userFeedTypeDef, userFeedQueries, userFeedMutations
} from '../businessLogic/feed/typeDefs'

import authenticationResolvers from '../businessLogic/authentication/resolvers'
import communidditsResolvers from '../businessLogic/communiddits/resolvers'
import relationshipResolvers from '../businessLogic/social/resolvers'
import profileResolvers from '../businessLogic/profile/resolvers'
import twidditsResolvers from '../businessLogic/twiddits/resolvers'
import userFeedResolvers from '../businessLogic/feed/resolvers'


// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
    [
        'scalar JSON',
        loginTypeDef,
        registerTypeDef,
        communidditsTypeDef,
        relationshipTypeDef,
        profileTypeDef,
        twidditsTypeDef,
        userFeedTypeDef,
    ],
    [
        authenticationQueries,
        communidditsQueries,
        relationshipQueries,
        profileQueries,
        twidditsQueries,
        userFeedQueries,
    ],
    [   
        authenticationMutations,
        communidditsMutations,
        relationshipMutations, 
        profileMutations,
        twidditsMutations,
        userFeedMutations,
    ]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
    typeDefs: mergedTypeDefs,
    resolvers: merge(
        { JSON: GraphQLJSON }, // allows scalar JSON
        authenticationResolvers,
        communidditsResolvers,
        relationshipResolvers,
        profileResolvers,
        twidditsResolvers,
        userFeedResolvers,
    )
});