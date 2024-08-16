import { renderTable } from './table';
import { data } from './data';

const paginationList = document.querySelector('.pagination__list');
const itemsPerPage = 8;

function renderPagination(currentPage) {
  paginationList.innerHTML = '';
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const prevPageItem = document.createElement('li');
  prevPageItem.className = 'pagination__item';
  prevPageItem.innerHTML = `<a href="#" class="pagination__link" data-page="${
    currentPage - 1
  }">&lt;</a>`;
  prevPageItem.firstElementChild.disabled = currentPage === 1;
  paginationList.appendChild(prevPageItem);

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || i <= 4 || Math.abs(currentPage - i) < 2) {
      const pageItem = document.createElement('li');
      pageItem.className = 'pagination__item';
      pageItem.innerHTML = `<a href="#" class="pagination__link ${
        i === currentPage ? 'pagination__link--active' : ''
      }" data-page="${i}">${i}</a>`;
      paginationList.appendChild(pageItem);
    } else if (i === 5 && currentPage < totalPages - 2) {
      const dotsItem = document.createElement('li');
      dotsItem.className = 'pagination__item pagination__link--dots';
      dotsItem.textContent = '...';
      paginationList.appendChild(dotsItem);
    } else if (i === totalPages - 1 && currentPage > totalPages - 3) {
      const dotsItem = document.createElement('li');
      dotsItem.className = 'pagination__item pagination__link--dots';
      dotsItem.textContent = '...';
      paginationList.appendChild(dotsItem);
    }
  }

  const nextPageItem = document.createElement('li');
  nextPageItem.className = 'pagination__item';
  nextPageItem.innerHTML = `<a href="#" class="pagination__link" data-page="${
    currentPage + 1
  }">&gt;</a>`;
  nextPageItem.firstElementChild.disabled = currentPage === totalPages;
  paginationList.appendChild(nextPageItem);
}

paginationList.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('pagination__link')) {
    const currentPage = parseInt(document.querySelector('.pagination__link--active').dataset.page);
    const targetPage = parseInt(e.target.dataset.page);

    if (targetPage && targetPage !== currentPage) {
      renderTable(targetPage);
      renderPagination(targetPage);
    }
  }
});

renderTable(1);
renderPagination(1);
