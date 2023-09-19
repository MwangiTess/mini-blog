import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const[blogs, setBlogs] = useState(null);
    const[isLoading, setIsLoading] = useState(true);
    const[error, setError] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(response => {
                if(!response.ok){
                    throw Error('Could not fetch the data from the server')
                }
                return  response.json();
            })
            .then((data) => {
                setBlogs(data);
                setIsLoading(false);
                setError(null)
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err.message);
            });
    },[]);

    return (
        <div>
            { error && <div>{ error }</div> }
            { isLoading && <div>Loading....</div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs!"/> }
        </div>
    );
}
 
export default Home