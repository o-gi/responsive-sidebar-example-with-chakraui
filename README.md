# Next.js chakra-ui responsive sidebar example

https://twitter.com/t4traw/status/1485977846472658944

簡単にですが作ってみました。
Layout.tsx が State を持たせた親で、Headerbar.tsx と Sidebar.tsx が子です。

Layout コンポーネントの入れ子にコンテンツを書いていきます。

```
const IndexPage: NextPage = () => {
  return (
    <Layout>
      <Box mt={4} px={5}>
        content
      </Box>
    </Layout>
  );
};

export default IndexPage;

```
