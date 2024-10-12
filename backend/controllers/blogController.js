const Blog = require('../models/Blog');

exports.createBlog = async (req, res) => {
  const { title, content } = req.body;
  try {
    const blog = new Blog({
      title,
      content,
      user: req.user._id,
      location: req.user.location,
    });
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBlogsByLocation = async (req, res) => {
  const location = req.params.location;
  try {
    const blogs = await Blog.find({ location });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
