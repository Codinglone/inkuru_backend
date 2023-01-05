import { postBlogOpts, getBlogOpts, getSingleBlogOpts } from "../schemas/Blogs.schema";
import { blogsRoutes } from "../utils/enums";

function blogroutes(fastify, opts, done) {
    fastify.post(blogsRoutes.HOME, postBlogOpts)
    fastify.get(blogsRoutes.HOME, getBlogOpts)  
    fastify.get(`${blogsRoutes.HOME}/:id`, getSingleBlogOpts)
    done();
}

module.exports = blogroutes
