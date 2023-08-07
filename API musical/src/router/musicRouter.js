const musicController = require("../controller/musicController") // importa o controller
const express = require("express") // import o express
const router = express.Router()  // função de rotas do express

router.get("/all",musicController.getAllMusics)
router.get("/:id",musicController.getMusicsById)
router.post("/add",musicController.addMusics)
router.patch("/:id",musicController.updateMusics)
router.delete("/:id",musicController.deleteMusic)

module.exports = router
