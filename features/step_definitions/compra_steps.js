const {Given, When, Then} = require('cucumber');
const { Selector } = require('testcafe');

  Given('Ingreso la url de google', async function  () {
    await testController.navigateTo('https://www.google.com.mx/?hl=es-419')

  });

  When('busco la palabra falabella', async function () {
    const campoGoogle = Selector('#tsf > div:nth-child(2) > div > div.RNNXgb > div > div.a4bIc > input');
    const btnBuscar = Selector('#tsf > div:nth-child(2) > div > div.UUbT9 > div.aajZCb > div > center > input[type="submit"]:nth-child(1)').with({ boundTestRun: testController });  
    
    await testController.typeText(campoGoogle, 'falabella')
    await testController.click(btnBuscar)

  });

  When('selecciono el texto correspondiente', {timeout: 60*1000000}, async function () {
      const validarTexto = Selector('#rso > div:nth-child(1) > div > div > div > div > div.r > a > h3').with({ boundTestRun: testController });
      await testController.click(validarTexto)
      
   });

   When('ingreso producto', {timeout: 60*1000000},  async function () {

    const checkedInputs = Selector('input')
    .withAttribute('type', 'text')
    .filter(node => node.checked);

    await testController.typeText(checkedInputs, 'ps4');
  });

  When('selecciono producto', async function () {
      const prod = Selector('#suggestions-list > div:nth-child(1) > ul > li > div:nth-child(1)').with({ boundTestRun: testController });
      await testController.click(prod)
  });

  When('agrego producto al carrito de compras', async function () {
      const seleProducto = Selector('#all-pods > div:nth-child(1) > div.pod-head > a.pod-head__image > div > img').with({ boundTestRun: testController });
      await testController.click(seleProducto)
  });

  When('ingreso a la bolsa', async function () {
      const agregarBolsa = Selector('#fb-modal-add > div.fb-added-to-basket__footer > div.fb-added-to-basket__ctas > a').with({ boundTestRun: testController });
      await testController.click(agregarBolsa)

  });

  When('aumento cantidad de productos{string}', async function (string) {
      const aumentarPro = Selector('#fb-basket-products > div.fb-basket-product-list > section:nth-child(1) > section > form > section > div.fb-product-item__quantity > div > button.fb-quantity-input__plus').with({ boundTestRun: testController });
      await testController.typeText(aumentarPro, string);
  });

  When('agrego garantia extendida', async function () {
      const aumentarGara = Selector('#fb-basket-products > div.fb-basket-product-list > section:nth-child(1) > section > section > div > div > div > div > form > div > div > ul > li:nth-child(3) > a').with({ boundTestRun: testController });
      await testController.click(aumentarGara);
  });

  When('selecciono boton ir a compra', async function () {
    const irCompra = Selector('body > div.site-wrapper > main > div > div.fb-basket__order-container > div.fb-basket__order-container__summary > div > div.fb-order-status > form > div:nth-child(4) > div.fb-order-status__cta-group > div.fb-order-status__cta > button').with({ boundTestRun: testController });
    await testController.click(irCompra);
  });

Then('verifico que muestre la seccion ir a comprar', async function () {
    const verificarCompra = Selector('#fbra_checkoutFasterCheckout > div > div > h1').with({ boundTestRun: testController });
    await testController.click(verificarCompra);
  });
  
