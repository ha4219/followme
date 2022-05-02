export interface IComment {
  idx: string;
  content: string;
  fk_user_id?: string;
  fk_user_comments_id: string;
  createdAt: string;
}

export interface IMergeCourse {
  theme: ICourse[];
  recommend: ICourse[];
}

export interface IUser {
  id: string;
  name: string;
  nickName: string;
  phoneNum: string;
  email: string;
  point: string;
  likeCnts: number;
}

export interface ICourse {
  idx: number;
  fk_user_boards_id?: string;
  type: number;
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

export interface IBannerType {
  idx: number;
  urlTo: string;
  endDate: string;
  imgURL: string;
}

export interface IPointType {
  content: string;
  createdAt: string;
  point: number;
  type: string;
}

export interface INoticeType {
  title: string;
  createdAt: string;
  idx: number;
  content: string;
  views: number;
  writer: string;
}

export interface IFaqType {
  idx: number;
  title: string;
  content: string;
  writer: string;
  createdAt: string;
}

export interface IReportCommentType {
  idx: number;
  content: string;
  createdAt: string;
  fk_board_idx: number;
  fk_user_comments_id: string;
  recomment: number | null;
  reported: number;
  type: number;
  updatedAt: string;
}

export interface IEnterpriseType {
  [x: string]: any;
  category: string;
  content: string;
  id: string;
  idx: number;
  latitude: string;
  longitude: string;
  name: string;
  address: string;
  profileImage: string;
  score: number;
  tags: string[];
}

export interface IEnterpriseMenuType {
  idx: number;
  fk_user_enterMenus_id: string;
  name: string;
  explanation: string;
  menuImg: string;
}

export interface IEnterpriseReviewType {
  idx: number;

  score: number;
  enterId: string;
  writer: string;
  content: string;
}
