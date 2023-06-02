import interfaceRequests from '../../restConsumption/interface/requests';

const interfaceResolvers = {
    Query: {
        //todas las communisitts
        consumeCheckEmail: (_,{ email }) => {
            return interfaceRequests.consumeCheckEmail(_,{ email })
        },
        consumeGetMessages: (_,{ email,n }) => {
            return interfaceRequests.consumeGetMessages(_,{email,n})
        }
    
    }
    
}

export default interfaceResolvers;