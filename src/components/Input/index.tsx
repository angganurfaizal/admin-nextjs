import React, { useState } from "react";

interface IProps {
  type: string;
  title: string;
  className?: string;
  Inplaceholder?: string;
  leftPlaceholder?: boolean;
}

export default function index({
  type,
  title,
  className,
  Inplaceholder,
  leftPlaceholder,
}: IProps) {
  return (
    <div className="mb-1 p-3">
      <label htmlFor="url">{title}</label>
      <input
        type={type}
        className={`${className} form-input ltr:rounded-r-none rtl:rounded-l-none`}
        placeholder={Inplaceholder}
      />
    </div>
  );
}
