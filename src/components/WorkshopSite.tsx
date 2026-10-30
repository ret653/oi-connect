import { useState, type FormEvent } from "react";
import {
  ArrowDownRight, ArrowRight, BadgeCheck, CheckCircle2, ChevronDown,
  Clock3, Disc3, Gauge, Menu, MessageCircle, ShieldCheck, Wrench, X, Zap,
  Droplets, ScanLine, Settings2, CarFront, ClipboardCheck
} from "lucide-react";

const WHATSAPP_PHONE = "553491515086";
const whatsappUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

const services = [
  { icon: Droplets, title: "Óleo e filtros", description: "Troca de óleo e filtros conforme as especificações do veículo.", tag: "Manutenção essencial" },
  { icon: ClipboardCheck, title: "Manutenção preventiva", description: "Revisões e verificações para acompanhar as condições do seu carro.", tag: "Cuidado contínuo" },
  { icon: ScanLine, title: "Diagnóstico eletrônico", description: "Leitura por scanner e análise dos sistemas para investigar falhas.", tag: "Equipamentos de diagnóstico" },
  { icon: Gauge, title: "Testes e avaliações", description: "Verificações técnicas para compreender sintomas e orientar reparos.", tag: "Avaliação cuidadosa" },
  { icon: Disc3, title: "Alinhamento e balanceamento", description: "Serviços para contribuir com estabilidade, dirigibilidade e desgaste regular dos pneus.", tag: "Conforto ao dirigir" },
  { icon: Settings2, title: "Motor e componentes", description: "Investigação e reparos relacionados ao funcionamento do motor.", tag: "Mecânica geral" },
  { icon: Zap, title: "Sistema elétrico e fusíveis", description: "Verificação de fusíveis e componentes elétricos do veículo.", tag: "Análise elétrica" },
  { icon: Wrench, title: "Reparos em geral", description: "Avaliação de necessidades mecânicas e orientação sobre as soluções indicadas.", tag: "Do básico ao importado" },
];

