# T7S3F24

⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯


※ **Group project in COMP231**

※ **Centennial College**

※ **Fall 2024**


⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯

## 🤖 Group members

* Ezaco Antonio -
* Julian Andres Rojas Fernandez -
* Yuta Iwahashi -
* Juan Pablo Lenis -
* Ayowolemi Eni-Omosule -
* Bjornar Egede-Nissen - [galloppinggryphon](https://github.com/galloppinggryphon)
* Md Abdul Kader -


## 👀 Structure

Configured as a monorepo of two packages:

* `/frontend`
* `/server`

In addition there is the temporary `/frontend-dashboard-example`.

The sub-repos are configured in [pnpm-workspace.yaml](./pnpm-workspace.yaml).

## 🧪 Tech stack

### Base

* Node
* PNPM
* PNPM workspaces

### Frontend

* Vite
* React
* MUI
* Tanstack Router

### Server

* Express
* REST
* JWT
* Database - Mongo?

## ✒️ Linting and formatting


The project is set up to auto-format code on save using **ESLint** and the ESLint extension for VSCode.


**For consistency, please do not use Prettier**.


## 💻 Development software

| Name | Notes |
|----|----|
| **Node** | Minimum version: 20 |
| **PNPM** | Minimum version: 9.6 |
| **VSCode** | Most recent update |

### ⚠️ PNPM is required ⚠️

Because it is configured as a monorepo, the project *requires* the alternative package manager PNPM.

It is most likely already bundled with Node, it just has to be enabled.

Enable it with with the terminal command `corepack enable pnpm`.

[👉 Follow this link for more details ](https://www.freecodecamp.org/news/how-to-use-pnpm/)


### 🧩 Recommended VSCode extensions:

* EditorConfig: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
* ESLint: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
* npm Intellisense: https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense


## 🪄 Installation

Run `pnpm install` or `pnmp i` in the root or any subfolder


## 🚀 Running

### Client/frontend

From root folder: `pnpm frontend:start`

Web address on localhost (in development mode): http://localhost:5173/


### Server

From root folder: `pnpm server:start` or `node server`



👾🤖👽
