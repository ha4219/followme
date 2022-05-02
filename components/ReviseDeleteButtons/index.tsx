import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { deleteBoard, delRecommendBoard, delThemeBoard } from "api/board";
import { useRouter } from "next/router";
import { useCallback, VFC } from "react";
import { toast } from "react-toastify";

interface IProps {
  url: string;
  id: string;
  idx: number;
}

const ReviseDeleteButtons: VFC<IProps> = ({ url, id, idx }) => {
  const router = useRouter();
  const onClickRevise = useCallback(() => {
    router.push({
      pathname: `/${url}/revise`,
      query: {
        id,
        idx,
      },
    });
  }, []);

  const onClickDelete = useCallback(async () => {
    try {
      let data = { data: "fail" };
      if (url === "theme") {
        data = await delThemeBoard({
          id: id,
          idx: idx,
        });
      } else if (url === "recommend") {
        data = await delRecommendBoard({
          id: id,
          idx: idx,
        });
      } else {
      }
      if (data.data === "success") {
        toast.success("삭제 완료");
      } else {
        toast.error("삭제 실패");
      }
    } catch (e) {
      toast.error("삭제 오류");
      console.log("del error", e);
    }
    // deleteBoard({ url, id, idx })
    //   .then((data) => {
    //     console.log(data);

    //     if (data?.data === "success") {
    //       toast.success("삭제 완료");
    //     } else {
    //       toast.error("삭제 실패");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);

    //     toast.error("삭제 오류", err.message);
    //     router.push("/logout");
    //   });
  }, []);

  return (
    <ButtonContainer>
      <Button variant="contained" onClick={onClickRevise}>
        수정
      </Button>
      <Button variant="contained" color="error" onClick={onClickDelete}>
        삭제
      </Button>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: center;

  & button {
    margin: 1rem;
  }
`;

export default ReviseDeleteButtons;
