// Standard packages
import React, { FC } from "react";

// Third-party packages

// Custom packages
import Backdrop from "./Backdrop";
import Container from "./Container";
import Loader from "./Loader";

// PropTypes
type BackdropLoaderProps = {};

const BackdropLoader: FC<BackdropLoaderProps> = () => {
  return (
    <Backdrop>
      <Container
        className="h-full flex flex-col justify-center items-center"
        maxWidth="sm"
      >
        <Loader />
      </Container>
    </Backdrop>
  );
};

export default BackdropLoader;
