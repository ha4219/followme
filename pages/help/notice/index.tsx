import HelpLeftLayout from "@components/help/HelpLeftLayout";
import HelpNoticeList from "@components/help/NoticeList";
import { Container } from "@mui/material";

const HelpNotice = () => {
  return (
    <Container maxWidth="lg">
      <HelpLeftLayout>
        <HelpNoticeList />
      </HelpLeftLayout>
    </Container>
  );
};

export default HelpNotice;
