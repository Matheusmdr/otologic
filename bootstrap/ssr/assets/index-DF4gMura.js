import { jsxs, jsx } from "react/jsx-runtime";
import { c as cn, b as buttonVariants, B as Button } from "./button-weNgVMLy.js";
import { M as MainLayout } from "./main-layout-CBkoy-c-.js";
import { Head, Link } from "@inertiajs/react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ChevronRight } from "lucide-react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "react";
import "clsx";
import "tailwind-merge";
import "./toaster-CPGl9inu.js";
import "@radix-ui/react-icons";
import "@radix-ui/react-toast";
function Page({ news }) {
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("title", { children: news.title }) }),
    /* @__PURE__ */ jsxs("main", { className: "space-y-10 bg-white py-10 md:space-y-20 md:py-20", children: [
      /* @__PURE__ */ jsx("section", { className: "flex flex-col gap-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex w-11/12 max-w-5xl flex-col justify-center gap-2 md:gap-6", children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto flex w-11/12 max-w-7xl flex-col justify-center gap-10", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              buttonVariants({ variant: "default" }),
              "mx-auto w-fit rounded-full border !border-blue-primary !bg-transparent px-4 py-1"
            ),
            children: /* @__PURE__ */ jsx("h2", { className: "mx-auto w-fit px-2 py-1 text-center text-xl font-bold text-blue-primary", children: "Notícias" })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("span", { className: "text-sm text-[#757575]", children: format(new Date(news.created_at), "PPP", {
          locale: ptBR
        }) }) }),
        /* @__PURE__ */ jsx("div", { className: "h-[1px] w-full bg-gray-300" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-base font-semibold text-[#757575]", children: news.title }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "[&_h2]:font-bold[&_h3]:text-base [&_h5]:font-bold[&_h6]:text-base space-y-4 text-sm font-normal text-[#757575] [&_h1]:text-base [&_h1]:font-bold [&_h2]:text-base [&_h3]:font-bold [&_h4]:text-base [&_h4]:font-bold [&_h5]:text-base [&_h6]:font-bold [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:text-[#757575]",
              dangerouslySetInnerHTML: { __html: news.body }
            }
          ),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: news.cover_image,
              alt: news.title,
              className: "mx-auto w-10/12 rounded-xl md:max-w-[600px]"
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "[&_h2]:font-bold[&_h3]:text-base [&_h5]:font-bold[&_h6]:text-base space-y-4 text-sm font-normal text-[#757575] [&_h1]:text-base [&_h1]:font-bold [&_h2]:text-base [&_h3]:font-bold [&_h4]:text-base [&_h4]:font-bold [&_h5]:text-base [&_h6]:font-bold [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:text-[#757575]",
              dangerouslySetInnerHTML: { __html: news.body_2 }
            }
          )
        ] })
      ] }) }),
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
