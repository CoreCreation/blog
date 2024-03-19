import { Handlers, PageProps } from "$fresh/server.ts";
import { loadPost } from "../../lib/posts.ts";
import { Post } from "../../lib/posts.ts";

export const handler: Handlers<Post> = {
  async GET(req, ctx) {
    const id = ctx.params.id;
    const post = await loadPost(id);
    if (!post) return new Response("Page not found", { status: 404 });
    return ctx.render(post);
  },
};

export default function BlogPostPage(props: PageProps<Post>) {
  const post = props.data;
  return (
    <div class="container">
      <div class="content">
        <h1>{post.title}</h1>
        <p>{post.published.toLocaleDateString()}</p>
        <p>{post.content}</p>
        <a href="/blog">Back to Blog</a>
        <br />
        <a href="/">Home</a>
      </div>
    </div>
  );
}
