import recipeResolver from "./recipeResolver"
import userResolver from "./userResolver";

import { merge } from "lodash"

export const resolvers = merge({}, recipeResolver,userResolver);