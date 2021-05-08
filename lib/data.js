import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "_content");

export function getAllSnippets() {
  const allSnippets = fs.readdirSync(contentDir);

  return allSnippets.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const fileContents = fs.readFileSync(
      path.join(contentDir, fileName),
      "utf-8"
    );
    const { data, content } = matter(fileContents);

    return {
      data,
      content,
      slug
    };
  });
}