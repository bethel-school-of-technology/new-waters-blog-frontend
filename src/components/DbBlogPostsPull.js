import React from "react";

import axios from "axios";

class BlogPostsDbPull extends React.Component {
  state = {
    blogPostData: [],
  };

  fetchBlogPostData = () => {
    var encodedURI = window.encodeURI(this.props.uri);
    return axios.get(encodedURI).then((response) => {
      this.setState(() => {
        return {
          blogPostData: response.data,
        };
      });
    });
  };

  componentDidMount() {
    this.fetchBlogPostData();
  }

  render() {
    console.log(this.state.blogPostData);
    if (this.state.blogPostData.length === 0) {
      return <div>Failed to pull blogPosts from database</div>;
    }
    const blogPosts = this.state.blogPostData.map((blogPost) => (
      <div key={blogPost.blogPost}>
        <em>{blogPost.title}</em>:{blogPost.content}
      </div>
    ));
    return <div>{blogPosts}</div>;
  }
}

export default BlogPostsDbPull;
