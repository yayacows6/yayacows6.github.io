document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu-container');
  const dropdowns = document.querySelectorAll('.dropdown > div');
  const subDropdowns = document.querySelectorAll('.sub-dropdown > div');

  let menuOpen = false;

  const toggleMenuIcon = () => {
    if (menuOpen) {
      menuBtn.innerHTML = `
        <span class="icon_top_list">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>
        </span>`;
      menuOpen = false;
    } else {
      menuBtn.innerHTML = `
        <span class="icon_top_close">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </span>`;
      menuOpen = true;
    }
  };

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('mega-menu-show');
    toggleMenuIcon();
  });

  dropdowns.forEach(dropdown => {
    dropdown.addEventListener("click", () => {
      dropdown.classList.toggle('act');
      dropdown.nextElementSibling.classList.toggle('menu-show');
    });
  });

  if (typeof $ !== 'undefined' && $(window).width() > 767) {
    const tabs = document.querySelectorAll('.dest-nav .nav-link');
    tabs.forEach(tab => {
      tab.addEventListener('mouseover', function(event) {
        event.preventDefault();
        document.querySelectorAll('.dest-nav .nav-link').forEach(item => {
          item.classList.remove('active');
        });
        document.querySelectorAll('.top_menu_tab .tab-pane').forEach(item => {
          item.classList.remove('active', 'show');
        });
        this.classList.add('active');
        const tabTargetId = this.getAttribute('href');
        document.querySelector(tabTargetId).classList.add('active', 'show');
      });
    });
  }
});
