document.addEventListener('DOMContentLoaded', () => {

    const header = document.getElementById('header');
    const sunOrMoon = document.getElementById('sunOrMoon');
    const modal = document.getElementById('modal');
    const confirmButton = document.getElementById('confirmButton');
    const cancelButton = document.getElementById('cancelButton');
    const loadingBody = document.getElementById('loadingBody');
    const beforeLoading = document.getElementById('beforeLoading');
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");

    window.addEventListener('scroll', () => {
      if (header) {
        header.classList.toggle('rolagem', window.scrollY > 200);
      }
    });

    document.addEventListener("visibilitychange", () => {
      document.title = document.hidden ? "I hope you liked it" : "syxbrunoo";
    });

    window.trocarImg = () => {
      document.body.classList.toggle("tema-dark");
      if (document.body.classList.contains("tema-dark")) {
        if (sunOrMoon) sunOrMoon.src = "assets/img/moon.png";
      } else {
        if (sunOrMoon) sunOrMoon.src = "assets/img/sun.png";
      }
    };

    const links = document.querySelectorAll('#mylink');
    links.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const href = link.getAttribute('href');
        showConfirmationModal(href);
        document.body.style.overflow = "hidden";
      });
    });
  
    if (confirmButton && modal) {
      confirmButton.addEventListener('click', () => {
        const href = modal.getAttribute('data-href');
        if (href) window.open(href, '_blank');
        hideConfirmationModal();
      });
    }
  
    if (cancelButton) {
      cancelButton.addEventListener('click', hideConfirmationModal);
    }
  
    function showConfirmationModal(href) {
      if (modal) {
        modal.setAttribute('data-href', href);
        modal.style.display = 'block';
      }
    }
  
    function hideConfirmationModal() {
      if (modal) modal.style.display = 'none';
      document.body.style.overflow = "auto";
    }

    window.loading = () => {
      if (loadingBody) loadingBody.style.display = "none";
      if (beforeLoading) beforeLoading.style.display = "block";
    };

    window.addEventListener("mousemove", e => {
      const posX = e.clientX;
      const posY = e.clientY;
  
      if (cursorDot) {
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
      }
  
      if (cursorOutline) {
        cursorOutline.animate(
          {
            left: `${posX}px`,
            top: `${posY}px`
          },
          { duration: 400, fill: "forwards" }
        );
      }
    });
  });
  