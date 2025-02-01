import { jsxs, jsx } from "react/jsx-runtime";
import { c as cn, b as buttonVariants, B as Button } from "./button-weNgVMLy.js";
import { M as MainLayout } from "./main-layout-Blxx2IiP.js";
import { Head, Link } from "@inertiajs/react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Fragment } from "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "./toaster-CPGl9inu.js";
import "@radix-ui/react-icons";
import "@radix-ui/react-toast";
function Page({ news }) {
  var _a, _b;
  const { data } = news;
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("title", { children: "Notícias" }) }),
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
        /* @__PURE__ */ jsx("p", { className: "mx-auto max-w-2xl text-center text-base font-medium text-[#757575]", children: "Fique por dentro de todas as notícias sobre cuidados com a sua saúde!" }),
        /* @__PURE__ */ jsx("div", { children: data.map((newsItem) => /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center gap-4 py-4", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: newsItem.cover_image,
                alt: newsItem.title,
                className: "w-full rounded-xl object-cover md:max-h-[250px]"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[#757575]", children: format(new Date(newsItem.created_at), "PPP", {
                locale: ptBR
              }) }),
              /* @__PURE__ */ jsx("h1", { className: "text-base font-semibold text-[#757575]", children: newsItem.title }),
              /* @__PURE__ */ jsx(Link, { href: `/noticias/${newsItem.slug}`, children: /* @__PURE__ */ jsxs(Button, { className: "w-fit rounded-3xl border border-blue-primary bg-blue-primary px-2 py-1 text-base font-normal text-white hover:bg-white hover:text-blue-primary", children: [
                /* @__PURE__ */ jsx(ChevronRight, {}),
                "Saiba Mais"
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-[1px] w-full bg-gray-300" })
        ] }, newsItem.id)) }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-6", children: [
          ((_a = news.prev_page_url) == null ? void 0 : _a.trim()) && /* @__PURE__ */ jsxs(
            Link,
            {
              href: news.prev_page_url,
              className: "flex self-center text-xs font-bold text-blue-primary",
              children: [
                /* @__PURE__ */ jsx(ChevronLeft, { className: "mr-2 h-4 w-4" }),
                " Página anterior"
              ]
            }
          ),
          ((_b = news.next_page_url) == null ? void 0 : _b.trim()) && /* @__PURE__ */ jsxs(
            Link,
            {
              href: news.next_page_url,
              className: "flex self-center text-xs font-bold text-blue-primary",
              children: [
                "Próxima página ",
                /* @__PURE__ */ jsx(ChevronRight, { className: "ml-2 h-4 w-4" })
              ]
            }
          )
        ] })
      ] }) }),
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
