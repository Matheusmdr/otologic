import { jsx, jsxs } from "react/jsx-runtime";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as React from "react";
import { c as cn, b as buttonVariants, B as Button } from "./button-weNgVMLy.js";
import { ChevronDown, ChevronRight } from "lucide-react";
import { M as MainLayout } from "./main-layout-CHkpqxUr.js";
import { Head, Link } from "@inertiajs/react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "./toaster-CPGl9inu.js";
import "@radix-ui/react-icons";
import "@radix-ui/react-toast";
const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("border-b", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "group flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>div>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx("div", { className: "w-fit rounded-lg bg-blue-primary p-1", children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-white transition-transform duration-200" }) })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
function Page({ exams }) {
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Nossos Exames" }),
    /* @__PURE__ */ jsxs("main", { className: "space-y-10 bg-white py-10 md:space-y-20 md:py-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "flex flex-col gap-10", children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto flex w-11/12 max-w-7xl flex-col justify-center gap-10", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              buttonVariants({ variant: "default" }),
              "mx-auto w-fit rounded-full border !border-blue-primary !bg-transparent px-4 py-1"
            ),
            children: /* @__PURE__ */ jsx("h2", { className: "mx-auto w-fit px-2 py-1 text-center text-xl font-bold text-blue-primary", children: "Nossos Exames" })
          }
        ) }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto max-w-2xl text-center text-base font-medium text-[#757575]", children: "Na Otologic, oferecemos uma ampla gama de exames especializados em Otorrinolaringologia e Audiologia, garantindo diagnósticos precisos e um atendimento de excelência." }),
        /* @__PURE__ */ jsx("div", { className: "mx-auto w-11/12 max-w-7xl", children: /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, children: exams.map((exam) => /* @__PURE__ */ jsxs(AccordionItem, { value: exam.title, children: [
          /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-center text-base font-bold text-blue-tertiary", children: exam.title }),
          /* @__PURE__ */ jsx(AccordionContent, { children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "text-base font-normal text-[#757575] [&_h1]:text-base [&_h1]:font-bold [&_h2]:text-base [&_h2]:font-bold [&_h3]:text-base [&_h3]:font-bold [&_h4]:text-base [&_h4]:font-bold [&_h5]:text-base [&_h5]:font-bold [&_h6]:text-base [&_h6]:font-bold [&_p]:mb-4 [&_ul]:list-disc [&_ul]:space-y-4 [&_ul]:pl-5",
              dangerouslySetInnerHTML: { __html: exam.body ?? "" }
            }
          ) })
        ] }, exam.id)) }) })
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
