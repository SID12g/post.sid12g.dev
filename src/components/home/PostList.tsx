import styles from '../../styles/PostList.module.css';
import Post from './Post';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDir = "blogs";
const files = fs.readdirSync(path.join(blogDir));

const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8');
    const { data: frontMatter } = matter(fileContent);
    return {
        meta: frontMatter,
        slug: filename.replace('.mdx', ''),
    };
});

export default function PostList() {
    const count = blogs.length
    return (
        <div className={styles.wrap}>
            <p className={styles.header}>📝All Posts ({count})</p>
            {blogs.map((blog, index) => (
                <Post
                    key={index}
                    link={`/posts/${blog.slug}`}
                    date={blog.meta.date}
                    title={blog.meta.title}
                    description={blog.meta.description}
                    image={blog.meta.image}
                    tag={blog.meta.tag}
                />
            ))}
        </div>
    );
}
