export interface IComment {
  id: string;
  content: string;
  fk_user_id?: string;
  createdAt: string;
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
  mainImg: any;
  writer: string;
  title: string;
  shortContent: string;
  tags: string[];
  likeCnts: number;
  views: number;
  createdAt: string;
  isLocal: boolean;
  likeClicked?: number;
  region: string;
  schedule: string;
  season: string;
  updatedAt: string;
  comments?: any;
}

export interface ICourseDetail {
  comments: IComment[];
  content: string;
  createdAt: string;
  idx: number;
  isLocal: boolean;
  likeCnts: number;
  mainImg: any;
  region: string;
  schedule: string;
  season: string;
  tags: string[];
  title: string;
  updatedAt: string;
  views: number;
  writer: string;
  likeClicked?: number;
}
