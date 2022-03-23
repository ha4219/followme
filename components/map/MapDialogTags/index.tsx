import styled from "@emotion/styled";

const MapDialogTag = ({ tags }: { tags: string[] }) => {
  return (
    <MapDialogTagsContainer>
      {tags.map((item, index) => (
        <div key={index} className="mapDialogTagsContainerItem">
          #{item}
        </div>
      ))}
    </MapDialogTagsContainer>
  );
};

const MapDialogTagsContainer = styled.div`
  display: flex;
  & .mapDialogTagsContainerItem {
    color: #b69775;
    font-family: paybooc-Bold;
    font-size: 0.8rem;
    padding: 0.2rem;
    margin-right: 5px;
    border: 1px solid #b69775;
    border-radius: 12px;
  }
`;

export default MapDialogTag;
