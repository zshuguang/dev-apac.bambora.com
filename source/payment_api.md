---
title: dev/bambora

language_tabs:
  - shell: cURL
  - java
  
toc_above:
- <a href='index.html'>Getting Started</a>
- <span>APIs</span>
- <a href='customer_registration_api.html'>Customer Registration</a>
- <a href='payment_api.html'>Payments</a>

includes:

toc_below:
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
curl https://demo.ippayments.com.au/interface/api/dts.asmx  \
  -H "Content-Type: text/xml" \
  -d '<?xml version="1.0" encoding="UTF-8"?>
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:dts="http://www.ippayments.com.au/interface/api/dts">
        <soapenv:Header />
        <soapenv:Body>
          <dts:SubmitSinglePayment>
            <!--Optional:-->
            <dts:trnXML><![CDATA[<Transaction>
          <CustNumber>cust_number</CustNumber>
          <CustRef>any_str</CustRef>
          <Amount>1000</Amount>

          <TrnType>1</TrnType>
          <CreditCard Registered="True">
          </CreditCard>
          <Security>
              <UserName>your_api_username</UserName>
              <Password>your_api_password</Password>
          </Security>
          <UserDefined></UserDefined>
      </Transaction>]]></dts:trnXML>
          </dts:SubmitSinglePayment>
        </soapenv:Body>
      </soapenv:Envelope>'
```

```java
Java SDK code sample coming soon.
```

Our Payment service allows you to submit Single Payments, Capture Payments (pre-authorise payments), Void Transactions, Refund Transactions, and Query Transactions. You can either submit a payment against a new card (see code sample in Quick Start Guide) or against a registered customer (see code sample in this guide).

You can test the service by copy and pasting the cURL code sample into a text editor, replacing the credential and customer registration placeholders and then executing the updated code sample in Terminal.

You can access full documentation for the Payment API in PDF format [here](https://ippayments.atlassian.net/wiki/download/attachments/30244944/IPP%20API%20Integration%20Guide%20V1.7.pdf?version=2&modificationDate=1469082203232&cacheVersion=1&api=v2).
