// === FORMULARIO DE CONTACTO ===
document.getElementById('form-consulta').addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = document.getElementById('input-nombre').value;
  const email = document.getElementById('input-email').value;
  const mensaje = document.getElementById('input-mensaje').value;

  const telefono = "5493794636696";

  const texto = `Hola, mi nombre es ${nombre}. \nCorreo: ${email} \nMensaje: ${mensaje}`;
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;

  // Abrir WhatsApp en nueva pestaña
  window.open(url, '_blank');

  e.target.reset();
});

// === ANIMACIÓN DE ENTRADA DE CARDS ===
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
});

// === NAVBAR CON EFECTO AL HACER SCROLL ===
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// === SCROLL SUAVE ENTRE SECCIONES Y CIERRE DE MENÚ ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }

    // Cerrar menú móvil si está abierto
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      // Uso de la API de Bootstrap para cerrar
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse, { toggle: false });
      bsCollapse.hide();
    }
  });
});

// === EFECTO DE ESCRITURA (una sola vez, sin duplicado) ===
document.addEventListener("DOMContentLoaded", () => {
  const typing = document.querySelector('.typing-effect');
  const text = "Lic. María González";
  let i = 0;

  typing.textContent = ""; // Limpiar antes de escribir

  function typeWriter() {
    if (i < text.length) {
      typing.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  typeWriter();
});

// === ANIMACIÓN DE FOTO Y TEXTOS ===
document.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector('.profesional-img');
  const fadeTexts = document.querySelectorAll('.fade-text');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  if (img) observer.observe(img);
  fadeTexts.forEach(text => observer.observe(text));
});

// === BOTÓN SCROLL TO TOP ===
const scrollTopBtn = document.getElementById("scrollToTopBtn");

if (scrollTopBtn) {
  // Mostrar/Ocultar botón al hacer scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });

  // Acción de volver arriba
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
