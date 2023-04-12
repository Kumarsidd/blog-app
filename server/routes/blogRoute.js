const router = require("express").Router();
const {
  blogCreate,
  getAllBlog,
  getBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController.js");

router.post("/create", blogCreate);

router.get("/", getAllBlog);

router.get("/:id", getBlog);

router.put("/:id", updateBlog);

router.delete("/:id", deleteBlog);

module.exports = router;
