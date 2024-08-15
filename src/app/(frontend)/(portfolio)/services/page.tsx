import React from "react";

import {
  RxDesktop,
  RxRocket,
  RxReader,
  RxPencil2,
  RxCrop,
} from "react-icons/rx";

export const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    desc: "LoremAmet laborum irure elit pariatur ullamco cupidatat consequat veniam elit officia.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    desc: "LoremAmet laborum irure elit pariatur ullamco cupidatat consequat veniam elit officia.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    desc: "LoremAmet laborum irure elit pariatur ullamco cupidatat consequat veniam elit officia.",
  },
  {
    icon: <RxReader />,
    title: "Copyright",
    desc: "LoremAmet laborum irure elit pariatur ullamco cupidatat consequat veniam elit officia.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    desc: "LoremAmet laborum irure elit pariatur ullamco cupidatat consequat veniam elit officia.",
  },
];

type Props = {};

export default function ServicesPage({}: Props) {
  return <div>ServicesPage</div>;
}
