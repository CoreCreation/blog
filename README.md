# Blog project

This is a blog project that is being made by following this talk: https://www.youtube.com/watch?v=7OrJP_EeX4s

Currently in the works, its initial goal is to become a custom blog platform for my personal usage. This repo should remain clean so others who ever feel the desire to use it can start their own blogs. 

### Usage

#### Configuration

Ensure a `.env` is present. See the `.env.examples` and `.env.defaults` file for more information.

#### Development

Make sure to install Deno: https://deno.land/manual/getting_started/installation

Then start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.

#### Testing

Currently testing should be started with the test task `deno task test`. This is subject to change as more is learned about the system and a better test configuration option is found. 
