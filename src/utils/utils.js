export function getClassname(title) {
  switch (title.toLowerCase()) {
    case "html":
      return "bg-[#fff1e9]";
    case "css":
      return "bg-[#e0fdef]";
    case "javascript":
      return "bg-[#ebf0ff]";
    case "accessibility":
      return "bg-[#f6e7ff]";
    default:
      return "bg-[#f6e7ff]";
  }
}