const gallery = [
  { image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1100&q=85", title: "Avaliação de veículo", category: "Diagnóstico · Imagem ilustrativa" },
  { image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1100&q=85", title: "Inspeção mecânica", category: "Mecânica geral · Imagem ilustrativa" },
  { image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1100&q=85", title: "Cuidados preventivos", category: "Manutenção · Imagem ilustrativa" },
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
      `Nome: ${name.trim()}`,
      `Telefone: ${phone.trim()}`,
      `Serviço: ${service}`,
      `Mensagem: ${message.trim()}`,
    ].join("\n");
    window.location.href = whatsappUrl(text);
  }

  const closeMenu = () => setMenuOpen(false);
  const navItems = [["Início", "#inicio"], ["Sobre", "#sobre"], ["Serviços", "#servicos"], ["Depoimentos", "#depoimentos"], ["Contato", "#contato"]];

  return (
    <main>
      <div className="topbar"><div className="container topbar-inner">
        <span><Clock3 size={14} /> Uberaba · Minas Gerais</span>
        <a href={whatsappUrl("Olá! Gostaria de falar com a Bonni Car Service.")} target="_blank" rel="noreferrer">Fale com a oficina <ArrowRight size={14} /></a>
      </div></div>

      <header className="site-header"><div className="container nav-wrap">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Bonni Car Service, início">
          <span className="brand-mark"><Wrench size={23} strokeWidth={2.5} /></span>
          <span className="brand-copy"><strong>BONNI <span>CAR SERVICE</span></strong><small>MECÂNICA AUTOMOTIVA · UBERABA</small></span>
        </a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Navegação principal">
          {navItems.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href={whatsappUrl("Olá! Gostaria de solicitar um orçamento.")} target="_blank" rel="noreferrer" onClick={closeMenu}>Orçamento no WhatsApp <ArrowRight size={16} /></a>
        </nav>
      </div></header>

      <section className="hero" id="inicio">
        <img className="hero-photo" src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&fm=jpg&q=90&w=2000" alt="Carro esportivo em destaque, fotografia ilustrativa" fetchPriority="high" />
        <div className="hero-shade" />
        <div className="container hero-content">
          <div className="eyebrow"><span className="eyebrow-line" /> BONNI CAR SERVICE · UBERABA / MG</div>
          <h1>Precisão no cuidado.<br />Confiança em <em>cada trajeto.</em></h1>
          <p className="hero-description">Manutenção e reparos automotivos para diferentes marcas e modelos — do carro do dia a dia aos veículos importados.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contato">Solicitar orçamento <ArrowRight size={18} /></a>
            <a className="button button-ghost" href="#servicos">Conheça nossos serviços <ArrowDownRight size={18} /></a>
          </div>
          <div className="hero-trust"><span><ShieldCheck size={18} /> Orientação transparente</span><span><BadgeCheck size={18} /> Atenção técnica</span></div>
        </div>
        <div className="hero-side-label">MECÂNICA · DIAGNÓSTICO · MANUTENÇÃO</div>
      </section>

      <section className="quick-points" aria-label="Compromissos da oficina"><div className="container quick-grid">
        <div><span className="quick-icon"><Wrench size={21} /></span><span><strong>Mecânica geral</strong><small>Reparos e manutenção</small></span></div>
        <div><span className="quick-icon"><ScanLine size={21} /></span><span><strong>Diagnóstico</strong><small>Análise com scanner</small></span></div>
        <div><span className="quick-icon"><CarFront size={21} /></span><span><strong>Diferentes veículos</strong><small>De nacionais a importados</small></span></div>
        <div><span className="quick-icon"><MessageCircle size={21} /></span><span><strong>Contato direto</strong><small>Orçamento pelo WhatsApp</small></span></div>
      </div></section>

      <section className="section services-section" id="servicos"><div className="container">
        <div className="section-heading"><div><div className="eyebrow eyebrow-dark"><span className="eyebrow-line" /> SERVIÇOS AUTOMOTIVOS</div><h2>Seu veículo em boas mãos.<br /><em>Do diagnóstico ao reparo.</em></h2></div>
          <p>Atendimento automotivo com avaliação cuidadosa e explicação dos serviços recomendados. Consulte a oficina sobre a necessidade do seu veículo.</p>
        </div>
        <div className="service-grid">{services.map(({ icon: Icon, title, description, tag }, index) => <article className="service-card" key={title}>
          <div className="service-card-top"><span className="service-icon"><Icon size={25} /></span><span className="service-number">0{index + 1}</span></div>
          <h3>{title}</h3><p>{description}</p>
          <div className="service-card-bottom"><span>{tag}</span><a href="#contato" aria-label={`Solicitar orçamento: ${title}`}><ArrowRight size={18} /></a></div>
        </article>)}</div>
        <div className="service-note"><CheckCircle2 size={18} /><span>Não sabe qual serviço precisa? <a href="#contato">Descreva o que está acontecendo</a> e converse com a equipe.</span></div>
      </div></section>

      <section className="about-section" id="sobre">
        <div className="about-image"><img src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=85" alt="Ambiente de oficina e manutenção automotiva, imagem ilustrativa" loading="lazy" />
          <div className="image-caption"><Wrench size={19} /><span><strong>Bonni Car Service</strong><small>Manutenção e reparos automotivos em Uberaba</small></span></div>
        </div>
        <div className="about-content"><div className="eyebrow"><span className="eyebrow-line" /> SOBRE A BONNI</div>
          <h2>Conhecimento técnico.<br /><em>Cuidado em cada detalhe.</em></h2>
          <p className="about-lead">Cuidar do seu carro começa por entender o que ele precisa.</p>
          <p>A Bonni Car Service atende motoristas que procuram serviços de manutenção e reparo automotivo em Uberaba, Minas Gerais. A proposta é avaliar cada situação, explicar as necessidades identificadas e alinhar o serviço antes da execução.</p>
          <ul className="reason-list">
            <li><CheckCircle2 size={20} /><span><strong>Transparência no atendimento</strong><small>Informações claras para ajudar você a decidir.</small></span></li>
            <li><CheckCircle2 size={20} /><span><strong>Atenção à execução</strong><small>Cuidado com os procedimentos e detalhes do serviço.</small></span></li>
            <li><CheckCircle2 size={20} /><span><strong>Acompanhamento técnico</strong><small>Orientação sobre a avaliação e os reparos indicados.</small></span></li>
          </ul>
          <a className="text-link" href="#contato">Fale com a Bonni <ArrowRight size={17} /></a>
        </div>
      </section>

      <section className="gallery-section" id="projetos"><div className="container">
        <div className="section-heading"><div><div className="eyebrow eyebrow-dark"><span className="eyebrow-line" /> SERVIÇOS E OFICINA</div><h2>Um olhar atento<br /><em>ao que move você.</em></h2></div>
          <p>Imagens de referência para apresentar as categorias de atendimento. Não representam serviços realizados pela Bonni Car Service.</p>
        </div>
        <div className="gallery-grid">{gallery.map((item, index) => <article className="gallery-item" key={item.title}>
          <div className="gallery-image"><img src={item.image} alt={item.title + " — fotografia ilustrativa"} loading="lazy" /><span>0{index + 1}</span></div>
          <div className="gallery-caption"><div><h3>{item.title}</h3><p>{item.category}</p></div><ArrowUpRightIcon /></div>
        </article>)}</div>
        <p className="gallery-disclaimer">Galeria demonstrativa com imagens ilustrativas. Fotos de serviços reais poderão ser adicionadas posteriormente.</p>
      </div></section>

      <section className="process-section" id="processo"><div className="container">
        <div className="section-heading process-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> NOSSO ATENDIMENTO</div><h2>Clareza em cada<br /><em>etapa do serviço.</em></h2></div><p>Um processo simples para entender a necessidade do veículo e alinhar o atendimento com você.</p></div>
        <div className="process-grid">
          <article><span className="process-number">01</span><MessageCircle size={25} /><h3>Você explica</h3><p>Conte os sintomas ou o serviço que está procurando.</p></article>
          <article><span className="process-number">02</span><ScanLine size={25} /><h3>A oficina avalia</h3><p>O veículo é avaliado para investigar a necessidade apresentada.</p></article>
          <article><span className="process-number">03</span><ClipboardCheck size={25} /><h3>Alinhamos o orçamento</h3><p>As recomendações e condições são conversadas antes do reparo.</p></article>
          <article><span className="process-number">04</span><CheckCircle2 size={25} /><h3>Serviço e orientação</h3><p>Após a aprovação, o serviço é realizado e as orientações são compartilhadas.</p></article>
        </div>
      </div></section>

      <section className="testimonials-section" id="depoimentos"><div className="container testimonials-inner">
        <div><div className="eyebrow"><span className="eyebrow-line" /> EXPERIÊNCIA DO CLIENTE</div><h2>Sua confiança é<br /><em>o que importa.</em></h2></div>
        <div className="testimonial-note"><MessageCircle size={26} /><p>Estamos preparando este espaço para publicar depoimentos reais de clientes, com autorização. Preferimos compartilhar experiências verdadeiras em vez de avaliações fictícias.</p><a className="text-link" href={whatsappUrl("Olá! Gostaria de conhecer melhor os serviços da Bonni Car Service.")} target="_blank" rel="noreferrer">Converse com a oficina <ArrowRight size={17} /></a></div>
      </div></section>

      <section className="contact-section" id="contato"><div className="contact-glow" /><div className="container contact-grid">
        <div className="contact-copy"><div className="eyebrow"><span className="eyebrow-line" /> FALE COM A BONNI</div>
          <h2>Vamos cuidar do<br />seu carro com <em>atenção.</em></h2>
          <p>Solicite um orçamento ou conte o que está acontecendo com seu veículo. Sua mensagem será preparada no WhatsApp para você revisar e enviar.</p>
          <div className="contact-benefit"><CheckCircle2 size={19} /><span>Atendimento em Uberaba, Minas Gerais.</span></div>
          <div className="contact-mini"><MessageCircle size={20} /><span><strong>WhatsApp</strong><small>+55 34 9151-5086</small></span></div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-heading"><span>SOLICITE SEU ORÇAMENTO</span><small>Preencha os campos para continuar no WhatsApp</small></div>
          <label htmlFor="customer-name">Nome</label><input id="customer-name" name="name" value={name} onChange={e => setName(e.target.value)} placeholder="Seu nome" autoComplete="name" required minLength={2} />
          <label htmlFor="customer-phone">Telefone</label><input id="customer-phone" name="phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="(34) 99999-9999" autoComplete="tel" required minLength={8} />
          <label htmlFor="customer-service">Serviço desejado</label><div className="select-wrap"><select id="customer-service" value={service} onChange={e => setService(e.target.value)}><option>Manutenção preventiva</option><option>Troca de óleo e filtros</option><option>Diagnóstico com scanner</option><option>Testes e avaliação</option><option>Alinhamento e balanceamento</option><option>Motor e mecânica geral</option><option>Sistema elétrico e fusíveis</option><option>Outro reparo</option></select><ChevronDown size={17} /></div>
          <label htmlFor="customer-message">Mensagem</label><textarea id="customer-message" name="message" value={message} onChange={e => setMessage(e.target.value)} placeholder="Conte o modelo do carro e o que você precisa..." rows={4} required minLength={5} />
          <button className="button button-primary form-submit" type="submit">Continuar pelo WhatsApp <ArrowRight size={18} /></button>
          <small className="form-privacy">O formulário não envia dados para um servidor. Ele abre o WhatsApp com a mensagem preenchida para sua revisão.</small>
        </form>
      </div></section>

      <footer className="site-footer"><div className="container footer-main">
        <a className="brand footer-brand" href="#inicio"><span className="brand-mark"><Wrench size={23} strokeWidth={2.5} /></span><span className="brand-copy"><strong>BONNI <span>CAR SERVICE</span></strong><small>MECÂNICA AUTOMOTIVA · UBERABA</small></span></a>
        <p>Manutenção e reparos automotivos em Uberaba, MG.</p>
        <a className="footer-top" href="#inicio">Voltar ao topo ↑</a>
      </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Bonni Car Service. Todos os direitos reservados.</span><span>Uberaba · Minas Gerais · <a href="https://wa.me/553491515086" target="_blank" rel="noreferrer">WhatsApp</a></span></div></footer>
    </main>
  );
}

function ArrowUpRightIcon() {
  return <span className="gallery-arrow" aria-hidden="true">↗</span>;
}
