import React from 'react'
import { CiSearch } from "react-icons/ci";
import BookCollection from './BookCollection';

const Home = () => {
    const img_list = [
        {
            id:1,
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVONyu-fFDj5CYniO34rAcSzrzgwjOVdNo9vNji89z5QY2tkbZ"
        },
        {
            id:2,
            url:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSTWI2jbL_5WnlqfOKvmzJxlkQbHNcH52imuTJWKV-kj-uGMcTO"
        },
        {
            id:3,
            url:"https://m.media-amazon.com/images/I/510YJlWVzBL.jpg"
        },
        {
            id:4,
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxwJNsUy30p5zCWadY7LTp4HDf_KUGarlRjpenxUghYF-hRPi1"
        },
        {
            id:5,
            url:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1570968358l/45032734.jpg"
        }
    ]

    const books = img_list.map((book) =>
    <li className='p-2' key={book.id}>
        <BookCollection img_url={book.url} id={book.id} />
    </li>
);
    return (
        <section id="home" className="mx-auto min-h-full w-5/6 py-20">
            <div className='md:flex items-center justify-between'>
                <div>
                    <p className='text-white text-sm'>Best way to learn from anywhere.</p>
                    <p className='my-10 text-white font-bold text-7xl'>Find the <span className='text-[#ff631e]'>book</span><br />You're looking<br />For easier to<br /> read.</p>
                    <p className='text-white mt-5'>A globale knowledge platform and marketplace for educators! Deliverin<br />engaging learning to billions.</p>
                    <form className='flex items center justify-start mt-5' action="">
                        <button className="bg-[#07070a] hover:bg-white text-white font-semibold hover:text-[#07070a] py-2 px-6 border border-white hover:border-transparent">
                            <CiSearch />
                        </button>
                        <div className='ml-5 md:w-96 bg-[#07070a]'>
                            <input type="text" id="first_name" className="w-full bg-[#07070a] border border-white text-white text-sm  focus:ring-white focus:border-white p-5 dark:bg-[#07070a] dark:border-white dark:placeholder-white dark:text-white dark:focus:ring-white dark:focus:border-white" placeholder="Find your favorite book" required />
                        </div>
                    </form>
                </div>
                <div className='bg-[#07070a]'>
                    {/*https://i.postimg.cc/W4RJPwT8/dribbble-com-15132845.png*/}
                <img className='border-2 border-[#07070a]' src="/book_man.png" alt="" />
                </div>
            </div>
            <div className='md:flex items-center justify-start'>
            <div className='-rotate-90 pb-32 flex items-center justify-center'>
            <h1 className='text-white'>Recent Bestsellers</h1>
            </div>
            <div className='md:grid grid-rows-1 grid-flow-col gap-16 mt-10'>
              {books}
            </div>
            </div>
        </section>
    )
}

export default Home