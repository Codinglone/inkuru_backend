import { Type as T } from "@sinclair/typebox";
import {postBlogController} from "../controllers/Blogs.controller";

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