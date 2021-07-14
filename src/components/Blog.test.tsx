import React from 'react';
import { render } from '@testing-library/react';
import Blog from './Blog';

test('warns when no blog data provided', () => {
  const { getByText } = render(<Blog
    currentUri="non-existing-blog"
    blog={null}
  />);
  expect(getByText('The blog with the `non-existing-blog` URI cannot be found.'))
    .toBeInTheDocument();
});

test('renders a blog by the given data', () => {
  const { rerender, getByRole } = render(<Blog
    currentUri="blog-1"
    blog={{ uri: 'blog-1', title: 'Blog 1', content: 'Blog 1 content.' }}
  />);
  expect(getByRole('heading')).toHaveTextContent('Blog 1');
  expect(getByRole('main')).toHaveTextContent('Blog 1 content.');

  rerender(<Blog
    currentUri="blog-2"
    blog={{ uri: 'blog-2', title: 'Blog 2', content: 'Blog 2 content.' }}
  />);
  expect(getByRole('heading')).toHaveTextContent('Blog 2');
  expect(getByRole('main')).toHaveTextContent('Blog 2 content.');
});
