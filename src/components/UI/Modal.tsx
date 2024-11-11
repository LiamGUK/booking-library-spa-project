import {
  useImperativeHandle,
  useRef,
  forwardRef,
  type PropsWithChildren,
} from "react";
import { createPortal } from "react-dom";

export type OpenModal = {
  open: () => void;
};

const Modal = forwardRef<OpenModal, PropsWithChildren>(function Modal(
  { children },
  ref
) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, function () {
    return {
      open: () => dialogRef.current?.showModal(),
    };
  });

  return createPortal(
    <dialog className="modal" ref={dialogRef}>
      {children}
    </dialog>,
    document.getElementById("modal-root")!
  );
});

export default Modal;
