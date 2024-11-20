import recipeResolver from "./recipeResolver"
import { merge } from "lodash"

export const resolvers = merge({}, recipeResolver);