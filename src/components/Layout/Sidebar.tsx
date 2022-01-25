import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";

type TProps = {
  component: "drawer" | "sidebar";
  openSidebar: boolean;
  handleToggleOpenSidebar: () => void;
};
export default function LayoutSidebar(props: TProps) {
  const { component, openSidebar, handleToggleOpenSidebar } = props;

  if (component === "drawer") {
    return (
      <Drawer
        isOpen={openSidebar}
        placement="left"
        onClose={handleToggleOpenSidebar}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <div>i'm drawer</div>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }
  return (
    <Box
      position="fixed"
      left={0}
      p={5}
      w="200px"
      top={0}
      h="100%"
      bg="gray.100"
    >
      <div>i'm sidebar</div>
    </Box>
  );
}
