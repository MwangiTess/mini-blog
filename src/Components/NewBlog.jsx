import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author }

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(blog), 
        })
        .then(() => {
           console.log("new blog added")
           navigate("/")
        })
    }

    return (
        <div className="text-center mx-auto my-0 max-w-sm">
            <h2 className="text-base text-red-700 mb-7">Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label className="block text-center" >Blog title: </label>
                <input 
                 className="w-full py-2 px-3 my-3 mx-0 block box-border border border-gray-400"
                 type="text" 
                 required
                 placeholder="write the blog title....."
                 value={title}
                 onChange={(e) => setTitle(e.target.value)}
                />
                 <label className="block text-center" >Blog body: </label>
                <textarea 
                 className="w-full py-2 px-3 my-3 mx-0 block box-border border border-gray-400"
                 required
                 placeholder="write the blog body....."
                 value={body}
                 onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label className="block text-center">Blog author: </label>
                <select
                    className="w-full py-2 px-3 my-3 mx-0 block box-border border border-gray-400"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    >
                    <option value="" disabled>
                        Select an author...
                    </option>
                    <option value="marion">mario</option>
                    <option value="luigi">luigi</option>
                </select>
               <button className="bg-red-700 text-white border-0 p-2 rounded-lg cursor-pointer ">Add Blog</button>
              
            </form>

        </div>
    );
}
 
export default NewBlog; 