# T7S3F24 Project Scaffold


## 👀 Structure

Configured as a monorepo of two packages:

* `/frontend`
* `/server`

In addition there is the temporary `/frontend-dashboard-example`.

The sub-repos are configured in [pnpm-workspace.yaml](./pnpm-workspace.yaml).


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



---

👾🤖👽
