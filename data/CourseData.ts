import { IComment } from "types/apiType";

export interface ICourseData {
  idx: number;
  title: string;
  content: string;
  writer: string;
  replyCnt: number;
  date: string;
  start: string;
  end: string;
  tags: string[];
  like: boolean;
}

export const COURSES: ICourseData[] = [
  {
    idx: 1,
    title:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis mi in ante iaculis malesuada. Suspendisse faucibus viverra quam a imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam tortor tortor, volutpat et bibendum ut, pharetra sit amet odio. Pellentesque ut ultricies mauris, vitae interdum massa. Vestibulum eget nisi ut erat interdum auctor in vitae dui. Fusce pulvinar velit a tellus pellentesque rutrum. Vestibulum quis leo metus. Morbi quis tellus vitae mauris venenatis elementum vel in enim. Pellentesque et eros faucibus ex facilisis vestibulum. Ut convallis ante eget libero faucibus ultricies. Sed nec odio enim. Sed vel sapien at velit vestibulum cursus eu vel sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris arcu, laoreet eu ante ut, placerat laoreet ligula.",
    writer: "admin",
    replyCnt: 1,
    date: "2022-02-19",
    start: "2022-02-22",
    end: "2022-02-23",
    tags: ["통영1박2일", "광화문갈만한곳", "서울근교", "태국"],
    like: true,
  },
  {
    idx: 2,
    title:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis mi in ante iaculis malesuada. Suspendisse faucibus viverra quam a imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam tortor tortor, volutpat et bibendum ut, pharetra sit amet odio. Pellentesque ut ultricies mauris, vitae interdum massa. Vestibulum eget nisi ut erat interdum auctor in vitae dui. Fusce pulvinar velit a tellus pellentesque rutrum. Vestibulum quis leo metus. Morbi quis tellus vitae mauris venenatis elementum vel in enim. Pellentesque et eros faucibus ex facilisis vestibulum. Ut convallis ante eget libero faucibus ultricies. Sed nec odio enim. Sed vel sapien at velit vestibulum cursus eu vel sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris arcu, laoreet eu ante ut, placerat laoreet ligula.",
    writer: "admin",
    replyCnt: 3,
    date: "2022-02-19",
    start: "2022-02-22",
    end: "2022-02-23",
    tags: ["통영1박2일", "태국"],
    like: true,
  },
  {
    idx: 3,
    title:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis mi in ante iaculis malesuada. Suspendisse faucibus viverra quam a imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam tortor tortor, volutpat et bibendum ut, pharetra sit amet odio. Pellentesque ut ultricies mauris, vitae interdum massa. Vestibulum eget nisi ut erat interdum auctor in vitae dui. Fusce pulvinar velit a tellus pellentesque rutrum. Vestibulum quis leo metus. Morbi quis tellus vitae mauris venenatis elementum vel in enim. Pellentesque et eros faucibus ex facilisis vestibulum. Ut convallis ante eget libero faucibus ultricies. Sed nec odio enim. Sed vel sapien at velit vestibulum cursus eu vel sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris arcu, laoreet eu ante ut, placerat laoreet ligula.",
    writer: "admin",
    replyCnt: 3,
    date: "2022-02-13",
    start: "2022-02-22",
    end: "2022-02-23",
    tags: [],
    like: true,
  },
  {
    idx: 4,
    title:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis mi in ante iaculis malesuada. Suspendisse faucibus viverra quam a imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam tortor tortor, volutpat et bibendum ut, pharetra sit amet odio. Pellentesque ut ultricies mauris, vitae interdum massa. Vestibulum eget nisi ut erat interdum auctor in vitae dui. Fusce pulvinar velit a tellus pellentesque rutrum. Vestibulum quis leo metus. Morbi quis tellus vitae mauris venenatis elementum vel in enim. Pellentesque et eros faucibus ex facilisis vestibulum. Ut convallis ante eget libero faucibus ultricies. Sed nec odio enim. Sed vel sapien at velit vestibulum cursus eu vel sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris arcu, laoreet eu ante ut, placerat laoreet ligula.",
    writer: "admin",
    replyCnt: 1,
    date: "2022-02-20",
    start: "2022-02-22",
    end: "2022-02-23",
    tags: ["제주"],
    like: true,
  },
  {
    idx: 5,
    title:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis mi in ante iaculis malesuada. Suspendisse faucibus viverra quam a imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam tortor tortor, volutpat et bibendum ut, pharetra sit amet odio. Pellentesque ut ultricies mauris, vitae interdum massa. Vestibulum eget nisi ut erat interdum auctor in vitae dui. Fusce pulvinar velit a tellus pellentesque rutrum. Vestibulum quis leo metus. Morbi quis tellus vitae mauris venenatis elementum vel in enim. Pellentesque et eros faucibus ex facilisis vestibulum. Ut convallis ante eget libero faucibus ultricies. Sed nec odio enim. Sed vel sapien at velit vestibulum cursus eu vel sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris arcu, laoreet eu ante ut, placerat laoreet ligula.",
    writer: "admin",
    replyCnt: 3,
    date: "2022-02-19",
    start: "2022-02-22",
    end: "2022-02-23",
    tags: ["서울근교", "태국"],
    like: true,
  },
  {
    idx: 6,
    title:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis mi in ante iaculis malesuada. Suspendisse faucibus viverra quam a imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam tortor tortor, volutpat et bibendum ut, pharetra sit amet odio. Pellentesque ut ultricies mauris, vitae interdum massa. Vestibulum eget nisi ut erat interdum auctor in vitae dui. Fusce pulvinar velit a tellus pellentesque rutrum. Vestibulum quis leo metus. Morbi quis tellus vitae mauris venenatis elementum vel in enim. Pellentesque et eros faucibus ex facilisis vestibulum. Ut convallis ante eget libero faucibus ultricies. Sed nec odio enim. Sed vel sapien at velit vestibulum cursus eu vel sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris arcu, laoreet eu ante ut, placerat laoreet ligula.",
    writer: "admin",
    replyCnt: 0,
    date: "2022-02-19",
    start: "2022-02-22",
    end: "2022-02-23",
    tags: ["태국"],
    like: true,
  },
  {
    idx: 7,
    title:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis mi in ante iaculis malesuada. Suspendisse faucibus viverra quam a imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam tortor tortor, volutpat et bibendum ut, pharetra sit amet odio. Pellentesque ut ultricies mauris, vitae interdum massa. Vestibulum eget nisi ut erat interdum auctor in vitae dui. Fusce pulvinar velit a tellus pellentesque rutrum. Vestibulum quis leo metus. Morbi quis tellus vitae mauris venenatis elementum vel in enim. Pellentesque et eros faucibus ex facilisis vestibulum. Ut convallis ante eget libero faucibus ultricies. Sed nec odio enim. Sed vel sapien at velit vestibulum cursus eu vel sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris arcu, laoreet eu ante ut, placerat laoreet ligula.",
    writer: "admin",
    replyCnt: 5,
    date: "2022-02-19",
    start: "2022-02-22",
    end: "2022-02-23",
    tags: ["통영1박2일"],
    like: true,
  },
  {
    idx: 8,
    title:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis mi in ante iaculis malesuada. Suspendisse faucibus viverra quam a imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam tortor tortor, volutpat et bibendum ut, pharetra sit amet odio. Pellentesque ut ultricies mauris, vitae interdum massa. Vestibulum eget nisi ut erat interdum auctor in vitae dui. Fusce pulvinar velit a tellus pellentesque rutrum. Vestibulum quis leo metus. Morbi quis tellus vitae mauris venenatis elementum vel in enim. Pellentesque et eros faucibus ex facilisis vestibulum. Ut convallis ante eget libero faucibus ultricies. Sed nec odio enim. Sed vel sapien at velit vestibulum cursus eu vel sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris arcu, laoreet eu ante ut, placerat laoreet ligula.",
    writer: "admin",
    replyCnt: 2,
    date: "2022-02-18",
    start: "2022-02-22",
    end: "2022-02-23",
    tags: [],
    like: true,
  },
  {
    idx: 9,
    title:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis mi in ante iaculis malesuada. Suspendisse faucibus viverra quam a imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam tortor tortor, volutpat et bibendum ut, pharetra sit amet odio. Pellentesque ut ultricies mauris, vitae interdum massa. Vestibulum eget nisi ut erat interdum auctor in vitae dui. Fusce pulvinar velit a tellus pellentesque rutrum. Vestibulum quis leo metus. Morbi quis tellus vitae mauris venenatis elementum vel in enim. Pellentesque et eros faucibus ex facilisis vestibulum. Ut convallis ante eget libero faucibus ultricies. Sed nec odio enim. Sed vel sapien at velit vestibulum cursus eu vel sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris arcu, laoreet eu ante ut, placerat laoreet ligula.",
    writer: "admin",
    replyCnt: 11,
    date: "2022-02-19",
    start: "2022-02-22",
    end: "2022-02-23",
    tags: ["통영1박2일", "광화문갈만한곳", "태국"],
    like: true,
  },
  {
    idx: 10,
    title:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis mi in ante iaculis malesuada. Suspendisse faucibus viverra quam a imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam tortor tortor, volutpat et bibendum ut, pharetra sit amet odio. Pellentesque ut ultricies mauris, vitae interdum massa. Vestibulum eget nisi ut erat interdum auctor in vitae dui. Fusce pulvinar velit a tellus pellentesque rutrum. Vestibulum quis leo metus. Morbi quis tellus vitae mauris venenatis elementum vel in enim. Pellentesque et eros faucibus ex facilisis vestibulum. Ut convallis ante eget libero faucibus ultricies. Sed nec odio enim. Sed vel sapien at velit vestibulum cursus eu vel sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris arcu, laoreet eu ante ut, placerat laoreet ligula.",
    writer: "admin",
    replyCnt: 1,
    date: "2022-02-19",
    start: "2022-02-22",
    end: "2022-02-23",
    tags: ["통영1박2일", "광화문갈만한곳", "서울근교"],
    like: true,
  },
  {
    idx: 11,
    title:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis mi in ante iaculis malesuada. Suspendisse faucibus viverra quam a imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam tortor tortor, volutpat et bibendum ut, pharetra sit amet odio. Pellentesque ut ultricies mauris, vitae interdum massa. Vestibulum eget nisi ut erat interdum auctor in vitae dui. Fusce pulvinar velit a tellus pellentesque rutrum. Vestibulum quis leo metus. Morbi quis tellus vitae mauris venenatis elementum vel in enim. Pellentesque et eros faucibus ex facilisis vestibulum. Ut convallis ante eget libero faucibus ultricies. Sed nec odio enim. Sed vel sapien at velit vestibulum cursus eu vel sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris arcu, laoreet eu ante ut, placerat laoreet ligula.",
    writer: "admin",
    replyCnt: 1,
    date: "2022-02-19",
    start: "2022-02-22",
    end: "2022-02-23",
    tags: ["통영1박2일", "서울근교", "태국"],
    like: true,
  },
];

export const COURSETAGS: string[] = ["ALL", "부산", "제주도", "인생샷"];
