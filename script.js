const limpar = document.getElementById("limpar");

limpar.addEventListener('click', function() {
    geral.style.display = 'none';
    garra.style.display = 'none';
    sensor.style.display = 'none';
    motor.style.display = 'none';
    rodas.style.display = 'none';
    ev3.style.display = 'none';
    pecas.style.display = 'none';

    console.log("limpei")
})

// GERAL
const geral = document.getElementById("texto-geral");
const roboEnt = document.getElementById("robo-todo");
const fechar1 = document.getElementById("fechar1");

roboEnt.addEventListener("targetFound", event => {
    geral.style.display = 'block';
})

fechar1.addEventListener('click', function() {
    console.log("fechou 1");
    geral.style.display = 'none';
})

// GARRA
const garra = document.getElementById("texto-garra");
const garraEnt = document.getElementById("robo-garra");
const fechar2 = document.getElementById("fechar2");

garraEnt.addEventListener("targetFound", event => {
    garra.style.display = 'block';
})

fechar2.addEventListener('click', function() {
    console.log("fechou 2");
    garra.style.display = 'none';
})

// SENSOR
const sensor = document.getElementById("texto-sensor");
const sensorEnt = document.getElementById("robo-sensor");
const fechar3 = document.getElementById("fechar3");

sensorEnt.addEventListener("targetFound", event => {
    sensor.style.display = 'block';
})

fechar3.addEventListener('click', function() {
    console.log("fechou 3");
    sensor.style.display = 'none';
})

// MOTORES
const motor = document.getElementById("texto-motor");
const motorEnt = document.getElementById("robo-motor");
const fechar4 = document.getElementById("fechar4");

motorEnt.addEventListener("targetFound", event => {
    motor.style.display = 'block';
})

fechar4.addEventListener('click', function() {
    console.log("fechou 4");
    motor.style.display = 'none';
})

//RODAS
const rodas = document.getElementById("texto-rodas");
const rodaEnt = document.getElementById("robo-rodas");
const fechar5 = document.getElementById("fechar5");

rodaEnt.addEventListener("targetFound", event => {
    rodas.style.display = 'block';
})

fechar5.addEventListener('click', function() {
    console.log("fechou 5");
    rodas.style.display = 'none';
})

//EV3
const ev3 = document.getElementById("texto-ev3");
const ev3Ent = document.getElementById("robo-ev3");
const fechar6 = document.getElementById("fechar6");

ev3Ent.addEventListener("targetFound", event => {
    ev3.style.display = 'block';
})

fechar6.addEventListener('click', function() {
    console.log("fechou 6");
    ev3.style.display = 'none';
})

//PEÇAS
const pecas = document.getElementById("texto-pecas");
const pecasEnt = document.getElementById("robo-pecas");
const fechar7 = document.getElementById("fechar7");

pecasEnt.addEventListener("targetFound", event => {
    pecas.style.display = 'block';
})

fechar7.addEventListener('click', function() {
    console.log("fechou 7");
    pecas.style.display = 'none';
})