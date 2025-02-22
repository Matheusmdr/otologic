const socialLinks = [
  {
    text: 'Phone',
    url: 'https://www.instagram.com/_vidaradiologia/',
    icon: '/imgs/social/phone.svg',
    alt: 'Ícone do telefone.',
  },
  {
    text: 'Whatsapp',
    url: 'https://www.instagram.com/_vidaradiologia/',
    icon: '/imgs/social/whatsapp.svg',
    alt: 'Ícone do Whatsapp.',
  },
  {
    text: 'Instagram',
    url: 'https://www.instagram.com/_vidaradiologia/',
    icon: '/imgs/social/instagram.svg',
    alt: 'Ícone do Instagram.',
  },
  {
    text: 'Facebook',
    url: 'https://www.facebook.com/UniVidasRedes/',
    icon: '/imgs/social/facebook.svg',
    alt: 'Ícone do Facebook.',
  },
];

function SocialLinks() {
  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-2 md:flex-row md:justify-center md:gap-6">
      {socialLinks.map((socialLink) => (
        <a
          key={socialLink.text}
          href={socialLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs font-bold text-white hover:text-white/80"
        >
          <img src={socialLink.icon} alt={socialLink.alt} className="h-6 w-6" />
          <span>{socialLink.text}</span>
        </a>
      ))}
    </div>
  );
}
export { SocialLinks };
