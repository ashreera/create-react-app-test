
import React from 'react';
import { getActricle } from '../actions/articleAction';
import { addnewpost } from '../components/addnewpost';

export default {
  title: 'newposts',
  component: addnewpost,
};

export const Post = () => <addnewpost articles={getActricle(articles)}> </addnewpost>;

