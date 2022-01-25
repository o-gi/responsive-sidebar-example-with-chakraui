import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";

type TProps = {
  showButton: boolean;
  handleToggleOpenSidebar: () => void;
};
export default function LayoutHeaderbar(props: TProps) {
  const { showButton, handleToggleOpenSidebar } = props;

  return (
    <Box
      bg="white"
      borderBottom="1px"
      borderColor="gray.200"
      p={4}
      color="black"
      justifyContent="space-between"
    >
      <Flex flex="1" alignItems={"center"}>
        {showButton && (
          <IconButton
            icon={<HamburgerIcon w={6} h={6} />}
            colorScheme="blackAlpha"
            variant="icon"
            aria-label="toggle-sidebar"
            onClick={handleToggleOpenSidebar}
            mr={2}
          />
        )}
        <Text fontWeight={600}>SITE TITLE</Text>
      </Flex>
    </Box>
  );
}
