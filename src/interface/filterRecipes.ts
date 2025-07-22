

export interface RecipeFiltersState {
    cook_time: { gte: number; lte: number };
    courses: string | null;
    cuisine: string | null;
    diets: string | null;
    prep_time: { gte: number; lte: number };
    ingridentName: string | null;
    name: string | null;
}

