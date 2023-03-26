import data from './data'

// api endpoint
//api/popular

export default function handler(req, res){
    const {Popular} = data;
    if(Popular) return res.status(200).json(Popular);
    return res.status(400).json({error: `no data found`})
}