const TITLELENGTH = 10;
const CONTENTLENGTH = 15;
const TABLETITLELENGTH = 80;
const MAPTITLELENGTH = 30;
const MAPCONTENTLENGTH = 50;

export const titleSummary = (title: string): string =>
  title.length >= TITLELENGTH ? title.slice(0, TITLELENGTH) + "..." : title;

export const contentSummary = (text: string): string =>
  text.length >= CONTENTLENGTH ? text.slice(0, CONTENTLENGTH) + "..." : text;

export const tableTitleSummary = (text: string): string =>
  text.length >= TABLETITLELENGTH
    ? text.slice(0, TABLETITLELENGTH) + "..."
    : text;

export const mapTitleSummary = (text: string): string =>
  text.length >= MAPTITLELENGTH ? text.slice(0, MAPTITLELENGTH) + "..." : text;

export const mapContentSummary = (text: string): string =>
  text.length >= MAPCONTENTLENGTH
    ? text.slice(0, MAPCONTENTLENGTH) + "..."
    : text;

export const dateHelper = (text: string): string => text.slice(0, 10);

export const toBase64 = (mainImg) => {
  try {
    if (mainImg.data.length) {
      return Buffer.from(mainImg?.data);
    }
    return "/noimage.jpeg";
  } catch (e) {
    return "/noimage.jpeg";
  }
};

export const onImgError = (image) => {
  image.src = "/usericon.png";
};

export const convertURLtoFile = async (url: string) => {
  const response = await fetch(url);
  const data = await response.blob();
  const ext = url.split(".").pop(); // url 구조에 맞게 수정할 것
  const filename = url.split("/").pop(); // url 구조에 맞게 수정할 것
  const metadata = { type: `image/${ext}` };
  return new File([data], filename!, metadata);
};
