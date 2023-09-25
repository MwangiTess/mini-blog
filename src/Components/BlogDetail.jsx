import { useParams, Link, useNavigate } from "react-router-dom";
import useFetch from "./UseFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: blog, error, isLoading } = useFetch("http://localhost:8000/blogs/" + id);

    const handleDelete = () => {
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: "DELETE",
        }) 
        .then(() => {
            navigate("/")
        })
    };

    return (
        <div>
           { error && <div>{ error }</div> }
           { isLoading && <div>Loading....</div> }
           { blog && (
            <article>
                <h2 className="text-xl text-red-700 mb-2">{ blog.title }</h2>
                <p>Written by: { blog.author }</p>
                <div className="my-5"> { blog.body } </div>
                <div className="flex space-x-4"> {/* Use the flex class */}
                    <Link to="/">
                        <button className="bg-red-900 text-white border-0 p-2 rounded-lg cursor-pointer">Go Back</button>
                    </Link>
                    <button 
                    onClick={handleDelete}
                    className="bg-red-900 text-white border-0 p-2 rounded-lg cursor-pointer">
                    Delete
                    </button>
                </div>
            </article>
           )}
        </div>
    );
}

export default BlogDetails;
