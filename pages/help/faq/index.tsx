import HelpFaqList from "@components/help/FaqList";
import HelpLeftLayout from "@components/help/HelpLeftLayout";
import ShareButton from "@components/ShareButton";
import { getMapDummyDataGenerate } from "@data/MapData";
import { Container } from "@mui/material";

const HelpFaq = () => {
  return (
    <Container maxWidth="lg">
      <HelpLeftLayout>
        <HelpFaqList />
      </HelpLeftLayout>
    </Container>
  );
};

export default HelpFaq;
