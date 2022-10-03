import { PropsWithChildren } from "react";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export function Sidebar({
  open,
  onClose,
  children,
}: PropsWithChildren<SidebarProps>): JSX.Element {
  return (
    <>
      {open && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            borderRight: "1px solid #ccc",
            width: "100%",
            maxWidth: "300px",
            backgroundColor: "red",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p>Sidebar</p>
            <button onClick={onClose}>Close</button>
          </div>
          {children}
        </div>
      )}
    </>
  );
}
