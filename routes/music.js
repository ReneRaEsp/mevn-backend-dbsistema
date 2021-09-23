import routerx from "express-promise-router";
import MusicController from "../controllers/MusicController";

const router = routerx();

router.get("/songs", MusicController.getSongs);

router.get("/artist", MusicController.getArtist);

router.get("/track", MusicController.getTrack);

export default router;
