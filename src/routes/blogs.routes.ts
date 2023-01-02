import { postBlogOpts } from "../schemas/Blogs.schema";
import { blogsRoutes } from "../utils/enums";

const blogroutes = (fastify, opts, done) => {
    fastify.post(blogsRoutes.HOME, postBlogOpts)
    done();
}

module.exports = blogroutes
