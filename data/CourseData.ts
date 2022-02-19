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

export const REPLYDATA: IComment[] = [
  {
    id: "admin",
    updatedAt: "2022-02-04",
    content:
      "Nam semper, mi vel scelerisque sagittis, libero magna tempor velit, a venenatis lorem turpis non nisi. Aliquam id tellus eget quam hendrerit aliquam efficitur eget libero. Integer vitae nunc feugiat, eleifend mi vitae, pellentesque libero. Fusce vitae sollicitudin nisi. Aenean dictum purus vel sollicitudin ornare. Donec tristique mattis elit, id faucibus risus sollicitudin et. Donec mattis nisi leo, ac luctus tellus egestas vel. Vestibulum at dolor ac mi aliquet consectetur eu quis nisi. Nunc et tincidunt nulla, id finibus nisl. In consectetur posuere tortor, a rhoncus nisl placerat non. Aenean ullamcorper pulvinar ante eu elementum. Sed non laoreet ante. Curabitur convallis, quam dictum dictum bibendum, urna dolor imperdiet dui, sed tincidunt orci neque at turpis. Duis vulputate ultricies nibh nec posuere.",
  },
  {
    id: "admin",
    updatedAt: "2022-02-04",
    content:
      "Mauris bibendum lectus id arcu dapibus aliquet. Cras faucibus congue metus, nec vestibulum ipsum scelerisque non. Nam ullamcorper fermentum turpis, eu varius urna fermentum nec. Pellentesque hendrerit risus nec pretium porttitor. Suspendisse volutpat nulla est, sit amet accumsan tortor finibus a. Sed id turpis consectetur, interdum tellus a, tempus felis. Integer ac lacus non neque sollicitudin elementum. Cras ut faucibus sem. Phasellus tristique pharetra venenatis. Duis sollicitudin vitae massa sit amet cursus. Morbi rutrum consequat ipsum eget commodo. Sed ultricies lacus id elit dignissim, fermentum porttitor lectus lacinia. Praesent pharetra posuere elit id commodo. Etiam vel risus eget tellus ullamcorper imperdiet nec vitae libero. Maecenas commodo nunc nunc, ut convallis dui faucibus nec. Morbi eu volutpat dui.",
  },
  {
    id: "ha4219",
    updatedAt: "2022-02-04",
    content:
      "Quisque ut sapien id leo dictum pellentesque quis et dui. Morbi ultricies elementum lorem, eu placerat ligula semper et. Ut porta sagittis nibh a tristique. Proin tincidunt vulputate erat, quis accumsan lectus tempor vel. Fusce interdum auctor eleifend. Curabitur venenatis tellus nunc, at viverra erat gravida vitae. Ut varius ante eget volutpat suscipit. In rhoncus mauris a elementum consequat. Integer id nunc ut neque porttitor condimentum vitae a massa. Ut scelerisque, enim vitae euismod sollicitudin, urna dui dapibus eros, sit amet vehicula lacus nulla a lacus. Nullam eu augue venenatis metus ullamcorper iaculis. Aliquam rutrum imperdiet diam, sit amet interdum sapien tempus a. Proin ut fringilla felis. Pellentesque facilisis felis pharetra eros auctor commodo. Proin varius erat ut augue consequat aliquam.",
  },
  {
    id: "dongha4219",
    updatedAt: "2022-02-04",
    content:
      "Quisque vel sapien consequat, sodales erat ut, lobortis felis. Donec in est feugiat, dapibus mi vitae, molestie tellus. Curabitur ex enim, posuere vitae semper id, varius quis tellus. Donec faucibus tellus nisi, quis maximus massa volutpat id. Donec pretium fermentum laoreet. Nulla efficitur massa eu leo feugiat, at faucibus sem faucibus. Ut sit amet mi ac ligula tempus maximus. Morbi vitae lacus mattis, aliquet orci quis, pellentesque nisi. Aenean ex lectus, accumsan eget cursus quis, hendrerit in quam. Cras purus lorem, tristique a rhoncus a, feugiat rutrum odio. Praesent non ornare neque. In condimentum, arcu eu aliquet porttitor, felis ex fringilla libero, et blandit metus justo vitae odio. Duis venenatis ante ac ante tincidunt aliquam sit amet ut mi. Phasellus mattis dolor ac rutrum imperdiet.",
  },
  {
    id: "admin",
    updatedAt: "2022-02-04",
    content:
      "Nam semper, mi vel scelerisque sagittis, libero magna tempor velit, a venenatis lorem turpis non nisi. Aliquam id tellus eget quam hendrerit aliquam efficitur eget libero. Integer vitae nunc feugiat, eleifend mi vitae, pellentesque libero. Fusce vitae sollicitudin nisi. Aenean dictum purus vel sollicitudin ornare. Donec tristique mattis elit, id faucibus risus sollicitudin et. Donec mattis nisi leo, ac luctus tellus egestas vel. Vestibulum at dolor ac mi aliquet consectetur eu quis nisi. Nunc et tincidunt nulla, id finibus nisl. In consectetur posuere tortor, a rhoncus nisl placerat non. Aenean ullamcorper pulvinar ante eu elementum. Sed non laoreet ante. Curabitur convallis, quam dictum dictum bibendum, urna dolor imperdiet dui, sed tincidunt orci neque at turpis. Duis vulputate ultricies nibh nec posuere.",
  },
  {
    id: "admin",
    updatedAt: "2022-02-04",
    content:
      "Mauris bibendum lectus id arcu dapibus aliquet. Cras faucibus congue metus, nec vestibulum ipsum scelerisque non. Nam ullamcorper fermentum turpis, eu varius urna fermentum nec. Pellentesque hendrerit risus nec pretium porttitor. Suspendisse volutpat nulla est, sit amet accumsan tortor finibus a. Sed id turpis consectetur, interdum tellus a, tempus felis. Integer ac lacus non neque sollicitudin elementum. Cras ut faucibus sem. Phasellus tristique pharetra venenatis. Duis sollicitudin vitae massa sit amet cursus. Morbi rutrum consequat ipsum eget commodo. Sed ultricies lacus id elit dignissim, fermentum porttitor lectus lacinia. Praesent pharetra posuere elit id commodo. Etiam vel risus eget tellus ullamcorper imperdiet nec vitae libero. Maecenas commodo nunc nunc, ut convallis dui faucibus nec. Morbi eu volutpat dui.",
  },
  {
    id: "ha4219",
    updatedAt: "2022-02-04",
    content:
      "Quisque ut sapien id leo dictum pellentesque quis et dui. Morbi ultricies elementum lorem, eu placerat ligula semper et. Ut porta sagittis nibh a tristique. Proin tincidunt vulputate erat, quis accumsan lectus tempor vel. Fusce interdum auctor eleifend. Curabitur venenatis tellus nunc, at viverra erat gravida vitae. Ut varius ante eget volutpat suscipit. In rhoncus mauris a elementum consequat. Integer id nunc ut neque porttitor condimentum vitae a massa. Ut scelerisque, enim vitae euismod sollicitudin, urna dui dapibus eros, sit amet vehicula lacus nulla a lacus. Nullam eu augue venenatis metus ullamcorper iaculis. Aliquam rutrum imperdiet diam, sit amet interdum sapien tempus a. Proin ut fringilla felis. Pellentesque facilisis felis pharetra eros auctor commodo. Proin varius erat ut augue consequat aliquam.",
  },
  {
    id: "dongha4219",
    updatedAt: "2022-02-04",
    content:
      "Quisque vel sapien consequat, sodales erat ut, lobortis felis. Donec in est feugiat, dapibus mi vitae, molestie tellus. Curabitur ex enim, posuere vitae semper id, varius quis tellus. Donec faucibus tellus nisi, quis maximus massa volutpat id. Donec pretium fermentum laoreet. Nulla efficitur massa eu leo feugiat, at faucibus sem faucibus. Ut sit amet mi ac ligula tempus maximus. Morbi vitae lacus mattis, aliquet orci quis, pellentesque nisi. Aenean ex lectus, accumsan eget cursus quis, hendrerit in quam. Cras purus lorem, tristique a rhoncus a, feugiat rutrum odio. Praesent non ornare neque. In condimentum, arcu eu aliquet porttitor, felis ex fringilla libero, et blandit metus justo vitae odio. Duis venenatis ante ac ante tincidunt aliquam sit amet ut mi. Phasellus mattis dolor ac rutrum imperdiet.",
  },
  {
    id: "admin",
    updatedAt: "2022-02-04",
    content:
      "Nam semper, mi vel scelerisque sagittis, libero magna tempor velit, a venenatis lorem turpis non nisi. Aliquam id tellus eget quam hendrerit aliquam efficitur eget libero. Integer vitae nunc feugiat, eleifend mi vitae, pellentesque libero. Fusce vitae sollicitudin nisi. Aenean dictum purus vel sollicitudin ornare. Donec tristique mattis elit, id faucibus risus sollicitudin et. Donec mattis nisi leo, ac luctus tellus egestas vel. Vestibulum at dolor ac mi aliquet consectetur eu quis nisi. Nunc et tincidunt nulla, id finibus nisl. In consectetur posuere tortor, a rhoncus nisl placerat non. Aenean ullamcorper pulvinar ante eu elementum. Sed non laoreet ante. Curabitur convallis, quam dictum dictum bibendum, urna dolor imperdiet dui, sed tincidunt orci neque at turpis. Duis vulputate ultricies nibh nec posuere.",
  },
  {
    id: "admin",
    updatedAt: "2022-02-04",
    content:
      "Mauris bibendum lectus id arcu dapibus aliquet. Cras faucibus congue metus, nec vestibulum ipsum scelerisque non. Nam ullamcorper fermentum turpis, eu varius urna fermentum nec. Pellentesque hendrerit risus nec pretium porttitor. Suspendisse volutpat nulla est, sit amet accumsan tortor finibus a. Sed id turpis consectetur, interdum tellus a, tempus felis. Integer ac lacus non neque sollicitudin elementum. Cras ut faucibus sem. Phasellus tristique pharetra venenatis. Duis sollicitudin vitae massa sit amet cursus. Morbi rutrum consequat ipsum eget commodo. Sed ultricies lacus id elit dignissim, fermentum porttitor lectus lacinia. Praesent pharetra posuere elit id commodo. Etiam vel risus eget tellus ullamcorper imperdiet nec vitae libero. Maecenas commodo nunc nunc, ut convallis dui faucibus nec. Morbi eu volutpat dui.",
  },
  {
    id: "ha4219",
    updatedAt: "2022-02-04",
    content:
      "Quisque ut sapien id leo dictum pellentesque quis et dui. Morbi ultricies elementum lorem, eu placerat ligula semper et. Ut porta sagittis nibh a tristique. Proin tincidunt vulputate erat, quis accumsan lectus tempor vel. Fusce interdum auctor eleifend. Curabitur venenatis tellus nunc, at viverra erat gravida vitae. Ut varius ante eget volutpat suscipit. In rhoncus mauris a elementum consequat. Integer id nunc ut neque porttitor condimentum vitae a massa. Ut scelerisque, enim vitae euismod sollicitudin, urna dui dapibus eros, sit amet vehicula lacus nulla a lacus. Nullam eu augue venenatis metus ullamcorper iaculis. Aliquam rutrum imperdiet diam, sit amet interdum sapien tempus a. Proin ut fringilla felis. Pellentesque facilisis felis pharetra eros auctor commodo. Proin varius erat ut augue consequat aliquam.",
  },
  {
    id: "dongha4219",
    updatedAt: "2022-02-04",
    content:
      "Quisque vel sapien consequat, sodales erat ut, lobortis felis. Donec in est feugiat, dapibus mi vitae, molestie tellus. Curabitur ex enim, posuere vitae semper id, varius quis tellus. Donec faucibus tellus nisi, quis maximus massa volutpat id. Donec pretium fermentum laoreet. Nulla efficitur massa eu leo feugiat, at faucibus sem faucibus. Ut sit amet mi ac ligula tempus maximus. Morbi vitae lacus mattis, aliquet orci quis, pellentesque nisi. Aenean ex lectus, accumsan eget cursus quis, hendrerit in quam. Cras purus lorem, tristique a rhoncus a, feugiat rutrum odio. Praesent non ornare neque. In condimentum, arcu eu aliquet porttitor, felis ex fringilla libero, et blandit metus justo vitae odio. Duis venenatis ante ac ante tincidunt aliquam sit amet ut mi. Phasellus mattis dolor ac rutrum imperdiet.",
  },
];

export const COURSETAGS: string[] = [
  "ALL",
  "통영1박2일",
  "광화문갈만한곳",
  "서울근교",
  "태국3박4일",
];
