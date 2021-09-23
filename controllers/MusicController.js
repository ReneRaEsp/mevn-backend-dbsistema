import axios from 'axios';
export default {
    getSongs: async (req, res, next) => {
        
        axios.get("https://api.deezer.com/artist/647650/top?limit=50&output=json")
            .then((response) => {
            const songs = response.data;
            res.status(200).json(songs);
        })
        .catch(e =>{
            res.status(500).send({
                message: "Ocurrio un error: " + e
            });
            next(e);
        });
      
    },
    getArtist: async (req, res, next) => {
        
        axios.get("https://api.deezer.com/artist/647650?output=json")
            .then((response) => {
            const artist = response.data;
            res.status(200).json(artist);
        })
        .catch(e =>{
            res.status(500).send({
                message: "Ocurrio un error: " + e
            });
            next(e);
        });
      
    },
    getTrack: async (req, res, next) => {
        const id = req.query.id
        axios.get(`https://api.deezer.com/track/${id}?output=json`)
        .then(response=>{
            const track = response.data;   
            res.status(200).json(track);
        }).catch(e=>{
            res.status(500).send({
                message: `Error: ${e}`
            })
        });
        
    }
}