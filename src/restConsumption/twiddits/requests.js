import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}`;

const requests = {

      // Twiddits
      twidditsAll: (_) =>
            generalRequest(`${URL}/${entryPoint.twiddits}/`, 'GET'),
      
      twiddit: (_, { twidditId }) =>
            generalRequest(`${URL}/${entryPoint.twiddits}/${twidditId}`, 'GET'),
      
      createTwiddit: (_, { twiddit }) =>
            generalRequest(`${URL}/${entryPoint.twiddits}`, 'POST', twiddit),
            
      modTwiddit: (_, { twidditId, twiddit }) =>
            generalRequest(`${URL}/${entryPoint.twiddits}/${twidditId}`, 'PUT', twiddit),
            
      deleteTwiddit: (_, { twidditId }) =>
            generalRequest(`${URL}/${entryPoint.twiddits}/${twidditId}`, 'DELETE'),

      //Reply
      repliesAll: (_) =>
            generalRequest(`${URL}/${entryPoint.replies}/`, 'GET'),
      
      reply: (_, { replyId }) =>
            generalRequest(`${URL}/${entryPoint.replies}/${replyId}`, 'GET'),

      repliesTwiddit: (_, { twidditId }) =>
            generalRequest(`${URL}/${entryPoint.replies}/replies-twiddit/${twidditId}`, 'GET'),

      numberOfRepliesTwiddit: (_, { twidditId }) =>
            generalRequest(`${URL}/${entryPoint.replies}/number-replies-twiddit/${twidditId}`, 'GET'),

      repliesReply: (_, { replyId }) =>
            generalRequest(`${URL}/${entryPoint.replies}/replies-reply/${replyId}`, 'GET'),

      numberOfRepliesReply: (_, { replyId }) =>
            generalRequest(`${URL}/${entryPoint.replies}/number-replies-reply/${replyId}`, 'GET'),
      
      createReply: (_, { reply }) =>
            generalRequest(`${URL}/${entryPoint.replies}`, 'POST', reply),
            
      modReply: (_, { replyId, reply }) =>
            generalRequest(`${URL}/${entryPoint.replies}/${replyId}`, 'PUT', reply),
            
      deleteReply: (_, { replyId }) =>
            generalRequest(`${URL}/${entryPoint.replies}/${replyId}`, 'DELETE'),

      //Like
      likesTwiddit: (_, { twidditId }) =>
            generalRequest(`${URL}/${entryPoint.likes}/likes-twiddit/${twidditId}`, 'GET'),

      numberOfLikesTwiddit: (_, { twidditId }) =>
            generalRequest(`${URL}/${entryPoint.likes}/number-likes-twiddit/${twidditId}`, 'GET'),

      likesReply: (_, { replyId }) =>
            generalRequest(`${URL}/${entryPoint.likes}/likes-reply/${replyId}`, 'GET'),

      numberOfLikesReply: (_, { replyId }) =>
            generalRequest(`${URL}/${entryPoint.likes}/number-likes-reply/${replyId}`, 'GET'),
      
      createLike: (_, { like }) =>
            generalRequest(`${URL}/${entryPoint.likes}`, 'POST', like),
      
      deleteLike: (_, { likeId }) =>
            generalRequest(`${URL}/${entryPoint.likes}/${likeId}`, 'DELETE'),
      
      //Dislike

      dislikesTwiddit: (_, { twidditId }) =>
            generalRequest(`${URL}/${entryPoint.dislikes}/dislikes-twiddit/${twidditId}`, 'GET'),

      numberOfDislikesTwiddit: (_, { twidditId }) =>
            generalRequest(`${URL}/${entryPoint.dislikes}/number-dislikes-twiddit/${twidditId}`, 'GET'),

      dislikesReply: (_, { replyId }) =>
            generalRequest(`${URL}/${entryPoint.dislikes}/dislikes-reply/${replyId}`, 'GET'),

      numberOfDislikesReply: (_, { replyId }) =>
            generalRequest(`${URL}/${entryPoint.dislikes}/number-dislikes-reply/${replyId}`, 'GET'),
      
      createDislike: (_, { dislike }) =>
            generalRequest(`${URL}/${entryPoint.dislikes}`, 'POST', dislike),
      
      deleteDislike: (_, { dislikeId }) =>
            generalRequest(`${URL}/${entryPoint.dislikes}/${dislikeId}`, 'DELETE'),

      //Info-twiddits

      infoTwiddit: (_, { twidditId }) =>
            generalRequest(`${URL}/${entryPoint.info_twiddits}/${twidditId}`, 'GET'),

      infoTwidditsUser: (_, { userId }) =>
            generalRequest(`${URL}/${entryPoint.info_twiddits}/user/${userId}`, 'GET'),
      
      infoTwidditsCommuniddit: (_, { communidditId }) =>
            generalRequest(`${URL}/${entryPoint.info_twiddits}/communiddit/${communidditId}`, 'GET'),
            
      infoTwidditsByTag: (_, { tag }) =>
            generalRequest(`${URL}/${entryPoint.info_twiddits}/tag/${tag}`, 'GET'),
}

export default requests;