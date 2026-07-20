const ReactServerComponent = async () => {
const posts = await db.query("SELECT * FROM posts");
    return (
        <div>
            <h3>React Server Component</h3>
            <ul>
                {posts?.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            
        </div>
    );
};

export default ReactServerComponent;