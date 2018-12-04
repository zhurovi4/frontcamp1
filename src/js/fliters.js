class FiltersRenderer {
  constructor() {
    this.filterBlock = document.querySelector('.filters');
    this.generateFiltersMarkup();

    this.chanelInput = document.querySelector('#chanel');
    this.chanelValue = `sources=${this.chanelInput.value ? this.chanelInput.value : 'cnn'}&`;
    this.chanelInput.addEventListener('onchange', () => this.changeChanel());

    this.amountInput = document.querySelector('#amount');
    this.amountValue = `pageSize=${this.amountInput.value ? this.amountInput.value : 10}&`;


    this.submitButton = document.querySelector('#search');
  }

  generateFiltersMarkup() {
    this.filterBlock.innerHTML = `
    <form action="#">
      <label class="chanel">Choose news channel: <input id='chanel' type="text"></label>
      <label class="amount">Choose amount of articles: <input id='amount' type="number" min="1" max="20"></label>
      <input  class="search" id="search" type="submit" value="Search">
    </form>`
  }

  changeChanel() {
    console.log(this.chanelInput.value);
    this.chanelValue = `sources=${this.chanelInput.value}&`;
  }

  changeAmount() {
    this.amountValue = `pageSize=${this.amountInput.value}&`;
  }

}

export const filtersRenderer = new FiltersRenderer();