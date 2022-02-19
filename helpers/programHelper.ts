const TITLELENGTH = 10;
const CONTENTLENGTH = 20;
const TABLETITLELENGTH = 80;

export const titleSummary = (title: string): string =>
  title.length >= TITLELENGTH ? title.slice(0, TITLELENGTH) + "..." : title;

export const contentSummary = (text: string): string =>
  text.length >= TITLELENGTH ? text.slice(0, CONTENTLENGTH) + "..." : text;

export const tableTitleSummary = (text: string): string =>
  text.length >= TABLETITLELENGTH
    ? text.slice(0, TABLETITLELENGTH) + "..."
    : text;
