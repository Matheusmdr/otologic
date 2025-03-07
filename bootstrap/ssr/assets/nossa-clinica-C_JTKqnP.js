import { jsxs, jsx } from "react/jsx-runtime";
import { c as cn, b as buttonVariants, B as Button } from "./button-weNgVMLy.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent } from "./dialog-DX42ruSA.js";
import { M as MainLayout } from "./main-layout-CoK_2Srv.js";
import { Head, Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-dialog";
import "@radix-ui/react-icons";
import "./toaster-CPGl9inu.js";
import "@radix-ui/react-toast";
function ExapandableImage({ imgSrc, className, alt }) {
  return /* @__PURE__ */ jsxs(Dialog, { children: [
    /* @__PURE__ */ jsx(DialogTrigger, { children: /* @__PURE__ */ jsx(
      "img",
      {
        src: imgSrc,
        className: cn("cursor-pointer", className),
        alt
      }
    ) }),
    /* @__PURE__ */ jsx(DialogContent, { className: "flex w-10/12 max-w-5xl justify-center p-2", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: imgSrc,
        className: cn("h-auto max-w-full cursor-pointer", className)
      }
    ) })
  ] });
}
function Page() {
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Nossa Clínica" }),
    /* @__PURE__ */ jsxs("main", { className: "space-y-10 bg-white py-10 md:space-y-20 md:py-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "flex flex-col gap-10", children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto flex w-11/12 max-w-7xl flex-col justify-center gap-10", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              buttonVariants({ variant: "default" }),
              "mx-auto w-fit rounded-full border !border-blue-primary !bg-transparent px-4 py-1"
            ),
            children: /* @__PURE__ */ jsx("h2", { className: "mx-auto w-fit px-2 py-1 text-center text-xl font-bold text-blue-primary", children: "Nossa Clínica" })
          }
        ) }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto max-w-2xl text-center text-base font-medium text-[#757575]", children: "Localizada próxima ao centro de Presidente Prudente/SP, contamos com instalações novas, consultórios amplos, área kids, espaço café e uma equipe de recepção pronta para atender nossos pacientes, com muito conforto e acessibilidade." }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-10", children: /* @__PURE__ */ jsx("span", { className: "text-center text-base font-bold text-[#757575]", children: "CLIQUE NA FOTO PARA AMPLIAR" }) }),
        /* @__PURE__ */ jsxs("div", { className: "mx-auto flex w-11/12 flex-col items-center gap-4", children: [
          /* @__PURE__ */ jsx(
            ExapandableImage,
            {
              imgSrc: "/imgs/nossa-clinica/1.png",
              alt: "Nossa Clínica 1",
              className: "mx-auto w-full max-w-7xl"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-2 md:gap-4", children: [
            /* @__PURE__ */ jsx(
              ExapandableImage,
              {
                imgSrc: "/imgs/nossa-clinica/2.png",
                alt: "Nossa Clínica 2",
                className: "w-full max-w-sm md:max-w-7xl"
              }
            ),
            /* @__PURE__ */ jsx(
              ExapandableImage,
              {
                imgSrc: "/imgs/nossa-clinica/3.png",
                alt: "Nossa Clínica 3",
                className: "w-full max-w-sm md:max-w-7xl"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            ExapandableImage,
            {
              imgSrc: "/imgs/nossa-clinica/4.png",
              alt: "Nossa Clínica 4",
              className: "mx-auto w-full max-w-7xl"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-2 md:gap-4", children: [
            /* @__PURE__ */ jsx(
              ExapandableImage,
              {
                imgSrc: "/imgs/nossa-clinica/5.png",
                alt: "Nossa Clínica 5",
                className: "w-full max-w-sm md:max-w-7xl"
              }
            ),
            /* @__PURE__ */ jsx(
              ExapandableImage,
              {
                imgSrc: "/imgs/nossa-clinica/6.png",
                alt: "Nossa Clínica 6",
                className: "w-full max-w-sm md:max-w-7xl"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-2 md:gap-4", children: [
            /* @__PURE__ */ jsx(
              ExapandableImage,
              {
                imgSrc: "/imgs/nossa-clinica/7.png",
                alt: "Nossa Clínica 7",
                className: "w-full max-w-sm md:max-w-7xl"
              }
            ),
            /* @__PURE__ */ jsx(
              ExapandableImage,
              {
                imgSrc: "/imgs/nossa-clinica/8.png",
                alt: "Nossa Clínica 8",
                className: "w-full max-w-sm md:max-w-7xl"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            ExapandableImage,
            {
              imgSrc: "/imgs/nossa-clinica/9.png",
              alt: "Nossa Clínica 9",
              className: "mx-auto w-full max-w-7xl"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-2 md:gap-4", children: [
            /* @__PURE__ */ jsx(
              ExapandableImage,
              {
                imgSrc: "/imgs/nossa-clinica/10.png",
                alt: "Nossa Clínica 10",
                className: "w-full max-w-sm md:max-w-7xl"
              }
            ),
            /* @__PURE__ */ jsx(
              ExapandableImage,
              {
                imgSrc: "/imgs/nossa-clinica/11.png",
                alt: "Nossa Clínica 11",
                className: "w-full max-w-sm md:max-w-7xl"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-2 md:gap-4", children: [
            /* @__PURE__ */ jsx(
              ExapandableImage,
              {
                imgSrc: "/imgs/nossa-clinica/12.png",
                alt: "Nossa Clínica 12",
                className: "w-full max-w-sm md:max-w-7xl"
              }
            ),
            /* @__PURE__ */ jsx(
              ExapandableImage,
              {
                imgSrc: "/imgs/nossa-clinica/13.png",
                alt: "Nossa Clínica 13",
                className: "w-full max-w-sm md:max-w-7xl"
              }
            )
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
