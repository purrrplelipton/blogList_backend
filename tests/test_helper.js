/* eslint-disable indent */
const Blog = require("../models/blog");

const blogList = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0,
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0,
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0,
  },
  {
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0,
  },
  {
    _id: "5a422ba71b54a676234d17fb",
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
    __v: 0,
  },
  {
    _id: "5a422bc61b54a676234d17fc",
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2,
    __v: 0,
  },
];

function totalLikes(blogs) {
  const likesArr = blogs.map((blog) => blog.likes);
  return likesArr.reduce((a, b) => a + b, 0);
}

function favoriteBlog(blogs) {
  const likesArr = blogs.map((blog) => blog.likes);
  const mostLikes = likesArr.sort((a, b) => b - a)[0];
  const favoriteBlog = blogs.find((blog) => blog.likes === mostLikes);
  return {
    title: favoriteBlog.title,
    author: favoriteBlog.author,
    likes: favoriteBlog.likes,
  };
}

function mostBlogs(blogs) {
  const obj = {};
  blogs.forEach((blog) => {
    Object.prototype.hasOwnProperty.call(obj, blog.author)
      ? (obj[blog.author] += 1)
      : (obj[blog.author] = 1);
  });

  const mostBlog = Object.entries(obj).sort((a, b) => b[1] - a[1])[0];
  const blogInfo = { author: mostBlog[0], blogs: mostBlog[1] };
  return blogInfo;
}

function mostLikes() {}

async function nonExistingId() {
  const blog = new Blog({ title: "", author: "", url: "" });
  blog.save();
  blog.remove();

  return blog._id.toString();
}
async function blogsInDb() {
  const blogs = await Blog.find({});
  return blogs.map((blog) => blog.toJSON());
}

module.exports = {
  blogList,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
  nonExistingId,
  blogsInDb,
};