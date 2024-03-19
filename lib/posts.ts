import { extract } from "$std/front_matter/any.ts";

export interface Post {
  id: string;
  title: string;
  published: Date;
  snippet: string;
  content: string;
}

export async function loadPost(id: string): Promise<Post | null> {
  let text: string;
  try {
    text = await Deno.readTextFile(`./data/posts/${id}.md`);
  } catch (err) {
    if (err instanceof Deno.errors.NotFound) {
      return null;
    }
    throw err;
  }
  const { attrs, body } = extract(text);
  const params = attrs as Record<string, string>;
  const published = new Date(params.published);
  return {
    id,
    title: params.title,
    published,
    snippet: params.snippet,
    content: body,
  };
}

export async function listPosts(): Promise<Post[]> {
  const promises = [];
  for await (const entry of Deno.readDir("./data/posts")) {
    promises.push(loadPost(entry.name.slice(0, -3)));
  }
  const posts = await Promise.all(promises) as Post[];
  posts.sort((a, b) => b.published.getTime() - a.published.getTime());
  return posts;
}
