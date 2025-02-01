import { Link } from '@inertiajs/react';
import { Button } from '../ui/button';
import { SocialLinks } from './components/social-links';

function Footer() {
  return (
    <footer className="flex flex-col gap-4 bg-blue-tertiary">
      <a href="#top" className="mx-auto">
        <Button className="rounded-b-2xl rounded-t-none !bg-blue-secondary px-8 py-6 text-xs font-bold md:text-sm">
          Ir para o topo
        </Button>
      </a>
      <div className="mx-auto w-10/12 max-w-7xl space-y-6 py-10 md:w-11/12 md:space-y-14">
        <img
          src="/imgs/otologic-white.svg"
          alt="Logo Vida Radiologia"
          className="max-w-[150px] md:max-w-[250px] lg:hidden"
        />
        <div className="mx-auto flex w-11/12 flex-row gap-4 md:flex-col md:gap-14">
          <div className="mx-auto flex w-full flex-col justify-center gap-4 md:max-w-3xl md:flex-row md:items-center">
            <img
              src="/imgs/otologic-white.svg"
              alt="Logo Vida Radiologia"
              className="mx-auto hidden max-w-[150px] md:w-80 md:max-w-[350px] lg:block"
            />
            <div className="flex flex-col gap-2 text-[8px] font-bold text-white md:text-sm">
              <div className="flex flex-col justify-between gap-2 md:flex-row md:gap-4">
                <a
                  href="https://pacs.clinicavidaradiologia.com.br/login"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-white/80"
                >
                  Agendamento
                </a>
                <span className="hidden md:block">|</span>
                <Link href="/exames" className="hover:text-white/80">
                  Nossa Clínica
                </Link>
                <span className="hidden md:block">|</span>
                <Link href="/corpo-clinico" className="hover:text-white/80">
                  Nossos Exames
                </Link>
              </div>
              <div className="flex flex-col gap-2 md:flex-row md:gap-4">
                <Link href="/unidades" className="hover:text-white/80">
                  Corpo Clínico
                </Link>
                <span className="hidden md:block">|</span>
                <Link href="/convenios" className="hover:text-white/80">
                  Notícias
                </Link>
                <span className="hidden md:block">|</span>
                <Link href="/fale-conosco" className="hover:text-white/80">
                  Convênios Atendidos
                </Link>
              </div>
              {/* <div className="flex flex-col justify-between gap-2 md:flex-row md:gap-4">
                <Link
                  href="/politica-de-privacidade"
                  className="hover:text-white/80"
                >
                  Política de Privacidade
                </Link>
              </div> */}
            </div>
          </div>
          <div className="flex w-full flex-col justify-center">
            <SocialLinks />
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex flex-col gap-1 text-center text-[8px] font-normal text-white md:text-xs">
            <span>Vida Radiologia | CNPJ: 41.037.121/00001-95</span>
            <span>
              Rua Reverendo Coriolano, 1646 - CEP 19015-070 - Pres. Prudente/SP
            </span>
            <span>
              Responsável Técnico: Dr. Natalie Ravazzi - CRM/SP 95.612
            </span>
          </div>
          <div className="flex justify-center">
            <span className="mx-auto text-center text-[8px] font-normal text-white md:text-xs">
              @2025 Clínica Otologic - Todos os direitos reservados
            </span>
          </div>
          <span className="flex items-center justify-center gap-2 text-center text-[8px] font-normal text-white md:text-xs">
            DESENVOLVIDO POR{' '}
            <a
              href="https://www.promarke.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/imgs/logo_promarke.png" alt="Logo Agência Promarke" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
