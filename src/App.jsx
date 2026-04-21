import React from "react";
import Sidebar from "./components/Sidebar";
import NoProject from "./components/NoProject";
import AddProject from "./components/AddProject";
import ViewProject from "./components/ViewProject";

function App() {
  const [projects, setProjects] = React.useState([]);

  const [isAddProjectActive, setIsAddProjectActive] = React.useState(false);

  const [isProjectSelected, setIsProjectSelected] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(null);

  // AddProject.jsx functions

  function handleAddProject() {
    console.log("Add Project Clicked");
    setIsAddProjectActive(true);
  }

  function handleCancelProject() {
    console.log("Cancel Project Clicked");
    setIsAddProjectActive(false);
    setIsProjectSelected(false);
  }

  function handleSaveProject(projectData) {
    console.log("Save Project Clicked", projectData);
    setProjects([...projects, projectData]);
    setIsAddProjectActive(false);
  }

  // ViewProject.jsx functions

  function handleSelectProject(project) {
    console.log("Selected Project", project);
    if (project) {
      setSelectedProject(project);
      setIsAddProjectActive(false);
      setIsProjectSelected(true);
    }
  }

  function handleDeleteProject() {
    console.log("Delete Project Clicked", selectedProject);
    if (selectedProject) {
      setProjects(projects.filter(p => p !== selectedProject));
      setSelectedProject(null);
      setIsProjectSelected(false);
    }
  }

  function handleAddTask(taskData) {
    console.log("Add Task Clicked", taskData);
    if (selectedProject) {
      const updatedProject = {
        ...selectedProject,
        tasks: [...(selectedProject.tasks || []), taskData]
      };
      setProjects(projects.map(p => p === selectedProject ? updatedProject : p));
      setSelectedProject(updatedProject);
    }
  }

  function handleClearTask(task) {
    console.log("Clear Task Clicked", task);
    if (selectedProject) {
      const updatedProject = {
        ...selectedProject,
        tasks: selectedProject.tasks.filter(t => t !== task)
      };
      setProjects(projects.map(p => p === selectedProject ? updatedProject : p));
      setSelectedProject(updatedProject);
    }
  }

  console.log(" Project Date", projects);

  return (
    <div className="flex h-screen w-screen flex-row">
      <Sidebar handleAddProject={handleAddProject} projects={projects} handleSelectProject={handleSelectProject} handleDeleteProject={handleDeleteProject} />
      {isAddProjectActive 
        ? 
          <AddProject handleCancelProject={handleCancelProject} handleSaveProject={handleSaveProject} /> 
        : 
          (
            isProjectSelected 
            ? 
              <ViewProject selectedProject={selectedProject} handleDeleteProject={handleDeleteProject} handleAddTask={handleAddTask} handleClearTask={handleClearTask} /> 
            : 
              <NoProject handleAddProject={handleAddProject} />
          )
      }
    </div>
  );
}

export default App;
