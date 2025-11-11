import BlogPost from "../models/blogspot.mjs";

// Get all posts
export const getAllPosts = async (req, res) => {
  try {
    const posts = await BlogPost.find();

    // Demonstrate virtuals and methods
    const postsWithExtras = posts.map((post) => ({
      id: post._id,
      title: post.title,
      body: post.body,
      url: post.url, // Virtual property
      summary: post.getSummary(50), // Instance method
    }));

    res.render("index", { posts: postsWithExtras });
  } catch (error) {
    res.status(500).send("Error fetching posts: " + error.message);
  }
};

// Get single post by ID
export const getPostById = async (req, res) => {
  try {
    const post = await BlogPost.findById(req.params.id);
    if (!post) {
      return res.status(404).send("Post not found");
    }

    res.render("detail", {
      post: {
        id: post._id,
        title: post.title,
        body: post.body,
        url: post.url, // Virtual
        author: post.author,
        createdAt: post.createdAt,
      },
    });
  } catch (error) {
    res.status(500).send("Error fetching post: " + error.message);
  }
};
