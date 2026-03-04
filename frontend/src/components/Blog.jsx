import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, blog_data, comments_data } from "../assets/assets";
import Navbar from "../components/Navbar.jsx";
import Moment from "moment";

import toast from "react-hot-toast";
import { useAppContext } from "../context/AppContext.jsx";


const Blog = () => {
  const { id } = useParams();

  const {axios} = useAppContext()

  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const fetchBlogData = async () => {
    const data = blog_data.find((item) => item._id === id);
    setData(data);
    try {
      const {data} = await axios.get(`/api/blog/${id}`)
      data.success ? setData(data.blog) : toast.error(data.message)
    } catch (error) {
      toast.error(error.message)
    }
  };

  const fetchComments = async () => {
     setComments(comments_data);
    try {
      const {data} = await axios.post('/api/blog/comments', {blogId: id})
      if (data.success) {
        setComments(data.comments)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  };

  const addComment = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post('/api/blog/add-comment', {blog: id, name, content});
      if (data.success) {
        toast.success(data.message)
        setName('')
        setContent('')
        fetchComments(); // ✅ refresh comments after adding
      }else{
          toast.error(data.message)
        }
      
      } catch (error) {
        toast.error(error.message)
    }
  };

  useEffect(() => {
    fetchBlogData();
    fetchComments();
  }, []);

  return data ? (
    <div className="min-h-screen relative pt-20 md:pt-24">
      {/* Optional Background */}
      {/* <img className='absolute -top-50 -z-1 opacity-50' src="" alt="" /> */}

      <Navbar />
      {/* Header Section */}
      <div className="text-center mt-20 text-gray-600">
        <p className="text-[#000099] py-4 font-medium">
          Published on {Moment(data.createdAt).format("MMMM Do YYYY")}
        </p>
        <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800">
          {data.title}
        </h1>
        <h2 className="my-5 max-w-lg truncate mx-auto">{data.subTitle}</h2>
        <p className="inline-block py-1 px-4 rounded-full mb-6 border text-sm border-[#0e0e0e] bg-[#fff] font-medium text-[#000099]">
          Mang Inasal
        </p>
      </div>
      {/* Description  */}
      <div className="mx-5 max-w-5xl md:mx-auto my-10 mt-6">
        <img className="rounded-3xl mb-5" src={data.image} alt="" />
        <div
          className="rich-text max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>

        {/* Comment Section */}
        <div className="mt-14 mb-10 max-w-3xl mx-auto">
          <p>Comments ({comments.length})</p>
          <div className="flex flex-col gap-4">
            {comments.map((item, index) => (
              <div
                className="relative bg-[#fff] border border-[#054435]/5 max-w-xl p-4 rounded text-gray-600"
                key={index}
              >
                <div>
                  <img className="w-6" src={assets.user_icon} alt="" />
                  <p className="font-medium">{item.name}</p>
                </div>
                <p className="text-sm max-w-md ml-8">{item.content}</p>
                <div className="absolute right-4 bottom-3 flex items-center gap-2 text-xs">
                  {Moment(item.createdAt).fromNow()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Comment Section */}
        <div className="max-w-3xl mx-auto">
          <p className="font-semibold mb-4">Add your comment</p>
          <form
            className="flex flex-col items-start gap-4 max-w-lg"
            onSubmit={addComment}
          >
            <input
              className="w-full p-2 border border-gray-300 rounded outline-none"
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Name"
              required
            />
            <textarea
              className="w-full p-2 border border-gray-300 rounded outline-none h-48"
              onChange={(e) => setContent(e.target.value)}
              value={content}
              placeholder="Comment"
              required
            ></textarea>

            <button className="bg-[#000099] text-white rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer"type="submit">Submit</button>
          </form>
        </div>
        
        {/* Share Section */}
        <div className="my-24 max-w-3xl mx-auto">
          <p className="font-semibold my-4">Share this Blog on Social Media</p>
          <div className="flex gap-4 items-center">
            <img src={assets.facebook} alt="facebook" className="w-8 h-8 hover:scale-110 transition duration-200 cursor-pointer" />
            <img src={assets.twitter} alt="twitter" className="w-8 h-8 hover:scale-110 transition duration-200 cursor-pointer" />
            <img src={assets.tiktok} alt="tiktok" className="w-8 h-8 hover:scale-110 transition duration-200 cursor-pointer" />
            <img src={assets.instagram} alt="instagram" className="w-8 h-8 hover:scale-110 transition duration-200 cursor-pointer" />
          </div>
        </div>
      </div>
      
    </div>
  ) : (
    <div className="min-h-screen flex items-center justify-center">
      Loading...
    </div>
  );
};

export default Blog;
