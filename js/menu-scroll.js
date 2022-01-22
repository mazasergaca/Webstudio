(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-menu-open]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle("menu-open");
    }
  })();