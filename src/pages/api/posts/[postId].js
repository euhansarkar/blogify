import data from '../data'
//api endpoint
//api/posts/[id]

export default function handler(req, res){
    const {postId} = req.query;
    const {Posts} = data;

    if(postId){
        const post = Posts.find(post => post.id.toString() === postId);
        return res.status(200).json(post);
    }
    return res.status(404).json({error: `post not found`});
}