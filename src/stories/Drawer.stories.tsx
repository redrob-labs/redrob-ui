// Standard packages
import React, { useEffect, useState } from "react";

// Third-party packages
import type { Meta, StoryObj } from "@storybook/react";

// Custom packages
import Drawer from "../components/Drawer";
import Button from "../components/Button";

const meta = {
  title: "Drawer/Basis",
  component: Drawer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    panelOpen: {
      control: false,
    },
    bannerOpen: {
      control: false,
    },
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basis: Story = {
  args: {
    panelOpen: false,
    bannerOpen: false,
    onClose: () => {},
    children: <></>,
  },
  parameters: {
    docs: {
      source: {
        code: `
/** useState hooks */
const [isPanelOpen, setIsPanelOpen] = useState(false);

/** useEffect hooks */
useEffect(() => {
  const panel = localStorage.getItem("isPanelOpen");

  if (panel === null) {
    localStorage.setItem("isPanelOpen", "false");
    setIsPanelOpen(false);
  } else {
    setIsPanelOpen(panel === "true");
  }
}, []);

/** custom handler */
const handleOpenPanel = () => {
  localStorage.setItem("isPanelOpen", "true");
  setIsPanelOpen(true);
};

const handleClosePanel = () => {
  localStorage.setItem("isPanelOpen", "false");
  setIsPanelOpen(false);
};

return (
  <div className="min-w-[800px]">
    <Button label="drawer open" onClick={handleOpenPanel} />
    <Drawer panelOpen={isPanelOpen} onClose={handleClosePanel}>
      <div>
        rem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not
        only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s
        with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum. Why do we use it? It is
        a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution
        of letters, as opposed to using 'Content here, content here', making
        it look like readable English. Many desktop publishing packages and
        web page editors now use Lorem Ipsum as their default model text,
        and a search for 'lorem ipsum' will uncover many web sites still in
        their infancy. Various versions have evolved over the years,
        sometimes by accident, sometimes on purpose (injected humour and the
        like). Where does it come from? Contrary to popular belief, Lorem
        Ipsum is not simply random text. It has roots in a piece of
        classical Latin literature from 45 BC, making it over 2000 years
        old. Richard McClintock, a Latin professor at Hampden-Sydney College
        in Virginia, looked up one of the more obscure Latin words,
        consectetur, from a Lorem Ipsum passage, and going through the cites
        of the word in classical literature, discovered the undoubtable
        source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
        Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32.
      </div>
    </Drawer>
  </div>
);
        `,
      },
    },
  },
  render: (args) => {
    /** useState hooks */
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    /** useEffect hooks */
    useEffect(() => {
      const panel = localStorage.getItem("isPanelOpen");

      if (panel === null) {
        localStorage.setItem("isPanelOpen", "false");
        setIsPanelOpen(false);
      } else {
        setIsPanelOpen(panel === "true");
      }
    }, []);

    /** custom handler */
    const handleOpenPanel = () => {
      localStorage.setItem("isPanelOpen", "true");
      setIsPanelOpen(true);
    };

    const handleClosePanel = () => {
      localStorage.setItem("isPanelOpen", "false");
      setIsPanelOpen(false);
    };

    return (
      <div className="min-w-[800px]">
        <Button label="drawer open" onClick={handleOpenPanel} />
        <Drawer panelOpen={isPanelOpen} onClose={handleClosePanel}>
          <div>
            rem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Why do we use it? It is
            a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in
            their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the
            like). Where does it come from? Contrary to popular belief, Lorem
            Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years
            old. Richard McClintock, a Latin professor at Hampden-Sydney College
            in Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and going through the cites
            of the word in classical literature, discovered the undoubtable
            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
            Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
            Cicero, written in 45 BC. This book is a treatise on the theory of
            ethics, very popular during the Renaissance. The first line of Lorem
            Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
            1.10.32.
          </div>
        </Drawer>
      </div>
    );
  },
};
