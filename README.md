Getting Started With Customizing The Developer Portal
------------------------------
Welcome to the Bambora developer portal for legacy APEC documentation. The site is published as static HTML pages to a S3 bucket. The site is compiled from Markdown and .yaml content files with Ruby generators in a Docker container.

##### Table of Contents  

* [Overview](#overview)
* [Submit A Documentation Change](#submit_doc_change)
* [Build](#build)
* [Project Structure](#project_structure)
* [Publishing](#publishing)


## Overview <a name="overview"/>
This project is a fork of dev.bambora.com. This site is built using two tools: [Slate](https://github.com/tripit/slate) and [Swagger UI](https://github.com/jensoleg/swagger-ui).

Slate is the main framework that has all the text descriptions and code samples. Swagger displays the API spec in a readable and interactable way. We are using a custom fork of Swagger UI.


## Submit A Documentation Change <a name="submit_doc_change"/>

1. Create a new branch for your changes. More [here](https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/).
2. Edit the docs. More [here](https://help.github.com/articles/editing-files-in-your-repository/).
 - The docs located in `./source/includes/`. They are are written in markdown. More [here](https://github.com/tripit/slate/wiki/Markdown-Syntax).
3. Submit a pull request. More [here](https://help.github.com/articles/creating-a-pull-request/).

> You can edit and preview the Markdown docs from your browser; however the previews of the code samples will look a bit wonky. This is because we render the markdown using a tool called Slate which is not built into GitHub.

See [here](https://github.com/tripit/slate/wiki/Markdown-Syntax) for fore information on editing Slate markdown.

## Build <a name="build"/>
### Build the image
- **A computer and a willingness to do great things**
- **Docker**

```shell
make build
make run
```

You can now see the docs at <http://localhost:4567>. Whoa! That was fast!

## Project structure <a name="project_structure"/>

The content is laid out like so:
**Markdown files** located in _/source_ and in _/includes_ hold the content of the site. These are what are edited to change the documentation.
**/layout/layout.erb** defines the layout of the site; it is the template.
**/api** contains the swagger UI code. In _/api/index.html_ we define where the swagger definition file lives that we will use. The swagger file in this /api directory is not necessarily used as the base definition for this site.


### Publishing <a name="publishing"/>

Once a pull request is accepted and merged to master an automated build will run and deploy the site within a few minutes.
