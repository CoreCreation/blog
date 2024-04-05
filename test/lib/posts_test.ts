import { listPosts, loadPost } from "../../lib/posts.ts";

import { assert, assertEquals } from "$std/assert/mod.ts";

Deno.test("post service", async (t) => {
  await t.step("loads a post", async () => {
    const post = await loadPost("test-post");
    assert(post);
    assertEquals(post.id, "test-post");
  });

  await t.step("returns null if no match", async () => {
    const post = await loadPost("missing");
    assertEquals(post, null);
  });

  await t.step("returns a list of posts", async () => {
    const posts = await listPosts();
    assert(posts.length > 1);
    const last = posts.at(-1);
    assert(last);
    assertEquals(last.id, "test-post");
  });
});
