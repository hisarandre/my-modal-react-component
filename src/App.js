import React, { useState } from "react";
import { Modal } from "./lib/index";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button type="button" onClick={handleOpenModal}>
        Close
      </button>

      <Modal
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis lacus quis metus tempus aliquam. Cras a nulla aliquet, sodales leo vel, molestie ex. Suspendisse ornare sapien nec efficitur tincidunt. Sed dignissim felis in tortor hendrerit viverra."
        open={isOpen}
        close={() => setIsOpen(!isOpen)}
      />
    </>
  );
};

export default App;
