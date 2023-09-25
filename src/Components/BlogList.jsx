import { Link } from "react-router-dom";

const BlogList = ({blogs, title}) => {

    return (
        <div>
            <p className="font-bold text-2xl">{ title }</p>
            {blogs && blogs.map((blog) => (
            <div key={blog.id} className="py-3 px-4 my-5 mx-0 border-b-2 border-s-gray-100 hover:shadow-md hover:bg-gray-50">
                <Link to={`/blogs/${blog.id}`}>
                    <h2 className="text-red-700 text-xl mb-2">{ blog.title }</h2>
                    <p className="font-light text-sm"> Written by { blog.author }</p>
                </Link>
            </div>
           )) }
        </div>
    );
}
 
export default BlogList;

