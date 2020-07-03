import React from 'react';
import { searchArticle } from '../actions/articleAction';
import { searchInput } from '../components/searchArticle';

export default {
  title: 'Searchinput',
  component: searchInput,
};

export const test = () => <searchInput onChange={searchArticle('changed')}> </searchInput>;

