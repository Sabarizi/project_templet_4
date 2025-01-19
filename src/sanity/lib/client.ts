// sanity/lib/client.ts

import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '24jz38gf',
    dataset: 'production',
    useCdn: true, // `false` if you want to ensure fresh data
    apiVersion: '2023-08-15', // use a UTC date string
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}
