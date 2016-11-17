---
title: dev/bambora

toc_above:
  - <a href='index.html'>Getting Started</a>

includes:

toc_below:
  - <span>APIs</span>
  - <a href='payment-api.html'>Payment</a>
  - <a href='tokenisation_api.html'>Tokenisation</a>
  - <a href='customer_registration_api.html'>Customer Registration</a>
  - <a href='reporting_api.html'>Reporting</a>
  - <a href='batch_payment_api.html'>Batch Payment</a>
  - <span>Hosted Payment Page</span>
  - <a href='hpp.html'>HPP</a>
  - <a href='ihpp.html'>iHPP</a>

search: false
---
<script src='js/vendor/clipboard.min.js'></script>
<script src='js/copy.js'></script>

# Quick Start

Welcome to the developer documentation for Bambora APAC (Australia and New Zealand).

### Step 1: Request a developer account
Request an account by emailing [sales@ippayments.com](mailto:sales@ippayments.com) with 'New Account' in the subject line. We will reply with 2 sets of credentials, one for the back office and the other for the API.

### Step 2: Make a test payment using the API
The easiest way to make a test payment is by calling the SOAP API using Postman. PostMan is a simple tool that allows you to send HTTP requests to a server. It is normally used for testing RESTful API, but it also works for SOAP APIs. You can download Postman [here](https://www.getpostman.com/)

2.1. Set the request Method and URL

Set the Method to POST and URL to `https://demo.ippayments.com.au/interface/api/dts.asmx`

2.2. Set request headers

Set `Content-Type: text/xml`
<img src="/images/postman/headers.png"/>

2.3. Set xml in the request body

<a class="copy-button">Click here</a> to copy the text to clipboard. Replace the credential placeholders ('your_api_username', 'your_api_password') with the API credentials that you requested in Step 1.

<img src="/images/postman/body.png"/>

2.4. Click Send and take a look at the response

You will know that your payment request was successful if the Receipt field in the response object is populated and the DeclineCode field is not.
<img src="/images/postman/response.png"/>

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
