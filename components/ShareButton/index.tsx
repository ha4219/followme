import { Button, Dialog } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import styled from "@emotion/styled";
import { useState } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ShareButton = ({ url, des, user }) => {
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   console.log(Window.kakao);
  // }, [Window.kakao]);

  const onClickKakao = async () => {
    // TODO
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAOSECRET);
    }
    try {
      window.Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "여행 정보를 한눈에!FOLLOW ME!!",
          description: `${user}님이 "${des}" 정보를 공유했어요! 확인해보세요!`,
          imageUrl: url,
          link: {
            webUrl: url,
            mobileWebUrl: url,
          },
        },
      });
    } catch (e) {
      console.log(e);
    }
    console.log(window.Kakao);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <ShareIcon sx={{ width: 15, height: 15 }} />
      </Button>
      <OutSideContainer open={open} onClose={() => setOpen(false)}>
        <div className="container">
          <FacebookShareButton url={url}>
            <FacebookIcon
              size={48}
              round={true}
              borderRadius={24}
            ></FacebookIcon>
          </FacebookShareButton>
          <TwitterShareButton url={url}>
            <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
          </TwitterShareButton>
          <CopyToClipboard text={url}>
            <URLShareButton>URL</URLShareButton>
          </CopyToClipboard>
          <KakaoShareButton
            onClick={onClickKakao}
            src={"/kakaocorp_talk-icon.svg"}
          ></KakaoShareButton>
        </div>
      </OutSideContainer>
    </>
  );
};

const OutSideContainer = styled(Dialog)`
  & .container {
    display: flex;
    padding: 1rem;
  }
`;

const URLShareButton = styled.button`
  width: 48px;
  height: 48px;
  color: white;
  border-radius: 24px;
  border: 0px;
  font-weight: 800;
  font-size: 18px;
  cursor: pointer;
  background-color: #7362ff;
  &:hover {
    background-color: #a99fee;
  }
`;

const KakaoShareButton = styled.button<{ src: string }>`
  width: 48px;
  height: 48px;
  color: white;
  border-radius: 24px;
  border: 0px;
  font-weight: 800;
  font-size: 18px;
  cursor: pointer;
  background: url(${(props) => props.src}) no-repeat;
  background-size: contain;

  &:hover {
  }
`;

export default ShareButton;
