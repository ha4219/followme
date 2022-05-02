import LeftLayout from "@components/LeftLayout";
import SearchProgramList from "@components/search/SearchProgramList";
import { Container } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();
  const { value, date } = router.query;
  return (
    <Container maxWidth="lg">
      <Head>
        <title>{`${value} 검색 결과`}</title>
      </Head>
      <SearchProgramList value={value as string} filterDate={date as string} />
    </Container>
  );
};

export default Search;
