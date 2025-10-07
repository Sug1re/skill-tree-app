import React from "react";
import { Box, TextField } from "@mui/material";
import BaseButton from "@/components/Base/BaseButton";

type Props = {
  onClose: () => void;
};

const AddProjectForm = ({ onClose }: Props) => {
  return (
    <>
      <form>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "0 auto",
            width: "100%",
            gap: 2,
            mb: 2,
          }}
        >
          <TextField id="project" label="プロジェクト名" variant="outlined" />

          <BaseButton color="dark" type="submit" width="100%" onClick={onClose}>
            新規作成
          </BaseButton>
        </Box>
      </form>
    </>
  );
};

export default AddProjectForm;
