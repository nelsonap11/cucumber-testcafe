Feature: Se realiza compra producto

    Como usuario
    quiero comprar un producto
    para acumular punto CMR

    Scenario: Realizar Compra
        Given Ingreso la url de google
        When busco la palabra falabella
        And selecciono el texto correspondiente
        And ingreso producto
        And selecciono producto
        And agrego producto al carrito de compras
        And ingreso a la bolsa
        And aumento cantidad de productos"2"
        And agrego garantia extendida
        And selecciono boton ir a compra
        Then verifico que muestre la seccion ir a comprar