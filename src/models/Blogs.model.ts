import { AppDataSource } from "../data-source";
import { Blogs } from './../entity/Blogs';
import { blogInterface } from "../utils/blogInterface";

const blogRepo = AppDataSource.getRepository(Blogs)
export class BlogsModel {

    static createBlog = async (payload: blogInterface): Promise<any> => {
        const blog = new Blogs();

        return await blogRepo.save({
            ...blog,
            ...payload
        })
    }

    static getBlogs = async (): Promise<any> => {
        return await blogRepo.find({
            order: {
                createdOn: 'DESC'
            }
        })
    }

    static getSingleBlog = async (id: any):Promise<any> => {
        return await blogRepo.findOneBy({id})
    }

    static deleteBlog = async (id: any):Promise<any> => {
        const blogToDelete = await blogRepo.findOneBy({id})
        return await blogRepo.delete(blogToDelete.id)
    }
}