import { Type as T } from "@sinclair/typebox";
import {postBlogController, getBlogsController} from "../controllers/Blogs.controller";

export const blogsSchema = T.Object({
    title: T.String(),
    body: T.String(),
})

export const getBlogsSchema = T.Object({
    id: T.Number(),
    title: T.String(),
    body: T.String(),
    createdOn: T.String(),
    updatedOn: T.String()
})

export const postBlogOpts = {
    schema: {
        body: T.Strict(blogsSchema),
        response: {
            201: getBlogsSchema
        }
    }, 
    handler: postBlogController
}

export const getBlogOpts = {
    schema: {
        response: {
            200: T.Array(getBlogsSchema)
        }
    },
    handler: getBlogsController
}