const TITLELENGTH = 10;
const CONTENTLENGTH = 20;

export const titleSummary = (title: string): string =>
  title.length >= TITLELENGTH ? title.slice(0, TITLELENGTH) + "..." : title;

export const contentSummary = (text: string): string =>
  text.length >= TITLELENGTH ? text.slice(0, CONTENTLENGTH) + "..." : text;
