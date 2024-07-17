export function formatExpression(expression: string): string {
  return expression
    .replace(/###\s*(.*?):/g, "<h1><strong>$1:</strong></h1>") // Convert ### followed by text and a colon into H1 title
    .replace(/^\s*-\s*/gm, "• ") // Convert dashes at the beginning of lines to bullet points
    .replace(/\n/g, "<br>") // Line breaks
    .replace(/"/g, "&quot;") // Escape double quotes for HTML
    .replace(/'/g, "&#39;") // Escape single quotes for HTML
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"); // Bolden words surrounded by **
}
