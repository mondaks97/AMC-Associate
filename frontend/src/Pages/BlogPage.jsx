import React, { useRef } from "react";
import BlogList from "../components/BlogList";
import { useAppContext } from "../context/AppContext";


const BlogPage = () => {
  const { input, setInput } = useAppContext();
  const inputRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
  };


  const onClear = () => {
    setInput('')
    inputRef.current.value = ''
  }
  return (
    <div className="min-h-screen mx-8 sm:mx-16 xl:mx-24 relative">
      <div className="text-center mt-20 mb-8">
        <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-600">
          AMC Blog Something Something
        </h1>
        <p className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
          non aperiam pariatur vero eum facere?
        </p>

        <form
          onSubmit={onSubmitHandler}
          className="flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-500 bg-white rounded overflow-hidden"
        >
          <input
            ref={inputRef}
            className="w-full pl-4 outline-none"
            type="text"
            placeholder="Search for blog"
            required
          />
          <button
            className="bg-[#000099] text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer "
            type="submit"
          >
            Search
          </button>
        </form>
      </div>

      <div className="text-center">
        {input && <button className="border font-light text-xs py-1 px-3 rounded-sm shadow-custom-sm cursor-pointer" onClick={onClear}>Clear Search</button>}
      </div>
      <BlogList />
    </div>
  );
};

export default BlogPage;
