const Blog = require("../models/blog.js");

exports.blogCreate = async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    await newBlog.save();
    res.status(201).json({ message: "blog uploaded" });
  } catch (error) {
    console.log("error while uploading " + error);
  }
};

exports.getAllBlog = async (req, res) => {
  const userName = req.query.user;
  const catName = req.query.cat;
  try {
    let blogs;
    if (userName) {
      blogs = await Blog.find({ username: userName });
    } else if (catName) {
      blogs = await Blog.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      blogs = await Blog.find();
    }
    res.status(201).json({ data: blogs });
  } catch (error) {
    console.log("error while getting all the blog " + error);
  }
};

exports.getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.status(201).json({ data: blog });
  } catch (error) {
    console.log("error while getting all the blog " + error);
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog.username === req.body.username) {
      try {
        await Blog.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(201).json({ message: "blog updated" });
      } catch (error) {
        console.log("errow while  " + error);
      }
    } else {
      console.log("error while updating the blog " + error);
    }
  } catch (error) {
    console.log("you can only update your blog " + error);
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog.username === req.body.username) {
      try {
        await blog.deleteOne();
        res.status(201).json({ message: "blog deleted" });
      } catch (error) {
        console.log("errow while  " + error);
      }
    } else {
      console.log("error while deleting the blog " + error);
    }
  } catch (error) {
    console.log("you can only delete your blog " + error);
  }
};
