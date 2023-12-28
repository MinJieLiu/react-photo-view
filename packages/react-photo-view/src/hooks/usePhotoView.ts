import { useContext } from "react";
import { PhotoContextType } from "../photo-context";
import PhotoContext from "../photo-context";
import { DataType } from "../types";

export default function usePhotoView() {
  const photoContext = useContext<PhotoContextType>(PhotoContext);

  const open = (images: DataType[], index: number) => {
    photoContext.open(images, index);
  }

  return {
    open,
  }
}
