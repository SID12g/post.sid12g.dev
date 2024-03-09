import posts from "@/utils/getPosts";

const allTags = posts.map((post) => post.meta.tag);
function getCount(tag: any) {
  return allTags.filter((postTag) => postTag == tag).length;
}
const uniqueTags = allTags.filter(
  (item, index) => allTags.indexOf(item) === index
);

function convertToSlug(text: string): string {
  return text.toLowerCase().replace(/\s+/g, "-");
}

interface TagInfo {
  tag: string;
  count: number;
  link: string;
}

function generateTagInfo(): TagInfo[] {
  const tagInfoList: TagInfo[] = [];

  tagInfoList.push({
    tag: "All Posts",
    count: allTags.length,
    link: convertToSlug("All Posts"),
  });

  allTags.forEach((tag) => {
    tagInfoList.push({
      tag: tag,
      count: getCount(tag),
      link: convertToSlug(tag),
    });
  });

  return tagInfoList;
}

const tags = generateTagInfo();

const tagStyles = [
  {
    tag: "All Posts",
    border: "black",
    background: "black",
    color: "white",
  },
  {
    tag: "Next",
    border: "aqua",
    background: "blue",
    color: "white",
  },
  {
    tag: "React Native",
    border: "black",
    background: "orange",
    color: "red",
  },
];

export { tagStyles, tags };
