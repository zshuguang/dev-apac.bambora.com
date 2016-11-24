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
- <a href='recurring_payment_api.html'>Recurring Payment</a>

includes:

toc_below:
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
  -d '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:dts="http://www.ippayments.com.au/interface/api/dts">
       <soapenv:Header/>
       <soapenv:Body>
          <dts:SubmitPaymentSchedule>
             <!--Optional:-->
             <dts:scheduleXML>
             <![CDATA[
            <Schedule>
                <CustNumber>cust_number</CustNumber>
                <Amount>2500</Amount>
                <TrnType>1</TrnType>
                <CreditCard Registered="True">
                </CreditCard>
                <Schedule>
                    <Frequency>M</Frequency>
                    <StartDate>2016-12-08</StartDate>
                    <EndPaymentCount>2</EndPaymentCount>
                </Schedule>
                <Security>
                    <UserName>your_api_username</UserName>
                    <Password>your_api_password</Password>
                </Security>
            </Schedule>
             ]]>
             </dts:scheduleXML>
          </dts:SubmitPaymentSchedule>
       </soapenv:Body>
    </soapenv:Envelope>'
```

```java
Java SDK code sample coming soon.
```

Our Recurring Payment service allows you to schedule one or more payments to be made against a registered customer. You specify the start date and the frequency. You can either specify the number of occurrences or the end date.

You can test the service by copy and pasting the cURL code sample into a text editor, replacing the credential and customer registration placeholders and then executing the updated code sample in Terminal.

You can access full documentation for the Payment API in PDF format [here](https://ippayments.atlassian.net/wiki/download/attachments/30244944/IPP%20API%20Integration%20Guide%20V1.7.pdf?version=2&modificationDate=1469082203232&cacheVersion=1&api=v2).
