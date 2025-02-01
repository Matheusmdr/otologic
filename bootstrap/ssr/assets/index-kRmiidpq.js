import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import Autoplay from "embla-carousel-autoplay";
import { c as cn, B as Button, b as buttonVariants } from "./button-weNgVMLy.js";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import useEmblaCarousel from "embla-carousel-react";
import * as React from "react";
import { Link } from "@inertiajs/react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ChevronRight } from "lucide-react";
import { M as MainLayout } from "./main-layout-Blxx2IiP.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "./toaster-CPGl9inu.js";
import "@radix-ui/react-toast";
const CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel$1 = React.forwardRef(
  ({
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
  }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const [curr, setCurr] = React.useState(0);
    const onSelect = React.useCallback((api2) => {
      if (!api2) {
        return;
      }
      setCurr(api2.selectedScrollSnap());
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    const scrollPrev = React.useCallback(() => {
      api == null ? void 0 : api.scrollPrev();
    }, [api]);
    const scrollNext = React.useCallback(() => {
      api == null ? void 0 : api.scrollNext();
    }, [api]);
    const handleKeyDown = React.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );
    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    }, [api, setApi]);
    React.useEffect(() => {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api == null ? void 0 : api.off("select", onSelect);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ jsx(
      CarouselContext.Provider,
      {
        value: {
          carouselRef,
          api,
          opts,
          orientation: orientation || ((opts == null ? void 0 : opts.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          curr
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            ref,
            onKeyDownCapture: handleKeyDown,
            className: cn("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children
          }
        )
      }
    );
  }
);
Carousel$1.displayName = "Carousel";
const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        "flex",
        orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        className
      ),
      ...props
    }
  ) });
});
CarouselContent.displayName = "CarouselContent";
const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      role: "group",
      "aria-roledescription": "slide",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
});
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollPrev,
      onClick: scrollPrev,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowLeftIcon, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollNext,
      onClick: scrollNext,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowRightIcon, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
