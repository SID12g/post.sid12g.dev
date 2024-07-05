import { articleContents, techContents } from "@/utils/getPosts";

interface TagInfo {
  tag: string;
  count: number;
  link: string;
}

const allTechTags = techContents.map((post) => post.meta.tag);
const allArticleTags = articleContents.map((post) => post.meta.tag);

function getCount(tag: string) {
  return allTechTags.filter((postTag) => postTag == tag).length;
}

const uniqueTechTags = allTechTags.filter(
  (item, index) => allTechTags.indexOf(item) === index
);

const uniqueArticleTags = allArticleTags.filter(
  (item, index) => allArticleTags.indexOf(item) === index
);

function convertToLink(text: string): string {
  return text.toLowerCase().replace(/\s+/g, "-");
}

function generateTagInfo(tags: string[]): TagInfo[] {
  const tagInfoList: TagInfo[] = [];

  tagInfoList.push({
    tag: "All Posts",
    count: allTechTags.length,
    link: "",
  });

  tags.forEach((tag: string) => {
    tagInfoList.push({
      tag: tag,
      count: getCount(tag),
      link: convertToLink(tag),
    });
  });

  return tagInfoList;
}

const techTags = generateTagInfo(uniqueTechTags).sort((a, b) => {
  if (a.count !== b.count) {
    return b.count - a.count;
  } else {
    return a.tag.localeCompare(b.tag);
  }
});
const articleTags = generateTagInfo(uniqueArticleTags).sort((a, b) => {
  if (a.count !== b.count) {
    return b.count - a.count;
  } else {
    return a.tag.localeCompare(b.tag);
  }
});

export { techTags, articleTags };
