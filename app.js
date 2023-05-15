const express = require('express');
const app = express();
const cors = require('cors');
const axios = require("axios");
app.use(cors());
const apikey = "dd5ba499ed0f45b0a5d5513b2636daa4";
app.get("/api/getLyricsID/:isrc",async (req,resp ) =>{
    const isrc = (req.params.isrc);
    const res = await axios.get(`https://api.musixmatch.com/ws/1.1/track.get?apikey=${apikey}&track_isrc=${isrc}/`)
    const data = await res.data;
    return resp.json(data)
})
app.get("/api/getLyrics/:id",async (req,resp ) =>{
    const id = (req.params.id);
    const res = await axios.get(`https://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=${apikey}&track_id=${id}/`)
    const data = await res.data;
    return resp.json(data)
})
const port = process.env.PORT || 3000;
app.listen(port,() =>{console.log("running server")})