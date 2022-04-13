class ResultsView {
  #parentElement = document.querySelector('.results');

  #data;
  render(data) {
    this.#data = data;

    console.log(data);
  }

  #generationHTML() {
    const html = `<li class="preview">
    <a class="preview__link preview__link--active" href="#${this.#data.id}">
      <figure class="preview__fig">
        <img src="src/img/test-1.jpg" alt="Test" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">Pasta with Tomato Cream ...</h4>
        <p class="preview__publisher">The Pioneer Woman</p>
        <div class="preview__user-generated">
          <svg>
            <use href="src/img/icons.svg#icon-user"></use>
          </svg>
        </div>
      </div>
    </a>
  </li>`;

  
  }
}

export default ResultsView;
