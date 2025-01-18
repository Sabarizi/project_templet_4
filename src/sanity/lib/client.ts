import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'your_project_id',
  dataset: 'your_dataset_name',
  apiVersion: '2021-06-07',
  useCdn: false,
  token: process.env.SANITY_TOKEN, // Make sure to load the token from environment variables
});
