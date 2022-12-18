import { Controller, Get } from '@nestjs/common';

@Controller("credit-cards-accounts/v2")
export class CreditCardController {

  @Get("/accounts")
  findAccounts() 
  {
    return {
      "data": [
        {
          "creditCardAccountId": "XXZTR3459087",
          "brandName": "Organização A",
          "companyCnpj": "21128159000166",
          "name": "Cartão Universitário",
          "productType": "OUTROS",
          "productAdditionalInfo": "string",
          "creditCardNetwork": "VISA",
          "networkAdditionalInfo": "AURA CARD"
        }
      ],
      "links": {
        "self": "https://api.banco.com.br/open-banking/api/v1/resource",
        "first": "https://api.banco.com.br/open-banking/api/v1/resource",
        "prev": "https://api.banco.com.br/open-banking/api/v1/resource",
        "next": "https://api.banco.com.br/open-banking/api/v1/resource",
        "last": "https://api.banco.com.br/open-banking/api/v1/resource"
      },
      "meta": {
        "totalRecords": 1,
        "totalPages": 1,
        "requestDateTime": "2021-05-21T08:30:00Z"
      }
    }
  }
}
