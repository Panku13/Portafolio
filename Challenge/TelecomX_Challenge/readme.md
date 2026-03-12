<div align="center">
<h1> ✨✨✨ CHALLENGE - TelecomX_LATAM ✨✨✨ </h1>
<h2> Análisis de deserción de Clientes </h2>
</div>

![Badge en Desarollo](https://img.shields.io/badge/ENTREGA-%2012/01/2026-pink)

<h3> Introducción </h3>

Se realiza crea un análisis del proyecto "Churn de Clientes". La empresa enfrenta una alta tasa de cancelaciones y necesita comprender los factores que llevan a la pérdida de clientes.

Se busca encontrar el motivo de la deserción de clientes y poder generar estrategias para disminuir su salida.
<h1></h1>

<h3> Limpieza y Tratamiento de Datos </h3>

* Se importó la información desde un API en formato JSON.
* Se realizó la normalización de los datos.
* Se realizó la limpieza de la información eliminando datos nulos.
* Se modificó la información de las columnas cuya información era Yes o No para que fuera binaria 0 y 1, para una lectura más rápida.
<h1></h1>

<h3> Análisis Exploratorio de Datos </h3>

Se realizó el análisis por medio de diversas gráficas para conocer más sobre el tipo de deserción que existe y encontrar su motivo.

1. **Distribución de costos**
  * Costo mensual y total. La mayoría de los clientes pagan montos bajos (moda ≈ 20), pero hay una gran dispersión (desv. estándar muy alta), lo que indica que algunos clientes pagan muchísimo más.
  * Clientes que permanecen gastan más. La densidad de gasto total muestra que quienes permanecen tienden a tener un gasto más alto que quienes desertan.

<p align="center">
<img width="500" height="547" alt="image" src="https://github.com/user-attachments/assets/abf8ee7f-31cb-4e68-8e9a-f08e8dd08f30" />
<img width="500" height="547" alt="image" src="https://github.com/user-attachments/assets/da8c2927-c933-460d-8830-a6a3fc0ccbf4" />
</p>

2. **Deserción general**
  * Tasa de deserción de los clientes es del 26.54%. Es una cifra significativa que amerita intervención.

<p align="center">
<img width="500" height="402" alt="image" src="https://github.com/user-attachments/assets/08d797e1-0c28-4993-b237-9bea71e8f8ca" />
</p>

3. **Género**
  * La deserción es similar entre hombres y mujeres, ambos géneros tienen tasas de deserción cercanas (≈26%), lo que sugiere que el género no es un factor determinante.

<p align="center">
<img width="500" height="404" alt="image" src="https://github.com/user-attachments/assets/cbeaa289-7898-4272-9a4f-5d9571ce1994" />
</p>

4. **Tipo de contrato**
  * Mes a mes: representa el 55% de los contratos y tiene la menor tasa de deserción 2.8%.
  * Dos años: tiene una deserción altísima 42.7%, lo que indica que los contratos largos no garantizan permanencia.
  * Un año: intermedia, con 11.3% de deserción.

<p align="center">
<img width="500" height="402" alt="image" src="https://github.com/user-attachments/assets/76da8334-d901-4ec6-9a7f-223e4695d021" />
</p>

5. **Duración del contrato**
  * **Los clientes que desertan tienen contratos cortos**. La densidad muestra que la deserción se concentra en los primeros meses.
  * Los contratos mes a mes inician con **deserción alta** pero mejora con el tiempo. Las gráficas de tasa de deserción por mes revelan que **los contratos flexibles retienen mejor a largo plazo**.

<p align="center">
<img width="500" height="554" alt="image" src="https://github.com/user-attachments/assets/9a3e996a-8495-458c-b595-a35ef8ace469" />
</p>
<p align="center">
<img width="1475" height="459" alt="image" src="https://github.com/user-attachments/assets/d6973433-3f4b-4ce8-b0f5-825e3e8be90c" />
</p>
<p align="center">
<img width="480" height="548" alt="image" src="https://github.com/user-attachments/assets/16bf4ce8-5998-45fa-b44f-f74e3f021620" />
<img width="520" height="548" alt="image" src="https://github.com/user-attachments/assets/0b548848-86a3-4e1c-aa81-1c3c5eb5dbfa" />
</p>

6. **Método de pago**
  * Los **cheques electrónicos** generan mayor deserción (45.3%).
  * La **transferencia bancaria automática** tienen menor deserción (15.2%).
  * Los métodos automáticos parecen correlacionarse con mayor permanencia.

<p align="center">
<img width="500" height="733" alt="image" src="https://github.com/user-attachments/assets/fd3f65ba-7911-46ff-8a92-303bda18d47e" />
</p>

7. **Perfil de servicios**
  * Los clientes que permanecen cuentan con más servicios: Seguridad online, respaldo, soporte técnico, etc.
  * Los clientes que desertan tienen perfiles de uso más bajos, lo que sugiere menor vinculación emocional o funcional con la empresa.

<p align="center">
<img width="500" height="424" alt="image" src="https://github.com/user-attachments/assets/64a1c5dd-e6e1-4370-829d-411900e3ec27" />
</p>

8. **Categorías de deserción por género**
  * Deserción_senior es la más alta, mayor al 40% para ambos géneros.
  * Deserción_pareja y con dependiente son menores, pero también relevantes.

<p align="center">
<img width="500" height="548" alt="image" src="https://github.com/user-attachments/assets/3e6a1675-2522-4ffd-bacc-ccf2c785dfe9" />
</p>

<h3> Conclusiones e Insights </h3>

* **La deserción no depende del género**, sino del tipo de contrato, método de pago y nivel de vinculación con los servicios.
* **Contratos largos no garantizan fidelidad**; de hecho, pueden generar frustración si no hay valor percibido.
* **Clientes con bajo gasto y bajo uso de servicios desertan más**.
* **Métodos de pago automáticos y servicios complementarios ayudan a retener**.

<h3> Recomendaciones </h3>

* Fomentar contratos flexibles.
  * Promover el modelo mes a mes con beneficios escalables.
  * Evitar forzar contratos largos sin valor añadido. 
* Incentivar el uso de servicios.
  * Ofrecer paquetes personalizados que incluyan respaldo, seguridad, soporte técnico, etc.
* Optimizar métodos de pago.
  * Incentivar el uso de pagos automáticos con descuentos o beneficios.
  * Identificar clientes con cheque electrónico y ofrecer migración asistida.
* Segmentar y personalizar.
  * Detectar perfiles de bajo gasto y bajo uso para campañas de retención.
  * Crear estrategias específicas para clientes senior, pareja y dependientes.
* Monitorear los primeros meses.
  * Implementar seguimiento intensivo en los primeros 6 meses del contrato.
  * Ofrecer onboarding y atención personalizada en ese periodo crítico de retención.
