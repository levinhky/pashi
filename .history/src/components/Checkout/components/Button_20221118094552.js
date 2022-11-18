import React from "react";
import { NavLink } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import styled from "styled-components";

const ButtonStyles = styled.div``;

const Button = ({
  type = "button",
  onClick = () => {},
  kind = "primary",
  children,
  ...props
}) => {
  const { isLoading, to } = props;
  const child = !!isLoading ? <LoadingSpinner></LoadingSpinner> : children;
  if (to !== "" && typeof to === "string") {
    return (
      <NavLink to={to} style={{ display: "inline-block" }}>
        <ButtonStyles type={type} kind={kind} {...props}>
          {child}
        </ButtonStyles>
      </NavLink>
    );
  }
  return (
    <button
      className="text-white font-medium transition-all hover:brightness-125 bg-[#338dbc] text-center rounded-lg px-3 py-6"
      type="submit"
      onClick={onClick}
    >
      {child}
    </button>
  );
};

export default Button;
