import React from 'react';
import { Box, Image, Text, Link } from '@chakra-ui/core';

const Card = ({ article }) => {
  const image = article.heroImage.fields.file.url ? (
    <Image rounded="md" src={article.heroImage.fields.file.url} />
  ) : (
    ''
  );
  return (
    <Box p="5">
      <Link href={'/blog/' + article.slug}>
        {image}
        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
          {article.title}
        </Text>
        <Text mt={2}>{article.description}</Text>
      </Link>
    </Box>
  );
};

export default Card;
