import { HeaderDesktop } from './components/header-desktop';
import { HeaderMobile } from './components/header-mobile';

const menuItems = [
  {
    title: 'Nossa Clinica',
    href: '/nossa-clinica',
    isExternal: false,
  },
  {
    title: 'Nossos Exames',
    href: '/nossos-exames',
    isExternal: false,
  },
  {
    title: 'Corpo Clínico',
    href: '/corpo-clinico',
    isExternal: false,
  },
  {
    title: 'Notícias',
    href: '/noticias',
    isExternal: false,
  },
  {
    title: 'Convênios Atendidos',
    href: '/convenios',
    isExternal: false,
  },
];

function Header() {
  return (
    <>
      <HeaderDesktop menuItems={menuItems} />
      <HeaderMobile />
    </>
  );
}

export { Header };
