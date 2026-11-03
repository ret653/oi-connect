import { useState, type FormEvent } from "react";
import {
  ArrowDownRight, ArrowRight, BadgeCheck, CheckCircle2, ChevronDown,
  Disc3, Gauge, Menu, MessageCircle, ShieldCheck, Wrench, X, Zap,
  Droplets, ScanLine, Settings2, CarFront, ClipboardCheck
} from "lucide-react";

const WHATSAPP_PHONE = "553491515086";
const whatsappUrl = (message: string) =>
  "https://wa.me/" + WHATSAPP_PHONE + "?text=" + encodeURIComponent(message);

const services = [
  { icon: Droplets, title: "Óleo e filtros", description: "Troca de óleo e filtros conforme as especificações do veículo." },
  { icon: ClipboardCheck, title: "Manutenção preventiva", description: "Revisões e verificações para acompanhar as condições do seu carro." },
  { icon: ScanLine, title: "Diagnóstico eletrônico", description: "Leitura por scanner e análise dos sistemas para investigar falhas." },
  { icon: Gauge, title: "Testes e avaliações", description: "Verificações técnicas para compreender sintomas e orientar reparos." },
  { icon: Disc3, title: "Alinhamento e balanceamento", description: "Serviços para contribuir com estabilidade e dirigibilidade." },
  { icon: Settings2, title: "Motor e componentes", description: "Investigação e reparos relacionados ao funcionamento do motor." },
  { icon: Zap, title: "Sistema elétrico", description: "Verificação de fusíveis e componentes elétricos do veículo." },
  { icon: Wrench, title: "Reparos em geral", description: "Avaliação mecânica para veículos nacionais e importados." },
];

