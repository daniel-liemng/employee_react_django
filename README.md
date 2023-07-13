# Employee Management

A web application with React and Django - Django Rest Framework

Front End: React-Vite, React Query, React Hook Form, TailwindCss

Back End: Django, Django Rest Framework

## Table of Contents

- [About The Project](#about)

- [Tech Stack](#tech-stack)

- [Work flow](#work-flow)

- [Getting started](#getting-started)

## About The Project

A web application built with React (UI) and Django Rest Framework (API).

- Department: User can list, create, update, and delete.
- Employee: User can search, list, create, update, and delete.

## Tech Stack

- ##### React.js, React Query, React Hook Form, TailwindCss, Typescript
- ##### Django - Django Rest Framework

## Work Flow

https://github.com/daniel-liemng/employyee_react_django/blob/master/screenshots/employee_video.webm

- Homepage

![Image](https://github.com/daniel-liemng/employyee_react_django/blob/master/screenshots/Home.PNG)

- User can list, create, update and delete department.

![Image](https://github.com/daniel-liemng/employyee_react_django/blob/master/screenshots/EditDepartment.PNG)

![Image](https://github.com/daniel-liemng/employyee_react_django/blob/master/screenshots/DeleteDepartment.PNG)

- User can list, search, create, update and delete employee.

![Image](https://github.com/daniel-liemng/employyee_react_django/blob/master/screenshots/AddEmployeeError.PNG)

![Image](https://github.com/daniel-liemng/employyee_react_django/blob/master/screenshots/EditEmployee.PNG)

![Image](https://github.com/daniel-liemng/employyee_react_django/blob/master/screenshots/DeleteEmployee.PNG)

## Getting started

**1.** In order to run this app, you need to have `node.js`, python, django and package manager like npm or yarn installed.

**2.** Clone the Git Repository: `https://github.com/daniel-liemng/employyee_react_django.git`

**3.** Install server-side and client-side dependencies

##### Environment variables

Server-side

```
python -m venv env
source env/Scripts/active
pip install django
pip install djangorestframework
cd backend_django
python manage.py runserver
```

Client-side

```
cd frontend_react
npm install
npm run dev
```
