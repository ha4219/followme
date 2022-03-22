const TITLELENGTH = 10;
const CONTENTLENGTH = 20;
const TABLETITLELENGTH = 80;
const MAPTITLELENGTH = 30;
const MAPCONTENTLENGTH = 50;

export const titleSummary = (title: string): string =>
  title.length >= TITLELENGTH ? title.slice(0, TITLELENGTH) + "..." : title;

export const contentSummary = (text: string): string =>
  text.length >= TITLELENGTH ? text.slice(0, CONTENTLENGTH) + "..." : text;

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
  if (mainImg.data.length) {
    return Buffer.from(mainImg?.data);
  }
  return "/noimage.jpeg";
};
