import { Box } from "@chakra-ui/react";
import { NextPage } from "next";
import Layout from "../components/Layout/Layout";

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
