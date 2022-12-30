import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: false,
    apiVersion: '2022-12-22',
};

export const sanityClient = createClient(config);

export const urlFor = (source) => imageUrlBuilder(config).image(source);