import { postBlogOpts, getBlogOpts } from "../schemas/Blogs.schema";
import { blogsRoutes } from "../utils/enums";

function blogroutes(fastify, opts, done) {
    fastify.post(blogsRoutes.HOME, postBlogOpts)
    fastify.get(blogsRoutes.HOME, getBlogOpts)
    done();
}

module.exports = blogroutes
