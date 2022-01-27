import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styled from "@emotion/styled";

const Logo = () => {
  return (
    <Box sx={{display: "flex", alignItems: 'center'}}>
      <LogoImg>
        <Image src="/logo.svg" width={14} height={24} />
      </LogoImg>
      <LogoText>
        Ulife
      </LogoText>
    </Box>
  );
}

const LogoImg = styled('div')`
  display: flex;

`;

const LogoText = styled('span')`
  color: #ff7800;
  margin-left: 0.5rem;
`;

export default Logo;