![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) 
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)

This is a simple single user to-do list application based on nextjs, reactjs, prisma

## Getting Started

run the server:
```bash
docker-compose up
```
You can access the page via [HERE](http://localhost:3000/)

You can access the pgadmin via [HERE](http://localhost:3001/login?next=%2F), with login `admin@admin.com` and password `pass`

run the e2e test:
```bash
cd playwright
yarn && yarn test:playwright
```

run the e2e test via UI:
```bash
cd playwright
yarn && yarn test:playwright-ui
```
As this is single user application, one triggered e2e test, all data will be deleted.

### Directory layout

    .
    ├── backend
    │   ├── prisma              # DB Schema from Prisma
    │   ├── src
    │   │   ├── app.controller      # Root routing file
    │   │   ├── app.module          # Root file for all module
    │   │   ├── prisma.service      # Service file for prisma
    │   │   ├── toDoItem.service    # Service file for todoitem
    ├── frontend
    │   ├── src                     # Source files
    │   │   ├── component           # UI Component files
    │   │   ├── pages               # Pages routing
    │   │   └── store               # state management file
    ├── playwright
    │   └── tests                   # E2E Automated test
    └── README.md