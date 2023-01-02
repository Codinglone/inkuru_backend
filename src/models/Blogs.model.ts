import { Blogs } from './../entity/Blogs';
import { blogInterface } from "../utils/blogInterface";
import { AppDataSource } from "../data-source";

export class BlogsModel {

    static createBlog = async(payload:blogInterface):Promise<any> => {
        const blogRepo = AppDataSource.getRepository(Blogs)
        const blog = new Blogs();

        return await blogRepo.save({
            ...blog,
            ...payload
        })
    }
}