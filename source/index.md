---
title: dev/bambora

language_tabs:
  - shell: cURL
  - java

toc_above:
- <a href='index.html'>Getting Started</a>

includes:

toc_below:
- <span>APIs</span>
- <a href='customer_registration_api.html'>Customer Registration</a>
- <a href='payment_api.html'>Payments</a>
- <a href='recurring_payment_api.html'>Recurring Payment</a>
- <span>Hosted Payment Page</span>
- <a href='hpp.html'>HPP</a>
- <a href='ihpp.html'>iHPP</a>

search: false
---
<script src='js/vendor/clipboard.min.js'></script>
<script src='js/copy.js'></script>

# Quick Start

Welcome to the developer documentation for Bambora APAC (Australia and New Zealand).

### Step 1: Create a test account
You can create a account at [http://dev-onboarding.ippayments.com.au/](http://dev-onboarding.ippayments.com.au/). You will receive an email with 2 sets of credentials, one for the back office and the other for the API.

### Step 2: Make a test payment using the API

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

You can test the service by copy and pasting the cURL code sample into a text editor, replacing the credential and customer registration placeholders and then executing the updated code sample in Terminal.

If you are not comfortable using Terminal you can also Postman to make a test payment by calling the SOAP API. PostMan is a simple app that allows you to send HTTP requests to a server. It is normally used for testing RESTful APIs, but it also works for SOAP APIs. You can download Postman [here](https://www.getpostman.com/)

### Step 3: View your test transaction in the back office

3.1 Log in to the back office

Open your browser and navigate to the back office: [https://uat.ippayments.com.au/crm/](https://uat.ippayments.com.au/crm/). Log in with the CRM credentials that you requested in Step 1.

3.1 Select the sub account used to process your transaction.

**1. Select `Account > Tree View` from the main navigation in the left column.**

**2. Select the Root node.**
<img src="/images/back_office/select_root_node.png"/>

**3. Select the account by clicking on the account number.**

**4. Select `View > Payment History`**

And that's it. You see your test transaction listed.
<img src="/images/back_office/view_transactions.png"/>


# Contributing To The Docs

We've made it easy for anyone to update the documentation. So if you see any docs in error or sections that could use improvement simply look for the **Update Docs** link at the top of every page. It will send you to the GitHub page where you can make the change.


# Support
Running into issues? No problem, just send us an email to [support@ippayments.com](mailto:support@ippayments.com).
