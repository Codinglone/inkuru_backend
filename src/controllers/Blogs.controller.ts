import { BlogsModel } from "../models/Blogs.model";

export const postBlogController = async (req, reply) => {
    try {
        const response = await BlogsModel.createBlog(req.body)
        reply.code(201).send(response)
    } catch (error) {
        reply.code(400).send(error)
    }
}

