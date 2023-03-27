import communidditsRequests from '../../restConsumption/communiddits/requests';
import profileRequests from '../../restConsumption/profile/requests';

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
        createCommuniddit: async(_,{ communiddit }) => {
            for (let userId of communiddit.mods){
                const id = parseInt(userId)
                const user = await profileRequests.viewProfile(_,{ id });
                if(user.email==undefined){
                    return 'Uno o mas usuarios seleccionados para moderador no existen'
                } 
            }
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
        modCommunidditMods: async(_,{ communidditId,mods }) =>{
            for (let userId of mods.mods){
                const id = parseInt(userId)
                const user = await profileRequests.viewProfile(_,{ id });
                if(user.email==undefined){
                    return 'Uno o mas usuarios seleccionados para moderador no existen'
                }
            }
            return communidditsRequests.modCommunidditMods(_,{ communidditId,mods })
        },
        addCommunidditMember: async (_,{ communidditId,userId }) =>{
            
            const id = parseInt(userId)
            const user = await profileRequests.viewProfile(_,{ id });
                if(user.email==undefined){
                    return 'El usuario no existe'
                }

            return communidditsRequests.addCommunidditMember(_,{ communidditId,userId })
        },
        removeCommunidditMember: (_,{ communidditId,userId }) =>{
            return communidditsRequests.removeCommunidditMember(_,{ communidditId,userId })
        }
    }
    
}

export default communidditsResolvers;