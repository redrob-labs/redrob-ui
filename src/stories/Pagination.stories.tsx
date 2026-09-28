/** Standard packages */
import React from "react";

/** Third-party packages */
import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";

/** Custom packages */
import Pagination from "../components/Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Pagination/Basis",
  component: Pagination,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        code: `
    /** useState hooks */
const [page, setPage] = useState(1)

/** custom handler */
const handlePageChange = (page: number) => {
setPage(page)
};

return (
  <Pagination
    currentPage={page}
    onChangePage={handlePageChange}
  />
);
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    currentPage: {
      control: { type: "number" },
      description: "The current page number",
    },
    totalPage: {
      control: { type: "number" },
      description: "The total number of pages",
    },
  },
  args: {
    currentPage: 1,
    totalPage: 10,
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Basis: Story = {
  render: (args) => {
    const [{ currentPage }, updateArgs] = useArgs();

    const handlePageChange = (page: number) => {
      updateArgs({ currentPage: page }); // 현재 페이지 업데이트
      args.onChangePage && args.onChangePage(page); // onChangePage 콜백 실행
    };

    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onChangePage={handlePageChange}
      />
    );
  },
};
