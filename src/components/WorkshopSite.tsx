import { useState, type FormEvent } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  Disc3,
  Gauge,
  Menu,
  MessageCircle,
  ShieldCheck,
  Wrench,
  X,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Gauge,
    title: "Diagnóstico completo",
    description: "Identificamos a causa do problema com avaliação cuidadosa e orientação clara.",
    tag: "Precisão em primeiro lugar",
  },
  {
    icon: Wrench,
    title: "Mecânica geral",
    description: "Manutenção preventiva e corretiva para manter seu carro pronto para a rotina.",
    tag: "Cuidado do motor à suspensão",
  },
  {
    icon: Disc3,
    title: "Freios e suspensão",
    description: "Revisão dos componentes essenciais para sua segurança e conforto ao dirigir.",
    tag: "Segurança em cada trajeto",
  },
  {
    icon: Zap,
    title: "Elétrica automotiva",
    description: "Análise de bateria, alternador, partida, iluminação e sistemas elétricos.",
    tag: "Tecnologia e experiência",
  },
];

const reasons = [
  ["Transparência de verdade", "Explicamos o que encontramos e conversamos com você antes de qualquer serviço."],
  ["Equipe especializada", "Profissionais preparados para avaliar seu veículo com atenção aos detalhes."],
  ["Seu tempo importa", "Agendamento organizado e atualizações claras durante o atendimento."],
];

const whatsappMessage = "Olá! Gostaria de agendar uma avaliação para o meu veículo.";
// Configure com o DDI + DDD + número, somente dígitos. Exemplo: 5511999999999.
// Deixe vazio para abrir o WhatsApp e permitir que o cliente escolha o contato.
const WHATSAPP_PHONE = "";

function whatsappUrl(message = whatsappMessage) {
  const text = encodeURIComponent(message);
  return WHATSAPP_PHONE
    ? `https://wa.me/${WHATSAPP_PHONE}?text=${text}`
    : `https://wa.me/?text=${text}`;
}

