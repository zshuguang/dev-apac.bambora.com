---
title: dev/bambora

language_tabs:
  - shell: cURL
  - java

toc_above:
- <a href='index.html'>Getting Started</a>
- <span>APIs</span>
- <a href='direct_using_api.html'>Payment</a>
- <span>Hosted Payment Page</span>
- <a href='hpp.html'>HPP</a>

includes:

toc_below:
- <a href='ihpp.html'>iHPP</a>

search: false
---

<script src='js/vendor/clipboard.min.js'></script>
<script src='js/copy.js'></script>

# Overview

Hosted Payment Page (HPP) provides the merchant with the ability to securely and efficiently process online, real-time payments.

HPP is a standalone payment page which does not require integration allowing a quick and easy setup. You can simply direct the customer to a predefined URL which will show the payment page. Once the transaction is processed, HPP will display the result to the customer. Although hosted on IPP’s servers, you have full control on the structure and style of the pages displayed to your customer.

# Purchase

```shell
curl "https://demo.ippayments.com.au/access/index.aspx" \
-d 'a=85569861'
-d 'dl=standardhpp_hpp_purchase'
-d 'accountnumber=[AccountNumber]'
```

```java
Java SDK code sample coming soon.
```

To process a customer’s real time purchase transaction, embed the URL link along with your account number.

This URL will redirect the customer to the payment page where they can enter all the required information and clicks Pay Now.

<img src="/images/postman/Hpp_PaymentPage.png"/>

All details of the order can be displayed to the customer to confirm and once finalised the payment is processed and the result sent back to the customer.

# Passing additional data

You can pre-populate some the payment fields by adding them to the HPP URL.

```shell
curl "https://demo.ippayments.com.au/access/index.aspx" \
-d 'a=85569861'
-d 'dl=standardhpp_hpp_purchase'
-d 'accountnumber=[AccountNumber]'
-d 'amount=[Amount]'
-d 'custref=[Customer Reference]'
```

```java
Java SDK code sample coming soon.
```

Parameter |         | Description
--------- | ------- | -----------
custref | string(64)	| A reference for the transaction sent by you for reporting purposes
amount | Numeric | Amount entered in cent value e.g. $55.00 = 5500
