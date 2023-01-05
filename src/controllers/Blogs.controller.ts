import { BlogsModel } from "../models/Blogs.model";

 const postBlogController = async(req, reply) => {
    try {
        const response = await BlogsModel.createBlog(req.body)
        reply.code(201).send(response)
    } catch (error) {
        reply.code(400).send(error)
    }
}

  const getBlogsController = async(req, reply) => {
    try {
        const response = await BlogsModel.getBlogs()
        reply.code(200).send(response);
    } catch (error) {
        reply.code(400).send(error)
    }
  }

  const getSingleBlogController = async(req, reply) => {
    try {
        const response = await BlogsModel.getSingleBlog(req.params.id);
        reply.code(200).send(response);
    } catch (error) {
        reply.code(400).send(error)
    }
  }

export {postBlogController, getBlogsController, getSingleBlogController}