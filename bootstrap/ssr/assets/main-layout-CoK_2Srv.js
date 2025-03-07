import { jsx, jsxs, Fragment as Fragment$1 } from "react/jsx-runtime";
import { Link } from "@inertiajs/react";
import { B as Button, c as cn, b as buttonVariants } from "./button-weNgVMLy.js";
import { Fragment, useState } from "react";
import { T as Toaster } from "./toaster-CPGl9inu.js";
const socialLinks = [
  {
    text: "Phone",
    url: "tel:+551821012001",
    icon: "/imgs/social/phone.svg",
    alt: "Ícone do telefone."
  },
  {
    text: "Whatsapp",
    url: "https://wa.me/5518996812001",
    icon: "/imgs/social/whatsapp.svg",
    alt: "Ícone do Whatsapp."
  },
  {
    text: "Instagram",
    url: "https://www.instagram.com/clinicaotologic/",
    icon: "/imgs/social/instagram.svg",
    alt: "Ícone do Instagram."
  },
  {
    text: "Facebook",
    url: "https://www.facebook.com/otologicpp/?locale=pt_BR",
    icon: "/imgs/social/facebook.svg",
    alt: "Ícone do Facebook."
  }
];
function SocialLinks() {
  return /* @__PURE__ */ jsx("div", { className: "mx-auto flex w-full max-w-xl flex-col gap-2 md:flex-row md:justify-center md:gap-6", children: socialLinks.map((socialLink) => /* @__PURE__ */ jsxs(
    "a",
    {
      href: socialLink.url,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "flex items-center gap-2 text-xs font-bold text-white hover:text-white/80",
      children: [
        /* @__PURE__ */ jsx("img", { src: socialLink.icon, alt: socialLink.alt, className: "h-6 w-6" }),
        /* @__PURE__ */ jsx("span", { children: socialLink.text })
      ]
    },
    socialLink.text
  )) });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "flex flex-col gap-4 bg-blue-tertiary", children: [
    /* @__PURE__ */ jsx("a", { href: "#top", className: "mx-auto", children: /* @__PURE__ */ jsx(Button, { className: "rounded-b-2xl rounded-t-none !bg-blue-secondary px-8 py-6 text-xs font-bold md:text-sm", children: "Ir para o topo" }) }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto w-10/12 max-w-7xl space-y-6 py-10 md:w-11/12 md:space-y-14", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/imgs/otologic-white.svg",
          alt: "Logo Otologic",
          className: "max-w-[150px] md:max-w-[250px] lg:hidden"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "mx-auto flex w-11/12 flex-row gap-4 md:flex-col md:gap-14", children: [
        /* @__PURE__ */ jsxs("div", { className: "mx-auto flex w-full flex-col justify-center gap-4 md:max-w-3xl md:flex-row md:items-center", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "/imgs/otologic-white.svg",
              alt: "Logo Otologic",
              className: "mx-auto hidden max-w-[150px] md:w-80 md:max-w-[350px] lg:block"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 text-[8px] font-bold text-white md:text-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between gap-2 md:flex-row md:gap-4", children: [
              /* @__PURE__ */ jsx(Link, { href: "/agendamento", className: "hover:text-white/80", children: "Agendamento" }),
              /* @__PURE__ */ jsx("span", { className: "hidden md:block", children: "|" }),
              /* @__PURE__ */ jsx(Link, { href: "/nossa-clinica", className: "hover:text-white/80", children: "Nossa Clínica" }),
              /* @__PURE__ */ jsx("span", { className: "hidden md:block", children: "|" }),
              /* @__PURE__ */ jsx(Link, { href: "/nossos-exames", className: "hover:text-white/80", children: "Nossos Exames" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 md:flex-row md:gap-4", children: [
              /* @__PURE__ */ jsx(Link, { href: "/corpo-clinico", className: "hover:text-white/80", children: "Corpo Clínico" }),
              /* @__PURE__ */ jsx("span", { className: "hidden md:block", children: "|" }),
              /* @__PURE__ */ jsx(Link, { href: "/noticias", className: "hover:text-white/80", children: "Notícias" }),
              /* @__PURE__ */ jsx("span", { className: "hidden md:block", children: "|" }),
              /* @__PURE__ */ jsx(Link, { href: "/convenios", className: "hover:text-white/80", children: "Convênios Atendidos" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex w-full flex-col justify-center", children: /* @__PURE__ */ jsx(SocialLinks, {}) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 md:gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1 text-center text-[8px] font-normal text-white md:text-xs", children: [
          /* @__PURE__ */ jsx("span", { children: "Vida Radiologia | CNPJ: 41.037.121/00001-95" }),
          /* @__PURE__ */ jsx("span", { children: "Rua Reverendo Coriolano, 1646 - CEP 19015-070 - Pres. Prudente/SP" }),
          /* @__PURE__ */ jsx("span", { children: "Responsável Técnico: Dr. Natalie Ravazzi - CRM/SP 95.612" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("span", { className: "mx-auto text-center text-[8px] font-normal text-white md:text-xs", children: "@2025 Clínica Otologic - Todos os direitos reservados" }) }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-center gap-2 text-center text-[8px] font-normal text-white md:text-xs", children: [
          "DESENVOLVIDO POR",
          " ",
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.promarke.com.br",
              target: "_blank",
              rel: "noopener noreferrer",
              children: /* @__PURE__ */ jsx("img", { src: "/imgs/logo_promarke.png", alt: "Logo Agência Promarke" })
            }
          )
        ] })
      ] })
    ] })
  ] });
}
function WhatsappButton({ className }) {
  return /* @__PURE__ */ jsx(Link, { href: "/agendamento", children: /* @__PURE__ */ jsx(
    Button,
    {
      className: cn(
        "rounded-3xl bg-white text-xl font-bold text-blue-primary hover:bg-white",
        className
      ),
      children: /* @__PURE__ */ jsx("span", { children: " Agende seu exame!" })
    }
  ) });
}
function HeaderDesktop({ menuItems: menuItems2 }) {
  return /* @__PURE__ */ jsxs(
    "header",
    {
      id: "top",
      className: "sticky top-0 z-10 hidden bg-blue-primary shadow lg:block",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mx-auto flex w-11/12 max-w-5xl items-center justify-between py-4", children: [
          /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/imgs/otologic-white.svg",
              alt: "Logo Otologic",
              className: "w-80"
            }
          ) }),
          /* @__PURE__ */ jsx(WhatsappButton, { className: "px-6" }),
          /* @__PURE__ */ jsx("a", { href: "tel:+551821012001", target: "_blank", rel: "noreferrer noopener", children: /* @__PURE__ */ jsx(Button, { className: "rounded-3xl border-2 border-white bg-blue-primary text-xl text-white hover:bg-white hover:text-blue-primary", children: "18 2101-2001" }) })
        ] }),
        /* @__PURE__ */ jsx("nav", { className: "bg-blue-primary py-4", children: /* @__PURE__ */ jsx("div", { className: "mx-auto flex w-11/12 max-w-7xl justify-between text-white", children: menuItems2.map((item) => /* @__PURE__ */ jsx(Fragment, { children: item.isExternal ? /* @__PURE__ */ jsx(
          "a",
          {
            href: item.href,
            className: "text-xl font-bold hover:text-white",
            target: "_blank",
            rel: "noreferrer noopener",
            children: item.title
          }
        ) : /* @__PURE__ */ jsx(
          Link,
          {
            href: item.href,
            className: "text-xl font-bold hover:text-white",
            children: item.title
          }
        ) }, item.title)) }) })
      ]
    }
  );
}
const menuItems$1 = [
  {
    title: "Agendamento",
    href: "/agendamento",
    isExternal: true
  },
  {
    title: "Nossa Clínica",
    href: "/nossa-clinica",
    isExternal: false
  },
  {
    title: "Nossos Exames",
    href: "/nossos-exames",
    isExternal: false
  },
  {
    title: "Corpo Clínico",
    href: "/corpo-clinico",
    isExternal: false
  },
  {
    title: "Notícias",
    href: "/noticias",
    isExternal: false
  },
  {
    title: "Convênios Atendidos",
    href: "/convenios",
    isExternal: false
  }
];
function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 rounded-full bg-blue-primary transition ease-in-out transform duration-300`;
  return /* @__PURE__ */ jsxs("header", { id: "top", className: "sticky top-0 z-10 block bg-white lg:hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto flex w-11/12 items-center justify-between py-4", children: [
      /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/imgs/otologic.svg",
          className: "max-w-[210px]",
          alt: "Logo Otologic"
        }
      ) }),
      /* @__PURE__ */ jsxs(
        Button,
        {
          size: "icon",
          className: cn(
            "relative z-50 flex h-12 w-12 flex-col items-center justify-center gap-0 rounded-xl border-2 border-transparent !bg-transparent shadow-none lg:hidden",
            isOpen && "fixed shadow-none"
          ),
          onClick: () => setIsOpen(!isOpen),
          name: "Menu Mobile",
          "aria-label": "Menu Mobile",
          "aria-expanded": isOpen,
          "aria-controls": "menu-mobile",
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: cn(
                  genericHamburgerLine,
                  "opacity-100",
                  isOpen && "my-1 translate-y-3 rotate-45 bg-white opacity-100"
                )
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: cn(
                  genericHamburgerLine,
                  "mt-1 opacity-100",
                  isOpen && "my-1 opacity-0"
                )
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: cn(
                  genericHamburgerLine,
                  "mt-1 opacity-100",
                  isOpen && "my-1 -translate-y-3 -rotate-45 bg-white opacity-100"
                )
              }
            )
          ]
        }
      )
    ] }),
    isOpen && /* @__PURE__ */ jsx(
      "nav",
      {
        className: cn(
          "fixed inset-0 z-40 hidden h-full w-screen items-center justify-center bg-blue-primary lg:relative lg:inset-auto lg:block lg:w-fit lg:bg-transparent",
          isOpen && "flex lg:block"
        ),
        children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8", children: [
          /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/imgs/otologic-white.svg",
              className: "max-w-[250px]",
              alt: "Logo Instituto de Radiologia de Presidente Prudente"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center gap-3", children: menuItems$1.map((item) => /* @__PURE__ */ jsxs(Fragment, { children: [
            item.isExternal ? /* @__PURE__ */ jsx(
              "a",
              {
                href: item.href,
                className: "text-base font-semibold text-white hover:text-white",
                children: item.title
              }
            ) : /* @__PURE__ */ jsx(
              Link,
              {
                href: item.href,
                className: "text-base font-semibold text-white hover:text-white",
                children: item.title
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "h-[1px] w-full bg-white" })
          ] }, item.title)) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-center text-xs text-white hover:text-white", children: "Acompanhe nossas redes!" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-4", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://www.instagram.com/clinicaotologic/",
                  target: "_blank",
                  rel: "noreferrer noopener",
                  children: /* @__PURE__ */ jsx("img", { src: "/imgs/social/instagram.svg" })
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://www.facebook.com/otologicpp/?locale=pt_BR",
                  target: "_blank",
                  rel: "noreferrer noopener",
                  children: /* @__PURE__ */ jsx("img", { src: "/imgs/social/facebook.svg" })
                }
              )
            ] })
          ] })
        ] })
      }
    )
  ] });
}
const menuItems = [
  {
    title: "Nossa Clinica",
    href: "/nossa-clinica",
    isExternal: false
  },
  {
    title: "Nossos Exames",
    href: "/nossos-exames",
    isExternal: false
  },
  {
    title: "Corpo Clínico",
    href: "/corpo-clinico",
    isExternal: false
  },
  {
    title: "Notícias",
    href: "/noticias",
    isExternal: false
  },
  {
    title: "Convênios Atendidos",
    href: "/convenios",
    isExternal: false
  }
];
function Header() {
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(HeaderDesktop, { menuItems }),
    /* @__PURE__ */ jsx(HeaderMobile, {})
  ] });
}
function MainLayout({ children }) {
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    children,
    /* @__PURE__ */ jsx(Toaster, {}),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "https://wa.me/5518996812001",
        target: "_blank",
        rel: "noreferrer noopener",
        className: cn(
          buttonVariants({ variant: "ghost", size: "icon" }),
          "fixed bottom-2 right-2 h-12 w-12 hover:bg-transparent md:h-20 md:w-20"
        ),
        children: /* @__PURE__ */ jsx("img", { src: "/imgs/whatsapp-button.png", alt: "whatsapp-button" })
      }
    ),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  MainLayout as M
};