export default function WorkshopSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [service, setService] = useState("Revisão geral");
  const [details, setDetails] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = [
      "Olá! Gostaria de solicitar um agendamento.",
      `Nome: ${name}`,
      `Veículo: ${vehicle}`,
      `Serviço: ${service}`,
      details ? `Detalhes: ${details}` : "",
    ].filter(Boolean).join("\n");
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="topbar">
        <div className="container topbar-inner">
          <span><Clock3 size={14} /> Seg–Sex: 08h às 18h · Sáb: 08h às 12h</span>
          <a href="#contato">Agende sua avaliação <ArrowRight size={14} /></a>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Oficina Forte, início">
            <span className="brand-mark"><Wrench size={23} strokeWidth={2.5} /></span>
            <span className="brand-copy"><strong>OFICINA<span>FORTE</span></strong><small>CUIDADO QUE MOVE VOCÊ</small></span>
          </a>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav className={menuOpen ? "main-nav open" : "main-nav"}>
            <a href="#servicos" onClick={closeMenu}>Serviços</a>
            <a href="#sobre" onClick={closeMenu}>A oficina</a>
            <a href="#processo" onClick={closeMenu}>Como funciona</a>
            <a className="nav-cta" href="#contato" onClick={closeMenu}>Agendar serviço <ArrowRight size={16} /></a>
          </nav>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-photo" role="img" aria-label="Mecânico trabalhando em um veículo na oficina" />
        <div className="hero-shade" />
        <div className="container hero-content">
          <div className="eyebrow"><span className="eyebrow-line" /> CONFIANÇA EM CADA QUILÔMETRO</div>
          <h1>Seu carro merece<br />um cuidado <em>de verdade.</em></h1>
          <p className="hero-description">Manutenção automotiva com transparência, atenção aos detalhes e compromisso com a sua segurança.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contato">Agendar avaliação <ArrowRight size={18} /></a>
            <a className="button button-ghost" href="#servicos">Conhecer serviços <ArrowDownRight size={18} /></a>
          </div>
          <div className="hero-trust">
            <span><ShieldCheck size={18} /> Diagnóstico responsável</span>
            <span><BadgeCheck size={18} /> Serviço transparente</span>
          </div>
        </div>
        <div className="hero-side-label">MECÂNICA · CUIDADO · CONFIANÇA</div>
      </section>

      <section className="quick-points" aria-label="Diferenciais da oficina">
        <div className="container quick-grid">
          <div><span className="quick-icon"><Wrench size={21} /></span><span><strong>Equipe preparada</strong><small>Atenção em cada detalhe</small></span></div>
          <div><span className="quick-icon"><ShieldCheck size={21} /></span><span><strong>Transparência total</strong><small>Você decide com clareza</small></span></div>
          <div><span className="quick-icon"><CalendarClock size={21} /></span><span><strong>Agendamento fácil</strong><small>Praticidade para sua rotina</small></span></div>
          <div><span className="quick-icon"><CircleDollarSign size={21} /></span><span><strong>Orçamento explicado</strong><small>Sem surpresas combinadas</small></span></div>
        </div>
      </section>

      <section className="section services-section" id="servicos">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow eyebrow-dark"><span className="eyebrow-line" /> NOSSAS ESPECIALIDADES</div>
              <h2>Cuidado completo<br />para seguir <em>tranquilo.</em></h2>
            </div>
            <p>Do check-up preventivo ao reparo necessário, ajudamos você a entender o que seu carro precisa — sem complicação.</p>
          </div>
          <div className="service-grid">
            {services.map(({ icon: Icon, title, description, tag }, index) => (
              <article className="service-card" key={title}>
                <div className="service-card-top"><span className="service-icon"><Icon size={25} /></span><span className="service-number">0{index + 1}</span></div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="service-card-bottom"><span>{tag}</span><a href="#contato" aria-label={`Agendar ${title}`}><ArrowRight size={18} /></a></div>
              </article>
            ))}
          </div>
          <div className="service-note"><CheckCircle2 size={18} /><span>Não sabe qual serviço precisa? <a href="#contato">Conte o que está acontecendo</a> e vamos orientar você.</span></div>
        </div>
      </section>

      <section className="about-section" id="sobre">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=85" alt="Profissional realizando manutenção em um veículo" loading="lazy" />
          <div className="image-caption"><Wrench size={19} /><span><strong>Feito com atenção.</strong><small>Do primeiro diagnóstico à entrega.</small></span></div>
        </div>
        <div className="about-content">
          <div className="eyebrow"><span className="eyebrow-line" /> SOBRE A OFICINA</div>
          <h2>Mais clareza para você.<br /><em>Mais cuidado</em> para seu carro.</h2>
          <p className="about-lead">Acreditamos que cuidar do carro não precisa ser complicado.</p>
          <p>Nosso compromisso é explicar cada etapa, apresentar as opções possíveis e tratar seu veículo com a atenção que ele merece. Você acompanha as decisões e sabe por que cada serviço está sendo recomendado.</p>
          <ul className="reason-list">
            {reasons.map(([title, description]) => <li key={title}><CheckCircle2 size={20} /><span><strong>{title}</strong><small>{description}</small></span></li>)}
          </ul>
          <a className="text-link" href="#contato">Converse com nossa equipe <ArrowRight size={17} /></a>
        </div>
      </section>

      <section className="process-section" id="processo">
        <div className="container">
          <div className="section-heading process-heading">
            <div><div className="eyebrow"><span className="eyebrow-line" /> SIMPLES DO COMEÇO AO FIM</div><h2>Resolver pode ser<br /><em>mais fácil.</em></h2></div>
            <p>Um atendimento claro, organizado e pensado para deixar você mais seguro em cada decisão.</p>
          </div>
          <div className="process-grid">
            <article><span className="process-number">01</span><MessageCircle size={25} /><h3>Você conta</h3><p>Fale com a gente e explique o que percebeu no veículo.</p></article>
            <article><span className="process-number">02</span><Gauge size={25} /><h3>Avaliamos</h3><p>Verificamos o veículo e explicamos os próximos passos.</p></article>
            <article><span className="process-number">03</span><BadgeCheck size={25} /><h3>Você aprova</h3><p>Apresentamos o orçamento para sua aprovação antes do serviço.</p></article>
            <article><span className="process-number">04</span><Zap size={25} /><h3>Pronto para seguir</h3><p>Com o serviço concluído, orientamos você sobre os cuidados.</p></article>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contato">
        <div className="contact-glow" />
        <div className="container contact-grid">
          <div className="contact-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> VAMOS CONVERSAR</div>
            <h2>Seu próximo trajeto<br />começa com <em>tranquilidade.</em></h2>
            <p>Preencha os dados e abra uma conversa no WhatsApp para combinar o melhor horário para sua avaliação.</p>
            <div className="contact-benefit"><CheckCircle2 size={19} /><span>Sem compromisso: primeiro, entendemos o que você precisa.</span></div>
            <div className="contact-mini"><MessageCircle size={20} /><span><strong>Prefere falar direto?</strong><small>Use o formulário ao lado para preparar sua mensagem.</small></span></div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-heading"><span>AGENDE SUA AVALIAÇÃO</span><small>Preencha os campos abaixo</small></div>
            <label htmlFor="customer-name">Seu nome</label>
            <input id="customer-name" name="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Como podemos chamar você?" required />
            <label htmlFor="customer-vehicle">Seu veículo</label>
            <input id="customer-vehicle" name="vehicle" value={vehicle} onChange={(event) => setVehicle(event.target.value)} placeholder="Ex.: Onix 2020, Honda Civic..." required />
            <label htmlFor="customer-service">Como podemos ajudar?</label>
            <div className="select-wrap"><select id="customer-service" value={service} onChange={(event) => setService(event.target.value)}><option>Revisão geral</option><option>Mecânica geral</option><option>Freios e suspensão</option><option>Elétrica automotiva</option><option>Diagnóstico de problema</option><option>Outro serviço</option></select><ChevronDown size={17} /></div>
            <label htmlFor="customer-details">Conte um pouco mais <span>(opcional)</span></label>
            <textarea id="customer-details" name="details" value={details} onChange={(event) => setDetails(event.target.value)} placeholder="Barulho, luz no painel, manutenção preventiva..." rows={3} />
            <button className="button button-primary form-submit" type="submit">Continuar pelo WhatsApp <ArrowRight size={18} /></button>
            <small className="form-privacy">Ao continuar, seus dados serão incluídos na mensagem que você poderá revisar antes de enviar.</small>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-main">
          <a className="brand footer-brand" href="#inicio">
            <span className="brand-mark"><Wrench size={23} strokeWidth={2.5} /></span>
            <span className="brand-copy"><strong>OFICINA<span>FORTE</span></strong><small>CUIDADO QUE MOVE VOCÊ</small></span>
          </a>
          <p>Confiança e cuidado para você seguir em frente.</p>
          <a className="footer-top" href="#inicio">Voltar ao topo ↑</a>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Oficina Forte. Todos os direitos reservados.</span><span>Um bom caminho começa com um carro bem cuidado.</span></div>
      </footer>
    </main>
  );
}
