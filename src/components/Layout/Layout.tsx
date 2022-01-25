import { Box, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import LayoutHeaderbar from "./Headerbar";
import LayoutSidebar from "./sidebar";

type TProps = {
  children: React.ReactNode;
};

export default function Layout(props: TProps) {
  const { children } = props;
  const [openSidebar, setOpenSidebar] = React.useState(false);

  /**
   * doc https://chakra-ui.com/docs/hooks/use-breakpoint-value
   * componentはLayoutSidebarに渡してウィンドウサイズによってDrawerかBoxの表示をする
   * showButtonはLayoutHeaderbarに渡してウィンドウサイズによってDrawerを呼ぶハンバーガーボタンを表示か非表示
   */
  const bpValue = useBreakpointValue({
    base: {
      component: "drawer",
      showButton: true,
    },
    md: {
      component: "sidebar",
      showButton: false,
    },
  });

  // state openSidebarをtoggle
  const handleToggleOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div>
      <LayoutSidebar
        component={bpValue?.component as "drawer" | "sidebar"}
        openSidebar={openSidebar}
        handleToggleOpenSidebar={handleToggleOpenSidebar}
      />
      <Box ml={!bpValue?.showButton && "200px"}>
        <LayoutHeaderbar
          showButton={bpValue?.showButton}
          handleToggleOpenSidebar={handleToggleOpenSidebar}
        />
        <Box>{children}</Box>
      </Box>
    </div>
  );
}
