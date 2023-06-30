// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
//
// function BoardList() {
//     const [posts, setPosts] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [postsPerPage, setPostsPerPage] = useState(10);
//
//     useEffect(() => {
//         const fetchPosts = async () => {
//             const res = await axios.get(`http://your-api-url/posts?page=${currentPage}`);
//             setPosts(res.data);
//         }
//
//         fetchPosts();
//     }, [currentPage]);
//
//     const handlePageChange = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     }
//
//     return (
//         <div>
//             {posts.map(post => (
//                 <div key={post.id}>
//                     <h2>{post.title}</h2>
//                     <p>{post.body}</p>
//                 </div>
//             ))}
//             <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={handlePageChange} />
//         </div>
//     );
// }
//
// function Pagination({ postsPerPage, totalPosts, paginate }) {
//     const pageNumbers = [];
//
//     for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//         pageNumbers.push(i);
//     }
//
//     return (
//         <nav>
//             <ul className='pagination'>
//                 {pageNumbers.map(number => (
//                     <li key={number} className='page-item'>
//                         <a onClick={() => paginate(number)} className='page-link'>
//                             {number}
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     );
// }
//
// export default BoardList;
