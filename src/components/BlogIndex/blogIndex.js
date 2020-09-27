import React from 'react';
import { useContentful } from 'react-contentful';
import Heading from '@chakra-ui/core/dist/Heading';
import Grid from '@chakra-ui/core/dist/Grid';

import Card from '../Card/card';
import Box from '@chakra-ui/core/dist/Box';

const BlogIndex = () => {
  const { data, error, fetched, loading } = useContentful({
    contentType: 'blogPost',
    query: {}
  });

  if (loading || !fetched) {
    return null;
  }

  if (error) {
    console.error(error);
    return null;
  }

  return (
    <Box maxWidth="1280px" marginX="auto" paddingTop="2em">
      <Heading textAlign="center">Contentful demo blog</Heading>
      <Grid
        templateColumns={['1fr', '1fr 1fr', '1fr 1fr', '1fr 1fr 1fr']}
        gap={6}
      >
        {data.items.map(article => (
          <Card
            article={article.fields}
            showDescription={true}
            key={article.fields.slug}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default BlogIndex;
