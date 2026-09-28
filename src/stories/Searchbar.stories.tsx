// Standard pakcages
import React, { useState } from "react";

// Third-party packages
import type { Meta, StoryObj } from "@storybook/react";

// Custom packages
import SearchBar from "../components/SearchBar";
import Dialog from "../components/Dialog";

const meta: Meta<typeof SearchBar> = {
  title: "SearchBar",
  component: SearchBar,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        code: `
  /** useState hooks */
  const [val, setVal] = useState("");
  const [filerDialog, setFilterDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  
  /** custom handler */
  const handleSubmit = () => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setLoading(true);
    setVal("");
  };
  
  const handleChange = (text: string) => setVal(text);
  const handleOpenFilter = () => setFilterDialog(true);
  return (
    <div className="min-w-[800px] mx-auto">
      <SearchBar
        {...args}
        value={val}
        onChange={handleChange}
        onKeyDown={handleSubmit}
        openFilter={handleOpenFilter}
        openSend={handleSubmit}
        disabled={loading}
      />
      <Dialog
        open={filerDialog}
        title="filter"
        onClose={() => setFilterDialog(false)}
        closeIcon
      >
        <div>filter dialog open</div>
      </Dialog>
    </div>
  );
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: false,
    },
    value: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Basis: Story = {
  render: (args) => {
    /** useState hooks */
    const [val, setVal] = useState("");
    const [filerDialog, setFilterDialog] = useState(false);
    const [loading, setLoading] = useState(false);

    /** custom handler */
    const handleSubmit = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      setLoading(true);
      setVal("");
    };

    const handleChange = (text: string) => setVal(text);
    const handleOpenFilter = () => setFilterDialog(true);
    return (
      <div className="min-w-[800px] mx-auto">
        <SearchBar
          {...args}
          value={val}
          onChange={handleChange}
          onKeyDown={handleSubmit}
          openFilter={handleOpenFilter}
          openSend={handleSubmit}
          disabled={loading}
        />
        <Dialog
          open={filerDialog}
          title="filter"
          onClose={() => setFilterDialog(false)}
          closeIcon
        >
          <div>filter dialog open</div>
        </Dialog>
      </div>
    );
  },
};
