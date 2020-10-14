const sites = [
  {
    url: "https://sale.haval-kuntsevo.ru/",
    btns: [".block-header__button", ".block-cars__button"],
    form: ".popup-callback",
    close: ".popup-callback__close",
  },
  {
    url: 'https://skoda-avtomir-vrn.ru/',
    btns: [".offer-btn", ".button_common"],
    form: ".callback-request",
    close: ".close",
  }
];

function test(sites) {
  sites.forEach((site) => {
    site.btns.forEach((element) => {
      describe("Блок", function () {
        it(`При клике на кнопку должена показываться форма ${element}`, function () {
          //const that = this.browser;
          return this.browser
            .url(site.url)
            .click(element)
            .waitForVisible(site.form)
            .click(site.close);
        });
      });
    });
  });
}

test(sites);
/* describe("Блок", function () {
  it("При клике на кнопку должена показываться форма", function () {
    //const that = this.browser;
    return this.browser
      .url("https://sale.haval-kuntsevo.ru/")
      .click(".block-header__button")
      .waitForVisible(".popup-callback")
      .click(".popup-callback__close")
      .click(".block-cars__button")
      .waitForVisible(".popup-callback")
      .click(".popup-callback__close");
  });
}); */
