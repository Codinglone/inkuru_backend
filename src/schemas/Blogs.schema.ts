import { Type as T } from "@sinclair/typebox";
import {postBlogController} from "../controllers/Blogs.controller"

export const blogsSchema = T.Object({
    title: T.String(),
    body: T.String(),
})

export const postBlogOpts = {
    schema: {
        body: T.Strict(blogsSchema),
        response: {
            201: blogsSchema
        }
    }, 
    handler: postBlogController
}