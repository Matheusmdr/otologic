import { jsxs, jsx } from "react/jsx-runtime";
import { c as cn, b as buttonVariants, B as Button } from "./button-weNgVMLy.js";
import { M as MainLayout } from "./main-layout-Blxx2IiP.js";
import { Head, Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "react";
import "clsx";
import "tailwind-merge";
import "./toaster-CPGl9inu.js";
import "@radix-ui/react-icons";
import "@radix-ui/react-toast";
const healthInsurances = [
  {
    title: "Unimed",
    iconSrc: "/imgs/convenios/unimed.png"
  },
  {
    title: "Oeste Saúde",
    iconSrc: "/imgs/convenios/oeste-saude.png"
  },
  {
    title: "SulAmérica",
    iconSrc: "/imgs/convenios/sulamerica.png"
  },
  {
    title: "Iamspe - A saúde do servidor",
    iconSrc: "/imgs/convenios/iamspe.png"
  },
  {
    title: "Amor Saúde - Medicina, Odontologia e Exames",
    iconSrc: "/imgs/convenios/amor-saude.png"
  },
  {
    title: "Solimed",
    iconSrc: "/imgs/convenios/solimed.png"
  },
  {
    title: "Apas Prudente",
    iconSrc: "/imgs/convenios/apas-pp.png"
  },
  {
    title: "Apas PV",
    iconSrc: "/imgs/convenios/apas-pv.png"
  }
];
function Page() {
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Convênios Atendidos" }),
    /* @__PURE__ */ jsxs("main", { className: "space-y-10 bg-white py-10 md:space-y-20 md:py-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "flex flex-col gap-10", children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto flex w-11/12 max-w-7xl flex-col justify-center gap-10", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              buttonVariants({ variant: "default" }),
              "mx-auto w-fit rounded-full border !border-blue-primary !bg-transparent px-4 py-1"
            ),
            children: /* @__PURE__ */ jsx("h2", { className: "mx-auto w-fit px-2 py-1 text-center text-xl font-bold text-blue-primary", children: "Convênios Atendidos" })
          }
        ) }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto max-w-2xl text-center text-base font-medium text-[#757575]", children: "Atendemos os mais diversos convênios de saúde." }),
        /* @__PURE__ */ jsx("div", { className: "mx-auto grid w-10/12 max-w-5xl grid-cols-2 place-items-center items-center justify-center justify-items-center gap-12 md:grid-cols-4 md:gap-28", children: healthInsurances.map((healthInsurance) => /* @__PURE__ */ jsx(
          "img",
          {
            src: healthInsurance.iconSrc,
            alt: healthInsurance.title,
            className: "max-h-40 w-auto md:max-h-14"
          },
          healthInsurance.title
        )) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "flex justify-center", children: /* @__PURE__ */ jsx(Link, { href: "/noticias", className: "self-center", children: /* @__PURE__ */ jsxs(Button, { className: "w-fit rounded-3xl border border-blue-primary bg-blue-primary px-2 py-1 text-base font-normal text-white hover:bg-white hover:text-blue-primary", children: [
        /* @__PURE__ */ jsx(ChevronRight, {}),
        "Voltar para a home"
      ] }) }) })
    ] })
  ] });
}
export {
  Page as default
};
