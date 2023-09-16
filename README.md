# <h1 style="text-align: center;">🚑 Projet Croix Rouge 🚑</h1>


## Table of Contents

---

- [Description](#description)
- [Installation](#installation)
  - [API](#api)
  - [Client](#client)

## <h2 id="description">💬 Description</h2>

--- 



## <h2 id="installation">🚀 Installation</h2>

---

To run the app, the first thing you need to do is to clone the repository with the following command:

```bash
git clone git@github.com:Initial-Dev/Project-CR.git
```

First of all, you need to install [Docker](https://www.docker.com/) and [Node](https://nodejs.org) on your computer.

### <h3 id="api">💂‍♂️ *API*</h3>

The API is automatically deployed using a Docker container, hense you don't need to install any dependencies.
The only thing you need to do is to run the following command:

```bash
docker-compose up
```

Docker will build the containers and run them. As the src folder is mounted in the container, you can edit the code and the changes will be automatically applied.

### <h3 id="client">🏃 *Client*</h3>

#### Development mode

You need to install the dependencies with the following command:

```bash
npm install
```

Finally, you can start the client with the following command:

```bash
npm run dev
```

Here you go, the client is now running on [http://localhost:3000](http://localhost:3000).

