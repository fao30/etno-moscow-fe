import { Icon } from "@iconify/react";
import React from "react";

export default function Input({
  label,
  name,
  value,
  type,
  placeholder,
  onChange,
  icon,
  warning,
  toggle,
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="themedText p ml-1">{label}</label>
      <div className="relative">
        <input
          name={name}
          value={value}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
        <div
          onClick={toggle}
          className={`absolute inset-y-0 right-4 flex items-center ${
            toggle && "cursor-pointer"
          }`}
        >
          <span className="themedText">
            <Icon icon={icon} width={20} />
          </span>
        </div>
      </div>
      {warning}
    </div>
  );
}
