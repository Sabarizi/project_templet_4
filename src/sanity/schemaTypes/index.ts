import { type SchemaTypeDefinition } from 'sanity'
import { productSchma } from './product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchma],
}
