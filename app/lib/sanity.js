import { createClient } from "next-sanity";

const projectId = 'jio333cn';
const dataset = 'production';
const apiVersion = '2023-01-21';

export const sanityxClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
})

