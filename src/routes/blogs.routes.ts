import { postBlogOpts } from "../schemas/Blogs.schema";
import { blogsRoutes } from "../utils/enums";

const blogroutes = (fastify, done, options) => {
    fastify.post(blogsRoutes.HOME, postBlogOpts)
}

module.exports = {
    blogroutes
}