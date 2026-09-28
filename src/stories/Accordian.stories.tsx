// Standard packages
import React from "react";

// Third-party packages
import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "storybook/internal/preview-api";

// Custom packages
import { AccordianGroup } from "../components/Accordian";

const meta: Meta<typeof AccordianGroup> = {
  title: "Accordian",
  component: AccordianGroup,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        code: `
  /** custom handlers */
  const handleToggle = (id: string) => {};
  const handleDelete = (id: string) => {
    const updatedAccordians = accordians.filter(
      (item: { id: string }) => item.id !== id
    );
  };
  const handleEdit = (id: string) => {
    handleToggle(id);
  };
  return (
    <AccordianGroup
      {...args}
      mode={mode}
      accordians={accordians}
      onToggle={handleToggle}
      onDelete={handleDelete}
      onEdit={handleEdit}
    />
  );       
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: {
        type: "radio",
        options: ["single", "multi"],
      },
    },
  },
  args: {
    mode: "single",
    accordians: [
      {
        id: "1",
        title: "Section 1",
        content: <p>Content 1</p>,
        tag: true,
      },
      { id: "2", title: "Section 2", content: <p>Content 2</p> },
      { id: "3", title: "Section 3", content: <p>Content 3</p> },
    ],
  },
} satisfies Meta<typeof AccordianGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleMode: Story = {
  args: {
    mode: "single",
  },
  render: (args) => {
    /** third-party packages */
    const [{ mode, accordians }, updateArgs] = useArgs();

    /** custom handlers */
    const handleToggle = (id: string) => {
      console.log(`Accordion ${id} toggled`);
    };

    const handleDelete = (id: string) => {
      const updatedAccordians = accordians.filter(
        (item: { id: string }) => item.id !== id
      );
      updateArgs({ accordians: updatedAccordians });
      console.log(`Accordion ${id} deleted`);
    };

    const handleEdit = (id: string) => {
      console.log(`Editing Accordion with id: ${id}`);
      handleToggle(id);
    };

    return (
      <AccordianGroup
        {...args}
        mode={mode}
        accordians={accordians}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    );
  },
};

export const MultiMode: Story = {
  args: {
    mode: "multi",
  },
  render: (args) => {
    /** third-party packages */
    const [{ mode, accordians }, updateArgs] = useArgs();

    /** custom handlers */
    const handleToggle = (id: string, expanded: boolean) => {
      console.log(`Accordion ${id} is now ${expanded ? "open" : "closed"}`);
    };

    const handleDelete = (id: string) => {
      const updatedAccordians = accordians.filter(
        (item: { id: string }) => item.id !== id
      );
      updateArgs({ accordians: updatedAccordians });
      console.log(`Accordion ${id} deleted`);
    };

    const handleEdit = (id: string) => {
      console.log(`Editing Accordion with id: ${id}`);
    };

    return (
      <AccordianGroup
        {...args}
        mode={mode}
        accordians={accordians}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    );
  },
};
