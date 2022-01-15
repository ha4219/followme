const TITLELENGTH = 10;

export const titleSummary = (title: string): string =>
  title.length >= TITLELENGTH ? title.slice(0, TITLELENGTH) + "..." : title;
