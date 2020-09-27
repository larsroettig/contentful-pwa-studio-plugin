import React from 'react';
import { useContentful } from 'react-contentful';
import Box from '@chakra-ui/core/dist/Box';
import Link from '@chakra-ui/core/dist/Link';
import Heading from '@chakra-ui/core/dist/Heading';
import Image from '@chakra-ui/core/dist/Image';
import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

const BlogPage = props => {
  const { slug } = props;

  const { data, error, fetched, loading } = useContentful({
    contentType: 'blogPost',
    query: {
      'fields.slug[in]': slug
    }
  });

  if (loading || !fetched) {
    return null;
  }

  if (error) {
    console.error(error);
    return null;
  }

  if (!data.items[0]) {
    return (
      <Box maxWidth="1280px" marginX="auto" paddingTop="2em">
        <p>Page does not exist.</p>
      </Box>
    );
  }

  const postData = data.items[0];

  return (
    <Box maxWidth="1280px" marginX="auto" paddingTop="2em">
      <Link href="/blog" paddingY="20px" color="teal.500">
        Back to overview
      </Link>
      <Heading>{postData.fields.title}</Heading>
      <Image
        rounded="md"
        src={postData.fields.heroImage.fields.file.url}
        paddingY="20px"
      />
      <ReactMarkdown
        renderers={ChakraUIRenderer()}
        source={postData.fields.body}
        escapeHtml={false}
      />
    </Box>
  );
};

export default BlogPage;
