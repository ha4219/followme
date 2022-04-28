import HelpLeftLayout from "@components/help/HelpLeftLayout";
import NoticeDetail from "@components/help/NoticeDetail";
import { Container } from "@mui/material";
import { getNoticeDetail } from "api/admin";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { INoticeType } from "types/apiType";

const HelpNoticeDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState<INoticeType>();

  const getData = async () => {
    if (id) {
      try {
        const res = await getNoticeDetail({ idx: id });
        setData(res[0]);
      } catch (e) {
        console.log("notice detail", e);
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container maxWidth="lg">
      <Head>
        <title>{data?.title ? data?.title : "notice"}</title>
      </Head>
      <HelpLeftLayout>
        {data && (
          <NoticeDetail
            title={data.title}
            content={data.content}
            idx={data.idx}
            createdAt={data.createdAt}
            views={data.views}
            writer={data.writer}
          />
        )}
      </HelpLeftLayout>
    </Container>
  );
};

export default HelpNoticeDetail;
