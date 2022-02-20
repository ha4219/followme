import Chance from "chance";

export interface MapDataType {
  url: string;
  title: string;
  content: string;
  lat: number;
  lon: number;
  tags: string[];
  score: number;
  distance: number;
}

export const getMapDummyDataGenerate = (length: number, size: number) => {
  const arr: MapDataType[] = [];
  const chance = new Chance();

  for (let i = 0; i < length; i++) {
    arr.push({
      url: `https://picsum.photos/id/${i}/${size}/${size}`,
      title: chance.sentence(),
      content: chance.paragraph(),
      // lat: chance.latitude({ min: 36.5, max: 38 }),
      // lon: chance.longitude({ min: 127, max: 128 }),
      lat: chance.latitude({ min: 37.5, max: 37.8 }),
      lon: chance.longitude({ min: 126.8, max: 127.2 }),
      tags: chance.sentence().split(" "),
      score: chance.integer({ min: 0, max: 5 }),
      distance: chance.integer({ min: 0, max: 5000 }),
    });
  }
  return arr;
};