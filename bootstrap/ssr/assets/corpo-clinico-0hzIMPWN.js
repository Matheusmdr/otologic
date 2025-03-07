import { jsxs, jsx } from "react/jsx-runtime";
import { c as cn, b as buttonVariants, B as Button } from "./button-weNgVMLy.js";
import { M as MainLayout } from "./main-layout-aXa20P2z.js";
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
function Page() {
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Corpo Clínico" }),
    /* @__PURE__ */ jsxs("main", { className: "space-y-10 bg-blue-secondary py-10 md:space-y-20 md:py-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "flex flex-col gap-10", children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto flex w-11/12 max-w-7xl flex-col justify-center gap-10", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              buttonVariants({ variant: "default" }),
              "mx-auto w-fit rounded-full border !border-white !bg-transparent px-4 py-1"
            ),
            children: /* @__PURE__ */ jsx("h2", { className: "mx-auto w-fit px-2 py-1 text-center text-xl font-bold text-white", children: "Nossa Clínica" })
          }
        ) }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto max-w-2xl text-center text-base font-medium text-white", children: "Na Otologic, contamos com uma equipe de especialistas em otorrinolaringologia e audiologia, altamente qualificada e dedicada ao cuidado integral da sua saúde." }),
        /* @__PURE__ */ jsxs("div", { className: "divide mx-auto grid w-11/12 max-w-7xl grid-cols-1 items-center justify-center gap-10 divide-white sm:grid-cols-2 sm:divide-x-0 md:flex-row lg:grid-cols-3 lg:gap-0 lg:divide-x", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-4", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/imgs/corpo-clinico/natalie.png",
                alt: "Dra. Natalie Ravazzi",
                className: "max-w-xs"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1 border-b border-white pb-4 text-center sm:border-none sm:pb-0", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-white", children: "Dra. Natalie Ravazzi" }),
              /* @__PURE__ */ jsx("span", { className: "text-white", children: "Médica Otorrinolaringologista" }),
              /* @__PURE__ */ jsx("span", { className: "text-white", children: "CRM/SP 95.612 | RQE 47.090" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-4", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/imgs/corpo-clinico/ana-julia.png",
                alt: "Dra. Ana Júlia Peretti",
                className: "max-w-xs"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1 border-b border-white pb-4 text-center sm:border-none sm:pb-0", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-white", children: "Dra. Ana Júlia Peretti" }),
              /* @__PURE__ */ jsx("span", { className: "text-white", children: "Médica Otorrinolaringologista" }),
              /* @__PURE__ */ jsx("span", { className: "text-white", children: "CRM/SP 151.000 | RQE 59.620" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-4", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/imgs/corpo-clinico/simone.png",
                alt: "Fga. Simone Ravazzi",
                className: "max-w-xs"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1 border-b border-white pb-4 text-center sm:border-none sm:pb-0", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-white", children: "Fga. Simone Ravazzi" }),
              /* @__PURE__ */ jsx("span", { className: "text-white", children: "Fonoaudióloga" }),
              /* @__PURE__ */ jsx("span", { className: "text-white", children: "CRF 2/6276 | CRFF 3938/07" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "flex justify-center", children: /* @__PURE__ */ jsx(Link, { href: "/", className: "self-center", children: /* @__PURE__ */ jsxs(Button, { className: "w-fit rounded-3xl border border-blue-primary bg-blue-primary px-2 py-1 text-base font-normal text-white hover:bg-white hover:text-blue-primary", children: [
        /* @__PURE__ */ jsx(ChevronRight, {}),
        "Voltar para a home"
      ] }) }) })
    ] })
  ] });
}
export {
  Page as default
};
