
var clipboard = new Clipboard('.copy-postman-button', {
    text: function() {
        var text = '\
        <?xml version="1.0" encoding="UTF-8"?>\n\
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:dts="http://www.ippayments.com.au/interface/api/dts">\n\
          <soapenv:Header />\n\
          <soapenv:Body>\n\
            <dts:SubmitSinglePayment>\n\
              <!--Optional:-->\n\
              <dts:trnXML>\n\n\
                <![CDATA[\n\n\
                <Transaction>\n\
                  <CustRef>any_string</CustRef>\n\
                  <Amount>2000</Amount>\n\
                  <CreditCard>\n\
                      <CardNumber>4242424242424242</CardNumber>\n\
                      <ExpM>08</ExpM>\n\
                      <ExpY>2019</ExpY>\n\
                  </CreditCard>\n\
                  <Security>\n\
                      <UserName>your_api_username</UserName>\n\
                      <Password>your_api_password</Password>\n\
                  </Security>\n\
                </Transaction>\n\n\
                ]]>\n\n\
              </dts:trnXML>\n\
            </dts:SubmitSinglePayment>\n\
          </soapenv:Body>\n\
        </soapenv:Envelope>\n\
        ';
        return text;
    }
});

var clipboard = new Clipboard('.copy-curl-button', {
    text: function() {
        var text = '\
        curl https://demo.ippayments.com.au/interface/api/dts.asmx\n\
          -H "Content-Type: text/xml"\n\
          -d \'<?xml version="1.0" encoding="UTF-8"?>\n\
               <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:dts="http://www.ippayments.com.au/interface/api/dts">\n\
                 <soapenv:Header />\n\
                 <soapenv:Body>\n\
                   <dts:SubmitSinglePayment>\n\
                     <!--Optional:-->\n\
                     <dts:trnXML>\n\n\
                       <![CDATA[\n\n\
                       <Transaction>\n\
                         <CustRef>any_string</CustRef>\n\
                         <Amount>2000</Amount>\n\
                         <CreditCard>\n\
                             <CardNumber>4242424242424242</CardNumber>\n\
                             <ExpM>08</ExpM>\n\
                             <ExpY>2019</ExpY>\n\
                         </CreditCard>\n\
                         <Security>\n\
                             <UserName>your_api_username</UserName>\n\
                             <Password>your_api_password</Password>\n\
                         </Security>\n\
                       </Transaction>\n\n\
                       ]]>\n\n\
                     </dts:trnXML>\n\
                   </dts:SubmitSinglePayment>\n\
                 </soapenv:Body>\n\
               </soapenv:Envelope>\'\n\
               ';
        return text;
    }
});


/*
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

*/
