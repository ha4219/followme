import Head from "next/head";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{`무언가 검색 결과`}</title>
      </Head>
      <div></div>
    </>
  );
};

export default Search;
