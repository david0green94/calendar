import React, { ReactNode, useState } from "react";
import { useFloating } from "@floating-ui/react-dom";
import styled from "styled-components";

type Option<T extends string | number> = {
  id: T;
  label: ReactNode;
};

type DropdownProps<T extends string | number> = {
  options: Option<T>[];
  selectedId?: T;
  onItemSelect: (id: T) => void;
};

const OptionsWrapper = styled.div`
  border: 1px solid grey;
  background: #fff;
`;

const OptionItem = styled.div`
  width: 100%;
`;

const Dropdown = <T extends string | number>({
  options,
  selectedId,
  onItemSelect,
}: DropdownProps<T>) => {
  const { x, y, reference, floating, strategy } = useFloating({
    placement: "bottom",
  });
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div ref={reference} onClick={() => setIsOpen(!isOpen)}>
        {options.find((x) => x.id === selectedId)?.label ?? "select a value..."}
      </div>
      {isOpen && (
        <OptionsWrapper
          ref={floating}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
          }}
        >
          {options.map((x) => (
            <OptionItem
              onClick={() => {
                onItemSelect(x.id);
                setIsOpen(false);
              }}
            >
              {x.label} {selectedId === x.id ? ` - selected` : ""}
            </OptionItem>
          ))}
        </OptionsWrapper>
      )}
    </>
  );
};

export default Dropdown;
