import { Handlers, PageProps } from "$fresh/server.ts";
import { listPosts, Post } from "../lib/posts.ts";

export const handler: Handlers<Post[]> = {
  async GET(req, ctx) {
    const posts = await listPosts();
    return ctx.render(posts);
  },
};

export default function BlogListPage(props: PageProps<Post[]>) {
  const posts = props.data;
  return (
    <div class="container">
      <div class="content">
        <h1>Blog</h1>
        <ul>
          {posts.map((post) => <PostEntry post={post} />)}
        </ul>
        <a href="/">Go back home</a>
      </div>
    </div>
  );
}

function PostEntry(props: { post: Post }) {
  return (
    <li>
      <a href={`/blog/${props.post.id}`}>
        <div>
          {props.post.published.toLocaleDateString()} - {props.post.title}
        </div>
        <div>{props.post.snippet}</div>
      </a>
    </li>
  );
}
