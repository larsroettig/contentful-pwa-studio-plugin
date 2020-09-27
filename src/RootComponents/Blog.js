import React from 'react';
import { useParams } from 'react-router';
import { ContentfulProvider } from 'react-contentful';

import { contentfulClient } from '../util/contenfulClient';
import BlogIndex from '../components/BlogIndex';
import BlogPage from '../components/BlogPage';
import CharaUi from '../components/UiContext/uiContext';

const Blog = () => {
  const { slug } = useParams();
  const pageContent = slug ? <BlogPage slug={slug} /> : <BlogIndex />;

  return (
    <ContentfulProvider client={contentfulClient}>
      <CharaUi>{pageContent}</CharaUi>
    </ContentfulProvider>
  );
};

export default Blog;
