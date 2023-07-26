"use client";

import {useState} from "react"
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";
import Input from "./Input";

const UploadModal = () => {
  const [isLoading, setIsLoading] = useState(false)
  const uploadModal = useUploadModal();

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null,
    },
  });

  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      uploadModal.onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async(values) => {

  }

  return (
    <Modal
      title="Add a song"
      description="Upload an mp3 file"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input id="title" disabled={isLoading} {...register('title', {required: true})} placeholder="Song title" />
      </form>
    </Modal>
  );
};

export default UploadModal;
