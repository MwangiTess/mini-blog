import BlogList from "./BlogList";
import useFetch from "./UseFetch";

const Home = () => {

    const { data: blogs, isLoading, error} = useFetch(' http://localhost:8000/blogs')
    return (
        <div>
            { error && <div>{ error }</div> }
            { isLoading && <div>Loading....</div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs!"/> }
        </div>
    );
}
 
export default Home