import { Controller, Get } from '@nestjs/common';

@Controller("accounts/v2")
export class AccountController {

  @Get("/accounts")
  findAccounts() 
  {
    return {
      "data": [
        {
          "brandName": "Organização A",
          "companyCnpj": "21128159000166",
          "type": "CONTA_DEPOSITO_A_VISTA",
          "compeCode": "001",
          "branchCode": "6272",
          "number": "94088392",
          "checkDigit": "4",
          "accountId": "92792126019929279212650822221989319252576"
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
