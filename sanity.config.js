import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'brx-blog',
  projectId: 'jio333cn',
  dataset: 'production',
  basePath: '/blogstudio',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
