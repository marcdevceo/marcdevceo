"use client";

import React from "react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import {
  bgColorClass,
  fontSizeClass,
  fontWeightClass,
  paddingClass,
  marginClass,
  borderRadiusClass,
  shadowClass,
  textColorClass,
  hoverClass,
} from "../../theme";
import { Button } from "../button";
import { ModalProps } from "./types-modal";

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className = "",
}) => {
  const originalOverflow = useRef<string>("");

  // Disable background scroll when modal is open
  useEffect(() => {
    if (typeof document !== "undefined" && isOpen) {
      originalOverflow.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    }

    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = originalOverflow.current;
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  if (typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        className={clsx(
          bgColorClass.neutral,
          borderRadiusClass.xl,
          shadowClass.lg,
          paddingClass.lg,
          "w-[90%] max-w-md",
          className
        )}
      >
        {title && (
          <h2
            className={clsx(
              fontSizeClass.xl,
              fontWeightClass.bold,
              marginClass.sm,
              textColorClass.accent
            )}
          >
            {title}
          </h2>
        )}

        <div>{children}</div>



        {/* Optional: use your own Button component */}
        <Button
          onClick={onClose}
          variant="secondaryresp"
          className={clsx(
            borderRadiusClass.md,
            paddingClass.sm,
            marginClass.md,
            hoverClass.opacity,
            "transition"
          )}
        >
          Close
        </Button>
      </div>
    </div>,
    document.body
  );
}

export default Modal;