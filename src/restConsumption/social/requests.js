import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}/`;

const relationshipRequests = {
    followersAll: (_, { followedId }) => 
        generalRequest(`${URL}followers/${followedId}/`, 'GET'),

    followingAll: (_, { followerId }) => 
        generalRequest(`${URL}following/${followerId}/`, 'GET'),

    blockedAll: (_, { followedId }) => 
        generalRequest(`${URL}blocked/${followedId}/`, 'GET'),

    numberFollowers: (_, { followedId }) => 
        generalRequest(`${URL}numberFollowers/${followedId}/`, 'GET'),
        
    numberFollowing: (_, { followerId }) => 
        generalRequest(`${URL}numberFollowing/${followerId}/`, 'GET'),

    numberBlocked: (_, { followedId }) => 
        generalRequest(`${URL}numberBlocked/${followedId}/`, 'GET'),

    isBlocked: (_, { followedId, followerId }) => 
        generalRequest(`${URL}disblock/${followedId}/${followerId}/`, 'GET'),
    
    disblock: (_, { followedId, followerId }) => 
        generalRequest(`${URL}disblock/${followedId}/${followerId}/`, 'DELETE'),

    isFollow: (_, { followedId, followerId }) => 
        generalRequest(`${URL}unfollow/${followedId}/${followerId}/`, 'GET'),

    unfollow: (_, { followedId, followerId }) => 
        generalRequest(`${URL}unfollow/${followedId}/${followerId}/`, 'DELETE'),

    createRelationship: (_, { relationship }) => 
        generalRequest(`${URL}createRelationship/`, 'POST', relationship),
        
    
}

export default relationshipRequests;