CarouselNext.displayName = "CarouselNext";
const CarouselDots = React.forwardRef(({ className, ...props }, ref) => {
  const { api, orientation, curr } = useCarousel();
  const count = (api == null ? void 0 : api.scrollSnapList().length) ?? 0;
  const scrollTo = React.useCallback(
    (i) => {
      api == null ? void 0 : api.scrollTo(i);
    },
    [api]
  );
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "flex justify-center gap-2",
        orientation === "horizontal" ? "" : "flex-col"
      ),
      children: Array.from({ length: count }, (_, i) => /* @__PURE__ */ jsx(
        Button,
        {
          ref,
          className: cn(
            "h-2 w-2 p-0 transition-all duration-300",
            i === curr ? "bg-primary" : "bg-slate-400",
            className
          ),
          onClick: () => scrollTo(i),
          ...props,
          children: /* @__PURE__ */ jsxs("span", { className: "sr-only", children: [
            "Slide ",
            curr + 1,
            " of ",
            count
          ] })
        },
        i
      ))
    }
  );
});
CarouselDots.displayName = "CarouselDots";
function Carousel() {
  return /* @__PURE__ */ jsx(
    Carousel$1,
    {
      opts: {
        align: "center",
        loop: true
      },
      plugins: [
        Autoplay({
          delay: 7e3
        })
      ],
      children: /* @__PURE__ */ jsxs(CarouselContent, { children: [
        /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/imgs/fachada-otologic.png",
            className: "max-h-[650px] w-full object-cover"
          }
        ) }),
        /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/imgs/fachada-otologic.png",
            className: "max-h-[650px] w-full object-cover"
          }
        ) }),
        /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/imgs/fachada-otologic.png",
            className: "max-h-[650px] w-full object-cover"
          }
        ) })
      ] })
    }
  );
}
function HeroBanner({ banners }) {
  return /* @__PURE__ */ jsx(Fragment, { children: banners.length > 0 && /* @__PURE__ */ jsx("section", { className: "hidden md:block", children: /* @__PURE__ */ jsxs(
    Carousel$1,
    {
      plugins: [
        Autoplay({
          delay: 7e3
        })
      ],
      opts: {
        loop: true,
        align: "start"
      },
      className: "relative",
      children: [
        /* @__PURE__ */ jsx(CarouselContent, { children: banners.map(
          (banner) => {
            var _a;
            return ((_a = banner == null ? void 0 : banner.image) == null ? void 0 : _a.trim()) && /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsx(
              "a",
              {
                href: banner.link ?? "#",
                target: "_blank",
                rel: "noreferrer",
                className: "w-full",
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: banner.image,
                    alt: banner.description,
                    className: "w-full"
                  }
                )
              }
            ) }, banner.id);
          }
        ) }),
        /* @__PURE__ */ jsx(CarouselPrevious, { className: "left-4 bg-blue-primary font-bold text-white hover:border-blue-primary hover:text-blue-primary" }),
        /* @__PURE__ */ jsx(CarouselNext, { className: "right-4 bg-blue-primary font-bold text-white hover:border-blue-primary hover:text-blue-primary" })
      ]
    }
  ) }) });
}
const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "h3",
  {
    ref,
    className: cn("font-semibold leading-none tracking-tight", className),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
function News({ latestNews }) {
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 py-5 md:grid-cols-2 md:gap-8 md:py-10 lg:grid-cols-3", children: latestNews.map((news, i) => /* @__PURE__ */ jsxs(
    Card,
    {
      className: cn(
        "flex h-full w-full flex-row rounded-2xl border-none bg-transparent p-0 shadow-none md:rounded-[34px]"
      ),
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: `${news.cover_image}`,
            className: "max-h-44 max-w-44 basis-1/2",
            alt: news.title
          }
        ),
        /* @__PURE__ */ jsxs(CardContent, { className: "flex basis-1/2 flex-col gap-1 bg-white px-2 py-3 md:gap-4 md:py-4", children: [
          /* @__PURE__ */ jsx("span", { className: "text-base text-[#757575]", children: format(new Date(news.created_at), "PP", { locale: ptBR }) }),
          /* @__PURE__ */ jsx("h4", { className: "text-base font-semibold text-[#757575]", children: news.title.length > 80 ? news.title.substring(0, 80) + "..." : news.title }),
          /* @__PURE__ */ jsx(CardFooter, { className: "flex bg-white p-0", children: /* @__PURE__ */ jsxs(
            Link,
            {
              href: `/noticias/${news.slug}`,
              className: "inline-flex items-center gap-2 rounded-full bg-blue-primary px-2 py-1 text-base text-white",
              children: [
                /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" }),
                "Saiba Mais"
              ]
            }
          ) })
        ] })
      ]
    },
    i
  )) });
}
function Page({ banners, news }) {
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(HeroBanner, { banners }),
    /* @__PURE__ */ jsxs("main", { className: "bg-main-background py-10 md:py-20", children: [
      /* @__PURE__ */ jsx("section", { className: "pb-10 md:pb-20 md:pt-0", children: /* @__PURE__ */ jsx("div", { className: "mx-auto flex w-11/12 max-w-7xl flex-col justify-center gap-2 md:gap-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-center text-xl font-medium text-blue-primary", children: [
          "REFERÊNCIA ",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("strong", { className: "font-bold", children: "em saúde e bem-estar!" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto max-w-2xl text-center text-base font-medium text-[#757575]", children: "A Clínica Otologic é referência em saúde e bem-estar, especializada em Otorrinolaringologia e Audiologia. Oferecemos atendimento completo e personalizado, abrangendo consultas clínicas para crianças e adultos, cirurgias e exames especializados." })
      ] }) }) }),
      /* @__PURE__ */ jsx(Carousel, {}),
      /* @__PURE__ */ jsx("section", { className: "bg-blue-secondary py-10 md:py-20", children: /* @__PURE__ */ jsx("div", { className: "mx-auto flex w-11/12 max-w-7xl flex-col justify-center gap-2 md:gap-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-8", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              buttonVariants({ variant: "default" }),
              "rounded-full border !border-white !bg-transparent px-4 py-1"
            ),
            children: /* @__PURE__ */ jsx("h2", { className: "mx-auto w-fit px-2 py-1 text-center text-xl font-bold text-white", children: "Somos especialistas" })
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "mx-auto max-w-2xl text-center text-base font-medium text-white", children: "A Clínica Otologic é referência em saúde e bem-estar, especializada em Otorrinolaringologia e Audiologia. Oferecemos atendimento completo e personalizado, abrangendo consultas clínicas para crianças e adultos, cirurgias e exames especializados." }),
        /* @__PURE__ */ jsxs("div", { className: "mx-auto grid w-full max-w-2xl grid-cols-3 divide-x divide-white", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsx("img", { src: "/imgs/ouvido.svg", className: "max-w-20" }),
            /* @__PURE__ */ jsx("span", { className: "text-base font-medium text-white", children: "OUVIDO" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsx("img", { src: "/imgs/nariz.svg", className: "max-w-20" }),
            /* @__PURE__ */ jsx("span", { className: "text-base font-medium text-white", children: "NARIZ" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsx("img", { src: "/imgs/garganta.svg", className: "max-w-20" }),
            /* @__PURE__ */ jsx("span", { className: "text-base font-medium text-white", children: "GARGANTA" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(Link, { href: "/convenios", className: "self-center", children: /* @__PURE__ */ jsx(Button, { className: "w-fit rounded-3xl border border-blue-primary bg-blue-primary px-2 py-1 text-base font-bold text-white hover:bg-white hover:text-blue-primary", children: "Conheça nossa clínica" }) }) })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-white py-10 md:py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex w-11/12 max-w-7xl flex-col justify-center gap-2 md:gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-8", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(
                buttonVariants({ variant: "default" }),
                "rounded-full border !border-blue-primary !bg-transparent px-4 py-1"
              ),
              children: /* @__PURE__ */ jsx("h2", { className: "mx-auto w-fit px-2 py-1 text-center text-xl font-bold text-blue-primary", children: "Notícias" })
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "mx-auto max-w-2xl text-center text-base font-medium text-[#757575]", children: "Fique por dentro das curiosidades, doenças, exames e tratamentos para a sua saúde." })
        ] }),
        /* @__PURE__ */ jsx(News, { latestNews: news }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(Link, { href: "/noticias", className: "self-center", children: /* @__PURE__ */ jsxs(Button, { className: "w-fit rounded-3xl border border-blue-primary bg-blue-primary px-2 py-1 text-base font-bold text-white hover:bg-white hover:text-blue-primary", children: [
          /* @__PURE__ */ jsx(ChevronRight, {}),
          "Mais notícias"
        ] }) }) })
      ] }) })
    ] })
  ] });
}
export {
  Page as default
};
