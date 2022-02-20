import { Box, Checkbox } from "@mui/material";
import { domesticState, overseasState, seasonState } from "@store/tag";
import { useEffect, VFC } from "react";
import { useRecoilState } from "recoil";

interface IProps {
  tag: string;
  value: string;
  checked?: boolean;
  onChange?: any;
}

export const CheckContainer: VFC<IProps> = ({ tag, checked, onChange }) => {
  return (
    <Box>
      <Checkbox
        sx={{ padding: 0, paddingRight: 1 }}
        checked={checked}
        onChange={onChange}
      />
      <span>{tag}</span>
    </Box>
  );
};

export const CheckContainerSeason: VFC<IProps> = ({ tag, value }) => {
  const [selectedSeason, setSelectedSeason] = useRecoilState(seasonState);

  const onClick = (e) => {
    if (e.target.checked) {
      setSelectedSeason([...selectedSeason, value]);
    } else {
      const arr = [...selectedSeason];
      const index = arr.indexOf(value);
      if (index > -1) {
        arr.splice(index, 1);
        setSelectedSeason(arr);
      }
    }
  };

  return (
    <Box>
      <Checkbox sx={{ padding: 0, paddingRight: 1 }} onChange={onClick} />
      <span>{tag}</span>
    </Box>
  );
};

export const CheckDetailSeason: VFC<IProps> = ({ tag, value, checked }) => {
  return (
    <Box>
      <Checkbox sx={{ padding: 0, paddingRight: 1 }} checked={checked} />
      <span>{tag}</span>
    </Box>
  );
};

export const CheckContainerDomestic: VFC<IProps> = ({ tag, value }) => {
  const [selectedDomestic, setSelectedDomestic] = useRecoilState(domesticState);
  const [, setSelectedOverseas] = useRecoilState(overseasState);

  const onClick = (e) => {
    if (e.target.checked) {
      setSelectedOverseas([]);
      setSelectedDomestic([...selectedDomestic, tag]);
    } else {
      const arr = [...selectedDomestic];
      const index = arr.indexOf(tag);
      if (index > -1) {
        arr.splice(index, 1);
        setSelectedDomestic(arr);
      }
    }
  };

  return (
    <Box>
      <Checkbox sx={{ padding: 0, paddingRight: 1 }} onChange={onClick} />
      <span>{tag}</span>
    </Box>
  );
};

export const CheckContainerOverseas: VFC<IProps> = ({ tag, value }) => {
  const [, setSelectedDomestic] = useRecoilState(domesticState);
  const [selectedOverseas, setSelectedOverseas] = useRecoilState(overseasState);

  const onClick = (e) => {
    if (e.target.checked) {
      setSelectedDomestic([]);
      setSelectedOverseas([...selectedOverseas, tag]);
    } else {
      const arr = [...selectedOverseas];
      const index = arr.indexOf(tag);
      if (index > -1) {
        arr.splice(index, 1);
        setSelectedOverseas(arr);
      }
    }
  };

  return (
    <Box>
      <Checkbox sx={{ padding: 0, paddingRight: 1 }} onChange={onClick} />
      <span>{tag}</span>
    </Box>
  );
};
