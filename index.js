const express = require('express');

const server = express();

const projects = [
  {
    id: 1,
    title: 'Novo projeto',
    tasks: []
  }
];

let requestNumber = 0;

server.use(express.json());
server.use(countRequest);

function countRequest(req, res, next) {
  requestNumber++;

  console.log(`Requisições até o momento: ${requestNumber}`);
  next();
}

function checkIfProjectExists(req, res, next) {
  const { id } = req.params;
  const selectedProject = projects.find(project => project.id == id);

  if (!selectedProject) {
    return res.status(400).json({ error: "Project not found"});
  }

  req.project = selectedProject;
  next();
}

server.get('/projects', (req, res) => {
  return res.json(projects);
});

server.post('/projects', (req, res) => {
  const { title } = req.body;
  const id = projects.length + 1;
  const newProjext = {
    id,
    title,
    tasks: []
  };

  projects.push(newProjext);

  return res.json(projects);
});

server.put('/projects/:id', checkIfProjectExists, (req, res) => {
  const { title } = req.body;

  req.project.title = title;

  return res.json(req.project);
});

server.delete('/projects/:id', checkIfProjectExists, (req, res) => {
  const { id } = req.params;

  const selectedProjectIndex = projects.findIndex(project => project.id == id);
  projects.splice(selectedProjectIndex, 1);

  return res.send();
});

server.post('/projects/:id/tasks', checkIfProjectExists, (req, res)=> {
  const { title } = req.body;

  req.project.tasks.push(title);

  return res.json(req.project);
});

server.listen(3000);