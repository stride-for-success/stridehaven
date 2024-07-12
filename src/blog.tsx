import { useState, useEffect } from 'react';
import './style/blog.css';

interface BlogDetails {
    urlName?: string;
    content?: string;
    title?: string;
    date?: string;
    description?: string;
    author?: string;
}

export function Blog() {
    const [blogPosts, setBlogPosts] = useState<BlogDetails[]>([]);

    useEffect(() => {
        async function fetchBlogPosts() {
            const response = await fetch('https://api.github.com/repos/stride-for-success/runfluence/contents/blog');
            const data = await response.json();
            const posts: BlogDetails[] = [];

            for (const folder of data) {
                let blogDetails: BlogDetails = {};

                blogDetails['urlName'] = folder.name;
                const url = folder.url;

                const folderResponse = await fetch(url);
                const folderData = await folderResponse.json();

                for (const file of folderData) {
                    if (file.name === 'index.md') {
                        const stuffResponse = await fetch(file.download_url);
                        blogDetails['content'] = await stuffResponse.text();
                    } else if (file.name == 'info.json') {
                        const infoResponse = await fetch(file.download_url);
                        const infoData = await infoResponse.json();
                        blogDetails['title'] = infoData.title;
                        blogDetails['date'] = infoData['creation-date'];
                        blogDetails['description'] = infoData.description;
                        blogDetails['author'] = infoData.author;
                    }
                }
                posts.push(blogDetails);
            }
            setBlogPosts(posts);
        }

        fetchBlogPosts();
    }, []);

    const handleClick = (urlName?: string) => {
        if (urlName) {
            document.location.href = `/blog/${urlName}`;
        }
    };

    return (
        <div id="blog">
            <h1 id="theBlogTitle">The Blog</h1>
            <div id="search">
                <input id="searchBar" type="text" placeholder="Search" />
                <button id="searchButton">Search</button>
            </div>
            <div id="blogPosts">
                {blogPosts.map((post, index) => (
                    <div className="blogPost" key={index} onClick={() => handleClick(post.urlName)}>
                        <h2>{post.title}</h2>
                        <h4>{post.description}</h4>
                        <p>{post.author} - {post.date ? new Date(post.date).toLocaleDateString() : 'Date not available'}</p>                    </div>
                ))}
            </div>
        </div>
    );
}


export function BlogPost() {
    return (
        <div id="blogPost">
            <h2 id="blogPostTitle">Title</h2>
            <h3 id="blogPostAuthor">Author</h3>
            <h4 id="blogPostDate">Date</h4>
            <p id="blogPostContent">Content</p>
        </div>
    );

}