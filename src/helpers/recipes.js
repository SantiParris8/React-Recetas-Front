export const recipeIdGenerator = recipe => {
    const { calories, label } = recipe;
    return `${calories}-${label}`
}