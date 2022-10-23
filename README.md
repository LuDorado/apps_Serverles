# Desplegar aplicaiones Serverless desde cero

Proyecto para levantar un sitio web en distintas etapas:

* Sitio estático en Cloudfront + s3 con OAI
* Servicio para atender contact form a través de un API Gateway + SES

## Pre-requisitos

* [AWS CLIv2](https://docs.aws.amazon.com/es_es/cli/latest/userguide/getting-started-install.html)
* [Nodejs](https://nodejs.org/en/download/)
* [Serverless Framework](https://www.serverless.com/framework/docs/getting-started)install node

Para el manejo seguro de credenciales, podemos utilizar una herramienta muy práctica, que además nos permite la administración de las mismas cuando tenemos varias cuentas: [envchain](https://github.com/sorah/envchain)

Y para el manejo de las versiones de node, ya que en muchos caso nuestras máquina ya traen node 12, que está deprecado, [nvm](https://github.com/nvm-sh/nvm)
