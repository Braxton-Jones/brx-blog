import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const getTodaysApiVersion = () => {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() +  1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  };

const projectId = 'jio333cn';
const dataset = 'production';
const apiVersion = getTodaysApiVersion();


 export const sanityxClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
})

export const builder = imageUrlBuilder(sanityxClient);

