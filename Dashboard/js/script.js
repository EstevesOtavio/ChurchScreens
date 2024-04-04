const sidebarToggle = document.querySelector("#sidebar-toggle");
sidebarToggle.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
});

const studentsToggle = document.querySelector("#alunos-item");
studentsToggle.addEventListener("click",function(){
    document.querySelector("#alunos-item").classList.add("active");
    document.querySelector("#turmas-item").classList.remove("active");
    document.querySelector("#coordenadores-item").classList.remove("active");
    document.querySelector("#list-screen").classList.add("show");
    document.querySelector("#turmas-screen").classList.remove("show");
});

const coordenadoresToggle = document.querySelector("#coordenadores-item");
coordenadoresToggle.addEventListener("click",function(){
    document.querySelector("#coordenadores-item").classList.add("active");
    document.querySelector("#turmas-item").classList.remove("active");
    document.querySelector("#alunos-item").classList.remove("active");
    document.querySelector("#list-screen").classList.add("show");
    document.querySelector("#turmas-screen").classList.remove("show");
});

const classesToggle = document.querySelector("#turmas-item");
classesToggle.addEventListener("click",function(){
    document.querySelector("#turmas-item").classList.add("active");
    document.querySelector("#alunos-item").classList.remove("active");
    document.querySelector("#coordenadores-item").classList.remove("active");
    document.querySelector("#turmas-screen").classList.add("show");
    document.querySelector("#list-screen").classList.remove("show");
});