export default function WorkshopSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState("Manutenção preventiva");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = [
      "Olá! Gostaria de solicitar um orçamento na Bonni Car Service.",
      "Nome: " + name.trim(),
      "Telefone: " + phone.trim(),
      "Serviço: " + service,
      "Mensagem: " + message.trim(),
    ].join("\n");
    window.location.href = whatsappUrl(text);
  }

  const closeMenu = () => setMenuOpen(false);
  const navItems = [["Início", "#inicio"], ["A Bonni", "#sobre"], ["Serviços", "#servicos"], ["Processo", "#processo"], ["Contato", "#contato"]];

  return (
    <main className="bonni-redesign">
      <div className="design-topline"><div className="design-container"><span><span className="status-dot" /> UBERABA · MINAS GERAIS</span><a href={whatsappUrl("Olá! Gostaria de falar com a Bonni Car Service.")}>ATENDIMENTO PELO WHATSAPP <ArrowRight size={13} /></a></div></div>
      <header className="design-header"><div className="design-container design-nav">
        <a className="design-brand" href="#inicio" onClick={closeMenu}><span className="brand-symbol">B<span>.</span></span><span><strong>BONNI</strong><small>CAR SERVICE</small></span></a>
        <button className="design-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? "design-links is-open" : "design-links"}>{navItems.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}<a className="design-nav-cta" href={whatsappUrl("Olá! Gostaria de solicitar um orçamento.")}>SOLICITAR ORÇAMENTO <ArrowRight size={14} /></a></nav>
      </div></header>

      <section className="design-hero" id="inicio">
        <img className="design-hero-car" src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2200&q=90" alt="Carro esportivo em fotografia automotiva" />
        <div className="design-hero-overlay" /><div className="design-hero-watermark">BONNI</div>
        <div className="design-container design-hero-content">
          <div className="design-kicker"><span /> ENGENHARIA · PERFORMANCE · CUIDADO</div>
          <p className="design-index">01 <small>— 04</small></p>
          <h1>Seu carro.<br /><span>Nosso compromisso.</span></h1>
          <p className="design-hero-copy">Manutenção e reparos automotivos com atenção aos detalhes, do veículo do dia a dia aos modelos importados.</p>
          <div className="design-hero-actions"><a className="design-primary-button" href="#contato">FALE COM A BONNI <ArrowRight size={17} /></a><a className="design-secondary-button" href="#servicos">EXPLORAR SERVIÇOS <ArrowDownRight size={17} /></a></div>
          <div className="design-hero-foot"><span>01 / PRECISÃO</span><span>02 / CONFIANÇA</span><span>03 / MOVIMENTO</span></div>
        </div><div className="design-vertical-note">BONNI CAR SERVICE · UBERABA / MG</div>
      </section>

      <section className="design-intro-strip"><div className="design-container intro-strip-inner"><span className="intro-big">B<span>.</span></span><p><strong>Mais que manutenção.</strong><br />Uma relação de confiança com quem entende o valor do seu veículo.</p><div className="intro-line" /><span className="intro-location">19°44' S<br />47°56' W</span></div></section>

      <section className="design-services" id="servicos"><div className="design-container">
        <div className="design-section-head"><div><div className="design-kicker dark-kicker"><span /> O QUE FAZEMOS</div><h2>Cuidado técnico.<br /><em>Resultado consciente.</em></h2></div><p>Cada veículo tem suas particularidades. Por isso, começamos entendendo a necessidade e orientamos os serviços indicados antes da execução.</p></div>
        <div className="design-service-grid">{services.map(({ icon: Icon, title, description }, index) => <article className="design-service-card" key={title}><div className="design-service-meta"><span>0{index + 1}</span><Icon size={22} /></div><h3>{title}</h3><p>{description}</p><a href="#contato" aria-label={"Consultar " + title}><span>SAIBA MAIS</span><ArrowRight size={16} /></a></article>)}</div>
      </div></section>

      <section className="design-about" id="sobre"><div className="design-about-image"><img src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1400&q=90" alt="Detalhe de oficina mecânica, imagem ilustrativa" /><span className="about-image-label">BONNI / WORKSHOP</span></div><div className="design-about-copy"><div className="design-kicker"><span /> A ESSÊNCIA BONNI</div><h2>Paixão por carros.<br /><em>Respeito por cada história.</em></h2><p>A Bonni Car Service atende motoristas em Uberaba que procuram manutenção e reparos automotivos para diferentes marcas e modelos.</p><p>Nosso compromisso é avaliar cada situação com atenção, explicar as necessidades identificadas e alinhar o serviço com transparência.</p><div className="design-about-points"><span><ShieldCheck /> Orientação transparente</span><span><BadgeCheck /> Atenção aos detalhes</span><span><Wrench /> Cuidado técnico</span></div><a className="design-text-link" href="#contato">CONHEÇA NOSSO ATENDIMENTO <ArrowRight size={16} /></a></div></section>

      <section className="design-statement"><div className="design-container"><span className="statement-label">BONNI CAR SERVICE · MANIFESTO</span><p>O cuidado com seu carro<br />começa <em>em cada detalhe.</em></p><span className="statement-mark">B.</span></div></section>

      <section className="design-process" id="processo"><div className="design-container"><div className="design-section-head"><div><div className="design-kicker dark-kicker"><span /> COMO FUNCIONA</div><h2>Simples, claro<br /><em>e sem surpresas.</em></h2></div><p>Um atendimento organizado para você entender o que seu veículo precisa e decidir com tranquilidade.</p></div><div className="design-steps"><article><span>01</span><MessageCircle /><h3>Você conta</h3><p>Explique o que está acontecendo ou qual serviço procura.</p></article><article><span>02</span><ScanLine /><h3>Avaliamos</h3><p>Investigamos a necessidade apresentada pelo veículo.</p></article><article><span>03</span><ClipboardCheck /><h3>Alinhamos</h3><p>Apresentamos as recomendações e o orçamento.</p></article><article><span>04</span><CheckCircle2 /><h3>Executamos</h3><p>Com sua aprovação, seguimos com o serviço combinado.</p></article></div></div></section>

      <section className="design-contact" id="contato"><div className="design-contact-bg">BONNI</div><div className="design-container design-contact-grid"><div className="design-contact-copy"><div className="design-kicker"><span /> VAMOS CONVERSAR</div><h2>Seu próximo passo<br />começa <em>aqui.</em></h2><p>Conte para a gente o que seu veículo precisa. Envie uma mensagem e solicite seu orçamento diretamente pelo WhatsApp.</p><div className="design-contact-number"><MessageCircle /><span><small>FALE DIRETAMENTE</small><strong>+55 34 9151-5086</strong></span></div><div className="design-contact-city"><CarFront size={17} /> UBERABA · MINAS GERAIS</div></div>
        <form className="design-form" onSubmit={handleSubmit}><div className="design-form-heading"><span>01 / CONTATO</span><small>Preencha para continuar no WhatsApp</small></div><label htmlFor="customer-name">SEU NOME</label><input id="customer-name" value={name} onChange={e => setName(e.target.value)} placeholder="Como podemos chamar você?" required minLength={2} /><label htmlFor="customer-phone">TELEFONE</label><input id="customer-phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="(34) 99999-9999" required minLength={8} /><label htmlFor="customer-service">SERVIÇO</label><div className="design-select"><select id="customer-service" value={service} onChange={e => setService(e.target.value)}>{services.map(s => <option key={s.title}>{s.title}</option>)}<option>Outro serviço</option></select><ChevronDown size={16} /></div><label htmlFor="customer-message">MENSAGEM</label><textarea id="customer-message" value={message} onChange={e => setMessage(e.target.value)} placeholder="Conte um pouco sobre seu veículo..." rows={3} required minLength={5} /><button className="design-primary-button" type="submit">ENVIAR PELO WHATSAPP <ArrowRight size={17} /></button><small className="design-form-note">Você poderá revisar a mensagem antes de enviá-la.</small></form>
      </div></section>

      <footer className="design-footer"><div className="design-container"><div className="design-footer-main"><a className="design-brand" href="#inicio"><span className="brand-symbol">B<span>.</span></span><span><strong>BONNI</strong><small>CAR SERVICE</small></span></a><p>MECÂNICA AUTOMOTIVA<br />UBERABA · MINAS GERAIS</p><a href={whatsappUrl("Olá! Gostaria de falar com a Bonni Car Service.")}>WHATSAPP <ArrowRight size={15} /></a></div><div className="design-footer-bottom"><span>© {new Date().getFullYear()} BONNI CAR SERVICE</span><span>PRECISÃO EM CADA DETALHE.</span><a href="#inicio">VOLTAR AO TOPO ↑</a></div></div></footer>
    </main>
  );
}
