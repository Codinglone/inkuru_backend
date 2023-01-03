import { AppDataSource } from "../data-source";
import { Blogs } from './../entity/Blogs';
import { blogInterface } from "../utils/blogInterface";

const blogRepo = AppDataSource.getRepository(Blogs)
export class BlogsModel {

    static createBlog = async(payload:blogInterface):Promise<any> => {
        const blog = new Blogs();

        return await blogRepo.save({
            ...blog,
            ...payload
        })
    }
}