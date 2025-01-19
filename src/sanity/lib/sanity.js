import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'yourProjectID',  // Replace with your Sanity project ID
  dataset: 'production',       // Or your dataset name (e.g., 'staging', 'production')
  useCdn: true,                // Set to false if you need fresh data (by default it fetches from CDN)
});

export default client;
