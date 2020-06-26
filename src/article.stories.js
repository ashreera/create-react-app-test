import React from 'react';
import { action } from '@storybook/addon-actions';
import "./App.css";  
import NewsArticles from './index';

export default {
  component: NewsArticles,
  title: 'News',
  };

export const articleData = {
  id: '1',
  title: 'Test Task',
  desc: 'TASK_INBOX',
 // updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actionsData = {
    getActricle: action('getActricle'),
    addArticle: action('addArticle'),
    searchArticle: action('searchArticle'),

};

export const Default = () => <NewsArticles task={{ ...articleData, state : 'GET_ARTICLE' }} {...actionsData} />;

export const addNew = () => <NewsArticles task={{ ...articleData, state: 'ADD_ARTICLE' }} {...actionsData} />;

export const seached = () => <NewsArticles task={{ ...articleData, state: 'SEARCH_ARTICLE' }} {...actionsData} />
