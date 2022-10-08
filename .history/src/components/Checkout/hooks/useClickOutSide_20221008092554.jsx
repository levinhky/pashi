import { useRef, useState } from "react";

export default function useClickOutSide(dom = "button") {
  const [show, setShow] = useState(false);
  const nodeRef = useRef();
}
