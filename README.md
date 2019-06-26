# Task Manager

Quickly manage your tasks and projects using this API REST. 

*This project was built as a challenge for the GoStack Bootcamp by rocketseat.com.br

# Use
As any API REST, you will need a client to make use of this task manager.
## Listing your projects
`GET: localhost:3000/projects`
## Creating a project
`POST: localhost:3000/projects`
`body: { "title": "My awesome project"}`
## Renaming a project
`PUT: localhost:3000/projects/:id`
`body: { "title": "New great title"}`
## Deleting a project
`DELETE: localhost:3000/projects/:id`
## Adding a task to a project
`POST: localhost:3000/projects/:id/tasks`
`body: { "title": "This task soon will be completed!"}`

# Configuration
### For Development
`yarn`
`yarn dev`
### For Use
`yarn`
`node index.js`

# Developers

Miguel Alemán