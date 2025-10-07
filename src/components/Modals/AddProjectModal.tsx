import React from "react";
import BaseModal from "../Base/BaseModal";
import AddProjectForm from "../Forms/AddProjectForm";

type Props = {
  opened: boolean;
  onClose: () => void;
};

const AddProjectModal = ({ opened, onClose }: Props) => {
  return (
    <>
      <BaseModal title="プロジェクトの追加" isOpen={opened} onClose={onClose}>
        <AddProjectForm onClose={onClose} />
      </BaseModal>
    </>
  );
};

export default AddProjectModal;
