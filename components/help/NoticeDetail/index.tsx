import ShareButton from "@components/ShareButton";
import styled from "@emotion/styled";
import { dateHelper } from "@helpers/programHelper";
import { idState } from "@store/auth";
import { VFC } from "react";
import { useRecoilValue } from "recoil";
import { INoticeType } from "types/apiType";

const NoticeDetail: VFC<INoticeType> = ({
  title,
  createdAt,
  writer,
  content,
  idx,
}) => {
  const id = useRecoilValue(idState);
  return (
    <NoticeDetailContainer>
      <div className="titleContainer">
        <div className="subsub">
          <div className="subContainer">
            <div className="title">{title}</div>
          </div>
        </div>

        <div className="btns">
          <div className="noticeDate">{dateHelper(createdAt)}</div>

          <ShareButton url={window.location.href} des={title} user={id} />
        </div>
      </div>

      <div className="detailContent">{content}</div>
    </NoticeDetailContainer>
  );
};

const NoticeDetailContainer = styled.div`
  padding: 1rem;
  & .dateContainer {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    & div {
      display: flex;
      align-items: center;
      margin-right: 1rem;
    }
  }

  & .titleContainer {
    display: flex;
    padding: 2rem 0;
    justify-content: space-between;

    border-bottom: 1px solid #3e3e3e;

    & .subsub {
      display: flex;
    }
    & .avatar {
      margin-right: 1rem;
    }
    & .subContainer {
      display: flex;
      flex-direction: column;
      & .title {
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: auto;
        margin-top: auto;
      }
    }

    & .btns {
      display: flex;
      align-items: center;
      & .heartLabel {
        font-weight: 300;
        font-size: 0.8rem;
        margin-right: 0.5rem;
      }

      & .fillHeart {
        color: #ff4e40;
        align-items: end;
      }
      & .fillNotHeart {
        align-items: end;
        color: #ff4e40;
      }
      & .share {
        align-items: end;
      }
    }
  }
  & .detailContent {
    width: 100%;
    padding: 2rem;
    border-bottom: 1px solid #dcdce6;
  }

  & .bold {
    font-weight: bold;
    margin-right: 0.3rem;
  }

  & .noticeDate {
    color: #818181;
    font-size: 0.8rem;
  }
`;

export default NoticeDetail;
