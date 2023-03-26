import data from './data'

// api endpoint
//api/trending

export default function handler(req, res){
    const {Trending} = data ;
    if(Trending){
        return res.status(200).json({Trending})
    }else{
        return res.status(404).json({err: `data not found`})
    }
}

