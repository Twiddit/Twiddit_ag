import communidditsRequests from '../../restConsumption/communiddits/requests';

const communidditsResolvers = {
    Query: {
        //todas las communisitts
        communidditsAll: (_) => {
            return communidditsRequests.communidditsAll(_)
        },
        communidditById: (_,{ communidditId }) => {
            return communidditsRequests.communidditById(_,{communidditId})
        }
    },

    Mutation: {
        createCommuniddit: (_,{ communiddit }) => {
            return communidditsRequests.createCommuniddit(_, { communiddit })
        },
        deleteCommuniddit: (_,{ communidditId }) => {
            return communidditsRequests.deleteCommuniddit(_,{communidditId})
        },
        modCommunidditName: (_,{ communidditId,name }) =>{
            return communidditsRequests.modCommunidditName(_,{ communidditId,name })
        },
        modCommunidditAboutUs: (_,{ communidditId,aboutUs }) =>{
            return communidditsRequests.modCommunidditAboutUs(_,{ communidditId,aboutUs })
        },
        modCommunidditTags: (_,{ communidditId,tags }) =>{
            return communidditsRequests.modCommunidditTags(_,{ communidditId,tags })
        },
        modCommunidditResources: (_,{ communidditId,resources }) =>{
            return communidditsRequests.modCommunidditResources(_,{ communidditId,resources })
        },
        modCommunidditRules: (_,{ communidditId,rules }) =>{
            return communidditsRequests.modCommunidditRules(_,{ communidditId,rules })
        },
        modCommunidditMods: (_,{ communidditId,mods }) =>{
            return communidditsRequests.modCommunidditMods(_,{ communidditId,mods })
        },
        addCommunidditMember: (_,{ communidditId,userId }) =>{
            return communidditsRequests.addCommunidditMember(_,{ communidditId,userId })
        },
        removeCommunidditMember: (_,{ communidditId,userId }) =>{
            return communidditsRequests.removeCommunidditMember(_,{ communidditId,userId })
        }
    }
    
}

export default communidditsResolvers;