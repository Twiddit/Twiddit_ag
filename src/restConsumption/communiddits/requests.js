import { generalRequest, getRequest } from '../../utilities';
import { url, port } from './server';

const URL = `http://${url}:${port}`;

const requests = {
    communidditsAll: (_) =>
        generalRequest(`${URL}/communiditt/`, 'GET'),
    
    createCommuniddit: (_,{ communiddit }) =>
        generalRequest(`${URL}/communiditt/create`, 'POST', communiddit),

    communidditById: (_,{ communidditId }) =>
        generalRequest(`${URL}/communiditt/${communidditId}`, 'GET'),
    
    deleteCommuniddit: (_,{ communidditId }) =>
        generalRequest(`${URL}/communiditt/${communidditId}`, 'DELETE'),

    modCommunidditName: (_,{ communidditId,name }) =>
        generalRequest(`${URL}/communiditt/${communidditId}/edit?p=name`, 'PATCH', name),
    
    modCommunidditAboutUs: (_,{ communidditId,aboutUs }) =>
        generalRequest(`${URL}/communiditt/${communidditId}/edit?p=aboutUs`, 'PATCH', aboutUs),
    
    modCommunidditTags: (_,{ communidditId,tags }) =>
        generalRequest(`${URL}/communiditt/${communidditId}/edit?p=tags`, 'PATCH', tags),
    
    modCommunidditResources: (_,{ communidditId,resources }) =>
        generalRequest(`${URL}/communiditt/${communidditId}/edit?p=resources`, 'PATCH', resources),

    modCommunidditRules: (_,{ communidditId,rules }) =>
        generalRequest(`${URL}/communiditt/${communidditId}/edit?p=rules`, 'PATCH', rules),

    modCommunidditMods: (_,{ communidditId,mods }) =>
        generalRequest(`${URL}/communiditt/${communidditId}/edit?p=mods`, 'PATCH', mods),

    addCommunidditMember: (_,{ communidditId,userId }) =>
        generalRequest(`${URL}/communiditt/${communidditId}/${userId}?o=add`, 'PATCH'),

    removeCommunidditMember: (_,{ communidditId,userId }) =>
        generalRequest(`${URL}/communiditt/${communidditId}/${userId}?o=remove`, 'PATCH')
};

export default requests;