// Pestañas accesibles para cualquier bloque con [data-pestanas]: clic,
// flechas, Inicio y Fin. Al cambiar, el panel nuevo repite su animación de
// entrada y, en celular, la fila se desliza hasta la pestaña elegida.
export function activarPestanas(raiz: ParentNode = document) {
  raiz.querySelectorAll<HTMLElement>('[data-pestanas]').forEach((bloque) => {
    // Varios componentes llaman a esta función: cada bloque se activa una vez.
    if (bloque.dataset.pestanasListas) return;
    bloque.dataset.pestanasListas = 'true';
    const pestanas = [...bloque.querySelectorAll<HTMLButtonElement>('[role="tab"]')];
    const elegir = (pestana: HTMLButtonElement, enfocar = false) => {
      pestanas.forEach((p) => {
        const activa = p === pestana;
        p.setAttribute('aria-selected', String(activa));
        p.tabIndex = activa ? 0 : -1;
        const panel = document.getElementById(p.getAttribute('aria-controls') ?? '');
        if (panel) panel.hidden = !activa;
      });
      if (enfocar) pestana.focus();
      const fila = pestana.parentElement;
      if (fila && fila.scrollWidth > fila.clientWidth) {
        fila.scrollTo({ left: pestana.offsetLeft - 16, behavior: 'smooth' });
      }
    };
    pestanas.forEach((p, i) => {
      p.addEventListener('click', () => elegir(p));
      p.addEventListener('keydown', (e) => {
        const ir = ({ ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: pestanas.length - 1 } as Record<string, number>)[e.key];
        if (ir === undefined) return;
        e.preventDefault();
        elegir(pestanas[(ir + pestanas.length) % pestanas.length], true);
      });
    });
  });
}
