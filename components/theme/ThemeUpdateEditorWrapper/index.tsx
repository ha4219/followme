import dynamic from "next/dynamic";

const ThemeCustomEditor = dynamic(
  async () => {
    const ThemeCustomEditor = await import(
      "@components/theme/ThemeUpdateEditor"
    );
    return ThemeCustomEditor;
  },
  { loading: () => <p>...</p>, ssr: false }
);

const ThemeCustomEditorWrapper = () => {
  return (
    <>
      <ThemeCustomEditor />
    </>
  );
};

export default ThemeCustomEditorWrapper;
