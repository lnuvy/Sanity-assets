import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import { schemaTypes } from './schemas'
import { sanityConfig } from './src/env'

export default defineConfig({
  ...sanityConfig,
  name: 'default',
  title: 'test-asset',
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
