```xml
<?xml version="1.0" encoding="UTF-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:dts="http://www.ippayments.com.au/interface/api/dts">
  <soapenv:Header />
  <soapenv:Body>
    <dts:SubmitSinglePayment>
      <!--Optional:-->
      <dts:trnXML>

        <![CDATA[

        <Transaction>
          <CustNumber>API-Purchase_devSB</CustNumber>
          <CustRef>Marian_DevSB test</CustRef>
          <Amount>2000</Amount>
          <TrnType>1</TrnType>
          <CreditCard>
              <CardNumber>4242424242424242</CardNumber>
              <ExpM>08</ExpM>
              <ExpY>2019</ExpY>
          </CreditCard>
          <Security>
              <UserName>your_api_username</UserName>
              <Password>your_api_password</Password>
          </Security>
        </Transaction>

        ]]>

      </dts:trnXML>
    </dts:SubmitSinglePayment>
  </soapenv:Body>
</soapenv:Envelope>
```
