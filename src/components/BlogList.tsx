import React from 'react';
import { Link } from 'react-router-dom';
import { Blog as BlogData } from '../data/FakeDataSource';

interface BlogListProps {
  parentUri?: string,
  currentUri: string,
  blogs: BlogData[],
}
interface BlogListState {}

export default class BlogList extends React.Component<BlogListProps, BlogListState> {
  render() {
    const { parentUri = '', currentUri, blogs } = this.props;

    return (
      <div className="list-group">
        {blogs.map((blog, index) => {
          const additionalClassNames = (currentUri === null && index === 0)
            || blog.uri === currentUri ? 'active' : '';

          return (
            <Link
              key={blog.uri}
              className={`list-group-item ${additionalClassNames}`}
              to={`${parentUri === '' ? '' : `${parentUri}/`}${blog.uri}`}
            >
              {blog.title}
            </Link>
          );
        })}
      </div>
    );
  }
}
