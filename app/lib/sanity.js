import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const projectId = 'jio333cn';
const dataset = 'production';
const apiVersion = `2021-10-18`;


 export const sanityxClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
})

export const builder = imageUrlBuilder(sanityxClient);

