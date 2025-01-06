import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { sanityConfig } from './src/env'

export default defineConfig({
  name: 'default',
  title: 'test-asset',
  ...sanityConfig,
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
