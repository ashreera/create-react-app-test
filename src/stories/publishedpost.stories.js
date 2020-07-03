import React from 'react';
import { getActricle } from '../actions/articleAction';
import { publishedPost } from '../components/publishedpost';

export default {
  title: 'publishedpost',
  component: publishedPost,
};

export const Post = () => <publishedPost articles={getActricle()}> </publishedPost>;

