import { ContentfulClient } from 'react-contentful';
import { accessToken, space } from './contentfulClientConfig';

export const contentfulClient = new ContentfulClient({
  accessToken: accessToken,
  space: space
});
