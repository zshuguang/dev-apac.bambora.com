---
title: dev/bambora

language_tabs:
  - shell: cURL
  - java

toc_above:
- <a href='index.html'>Getting Started</a>
- <span>APIs</span>
- <a href='customer_registration_api.html'>Customer Registration</a>

includes:

toc_below:
- <a href='payment_api.html'>Payments</a>
- <a href='recurring_payment_api.html'>Recurring Payment</a>
- <span>Hosted Payment Page</span>
- <a href='hpp.html'>HPP</a>
- <a href='ihpp.html'>iHPP</a>

search: false
---

<script src='js/vendor/clipboard.min.js'></script>
<script src='js/copy.js'></script>

# Overview

```shell
curl https://demo.ippayments.com.au/interface/api/sipp.asmx  \
  -H "Content-Type: text/xml" \
  -d '<?xml version="1.0" encoding="UTF-8"?>
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sipp="http://www.ippayments.com.au/interface/api/sipp">
        <soapenv:Header />
        <soapenv:Body>
          <sipp:RegisterSingleCustomer>
            <!--Optional:-->
            <sipp:registerSingleCustomerXML><![CDATA[<Register>
             <Customer>
                 <CustNumber>any_str</CustNumber>
                 <CreditCard>
                     <CardNumber>4242424242424242</CardNumber>
                     <ExpM>12</ExpM>
                     <ExpY>2018</ExpY>
                     <CardHolderName>John Doe</CardHolderName>
                 </CreditCard>
             </Customer>
             <Security>
                 <UserName>your_api_username</UserName>
                 <Password>your_api_password</Password>
             </Security>
         </Register>]]></sipp:registerSingleCustomerXML>
          </sipp:RegisterSingleCustomer>
        </soapenv:Body>
      </soapenv:Envelope>'
```

```java
Java SDK code sample coming soon.
```

Our Customer Registration service removes the need  for you to  store  card  data  on your servers, thus limiting the scope of your PCI compliance. It allows you to store your customer’s card and billing data on Bambora's servers against a reference id of your choosing.

You can test the service by copy and pasting the  cURL code sample into a text editor, replacing the credential placeholders and then executing the updated code sample in Terminal.

Customer registration is supported by both our SIPP and DTS APIs. You can register a customer without charging their card, or register a customer while charging their card. Once registered you can use the registered customer for single one off payments, batched payments and recurring payments.

You can access full documentation for the Customer Registration API in PDF format [here](https://ippayments.atlassian.net/wiki/download/attachments/30244944/IPP%20Tokenisation%20and%20Customer%20Registration%20Integration%20Guide%20V1.6.pdf?version=3&modificationDate=1473643987890&cacheVersion=1&api=v2).
