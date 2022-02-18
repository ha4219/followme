export interface IComment {
  id: string;
  content: string;
  updatedAt: string;
}

export interface IUser {
  id: string;
  name: string;
  nickName: string;
  phoneNum: string;
  email: string;
  points: number;
  likeCnts: number;
}

export interface ICourse {
  idx: number;
  src: any;
  mainImg: any;
  image: any;
  writer: string;
  title: string;
  shortContent: string;
  tags: string[];
  likeCnts: number;
  views: number;
  createdAt: string;
}
