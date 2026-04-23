import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import NoProject from "./components/NoProject";
import AddProject from "./components/AddProject";
import ViewProject from "./components/ViewProject";

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, // undefined means nothing is selected by default
    projects: []
  });

  function handleAddTask(text) {
    setProjectsState(prevState => {
      const taskId = Math.random(); // Generate a random ID for the new task
      const newTask = {
        id: taskId,
        text: text,
        projectId: prevState.selectedProjectId
      };

      return  {
        ...prevState,
        selectedProjectId: prevState.selectedProjectId,
        projects: prevState.projects.map(p =>
          p.id === prevState.selectedProjectId
            ? { ...p, tasks: [...(p.tasks || []), newTask] }
            : p
        ),
      }
    });
  }

  function handleDeleteTask(id) {
    setProjectsState(prevState => ({
      ...prevState,
      projects: prevState.projects.map(p =>
        p.id === prevState.selectedProjectId
          ? { ...p, tasks: (p.tasks || []).filter(t => t.id !== id) }
          : p
      ),
    }));
  }

  function handleSelectProject(projectId) {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: projectId
    }));
  }

  function handleStartAddProject() {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: null // null means we are in the process of adding a new project
    }));
  }

  function handleCancelAddProject() {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: undefined // Reset to undefined to show NoProject component after canceling
    }));
  }

  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const projectId = Math.random(); // Generate a random ID for the new project
      const newProject = {
        ...projectData,
        id: projectId
      };

      return  {
        ...prevState,
        selectedProjectId: undefined, // Reset to undefined to show NoProject component after adding
        projects: [...prevState.projects, newProject]
      }
    });
  }

  function handleDeleteProject() {
    setProjectsState(prevState => ({
      ...prevState,
      projects: prevState.projects.filter(p => p.id !== prevState.selectedProjectId),
      selectedProjectId: undefined // Reset to undefined to show NoProject component after deletion
    }));
  }

  console.log("Current Projects State:", projectsState);

  const selectedProject = projectsState.projects.find(p => p.id === projectsState.selectedProjectId);

  let selectedComponent = (
  <ViewProject 
    selectedProject={selectedProject} 
    onDeleteProject={handleDeleteProject} 
    onAddTask={handleAddTask} 
    onDeleteTask={handleDeleteTask} 
    tasks={projectsState.tasks}
  />);

  if (projectsState.selectedProjectId === undefined) {
    selectedComponent = <NoProject onStartAddProject={handleStartAddProject} />;
  } else if (projectsState.selectedProjectId === null) {
    selectedComponent = <AddProject onAddProject={handleAddProject} onCancelProject={handleCancelAddProject} />;
  }

  // ** Code By Diksha ** //

  // const [projects, setProjects] = React.useState([]);

  // const [isAddProjectActive, setIsAddProjectActive] = React.useState(false);

  // const [isProjectSelected, setIsProjectSelected] = React.useState(false);
  // const [selectedProject, setSelectedProject] = React.useState(null);

  // // AddProject.jsx functions

  // function handleAddProject() {
  //   console.log("Add Project Clicked");
  //   setIsAddProjectActive(true);
  // }

  // function handleCancelProject() {
  //   console.log("Cancel Project Clicked");
  //   setIsAddProjectActive(false);
  //   setIsProjectSelected(false);
  // }

  // function handleSaveProject(projectData) {
  //   console.log("Save Project Clicked", projectData);
  //   setProjects([...projects, projectData]);
  //   setIsAddProjectActive(false);
  // }

  // // ViewProject.jsx functions

  // function handleSelectProject(project) {
  //   console.log("Selected Project", project);
  //   if (project) {
  //     setSelectedProject(project);
  //     setIsAddProjectActive(false);
  //     setIsProjectSelected(true);
  //   }
  // }

  // function handleDeleteProject() {
  //   console.log("Delete Project Clicked", selectedProject);
  //   if (selectedProject) {
  //     setProjects(projects.filter(p => p !== selectedProject));
  //     setSelectedProject(null);
  //     setIsProjectSelected(false);
  //   }
  // }

  // function handleAddTask(taskData) {
  //   console.log("Add Task Clicked", taskData);
  //   if (selectedProject) {
  //     const updatedProject = {
  //       ...selectedProject,
  //       tasks: [...(selectedProject.tasks || []), taskData]
  //     };
  //     setProjects(projects.map(p => p === selectedProject ? updatedProject : p));
  //     setSelectedProject(updatedProject);
  //   }
  // }

  // function handleClearTask(task) {
  //   console.log("Clear Task Clicked", task);
  //   if (selectedProject) {
  //     const updatedProject = {
  //       ...selectedProject,
  //       tasks: selectedProject.tasks.filter(t => t !== task)
  //     };
  //     setProjects(projects.map(p => p === selectedProject ? updatedProject : p));
  //     setSelectedProject(updatedProject);
  //   }
  // }

  // console.log(" Project Date", projects);

  return (
    // ** Code By Diksha ** //
    // <div className="flex h-screen w-screen flex-row">
    //   <Sidebar handleAddProject={handleAddProject} projects={projects} handleSelectProject={handleSelectProject} />
    //   {isAddProjectActive 
    //     ? 
    //       <AddProject handleCancelProject={handleCancelProject} handleSaveProject={handleSaveProject} /> 
    //     : 
    //       (
    //         isProjectSelected 
    //         ? 
    //           <ViewProject selectedProject={selectedProject} handleDeleteProject={handleDeleteProject} handleAddTask={handleAddTask} handleClearTask={handleClearTask} /> 
    //         : 
    //           <NoProject handleAddProject={handleAddProject} />
    //       )
    //   }
    // </div>

    <main className="h-screen my-8 flex gap-8">
      <Sidebar 
        onStartAddProject={handleStartAddProject} 
        projects={projectsState.projects} 
        onSelectProject={handleSelectProject} 
        selectedProjectId={projectsState.selectedProjectId}
      />
      {selectedComponent}
    </main>
  );
}

export default App;
