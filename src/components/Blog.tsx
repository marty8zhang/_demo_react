import React from 'react';
import { Blog as BlogData } from '../data/FakeDataSource';

interface BlogProps {
  currentUri: string,
  blog: BlogData,
}
interface BlogState {}

export default class Blog extends React.Component<BlogProps, BlogState> {
  render() {
    const { currentUri, blog } = this.props;
    if (blog === null) {
      return (
        <p className="text-warning">
          The blog with the `
          {currentUri}
          ` URI cannot be found.
        </p>
      );
    }

    return (
      <>
        <h2>{blog.title}</h2>
        <main className="blog-content">{blog.content}</main>
      </>
    );
  }
}
