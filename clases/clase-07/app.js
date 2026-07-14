"use strict";

/* ──────────────────────────────────────────────────────
   CONFIGURACIÓN
────────────────────────────────────────────────────── */
const BASE = "http://worldcup26.ir";

/* ──────────────────────────────────────────────────────
   ESTADO DE APLICACIÓN
   Separamos claramente los tres recursos para que el fallo
   de uno no contamine el estado de los otros.
────────────────────────────────────────────────────── */
const state = {
  teams: [],            // Array<{id, name, flag_url, ...}>
  //
};

/* ──────────────────────────────────────────────────────
   SELECTORES DOM
────────────────────────────────────────────────────── */
const teamSelect = document.getElementById("teamSelect");
const teamInfo = document.getElementById("teamInfo");
const cardsGrid = document.getElementById("cardsGrid");
const statsBar = document.getElementById("statsBar");
const sectionEyebrow = document.getElementById("sectionEyebrow");
const citiesSection = document.getElementById("citiesSection");
const apiStatus = document.getElementById("apiStatus");
const teamGroup = document.getElementById("teamGroup");

/* ──────────────────────────────────────────────────────
   POBLAR SELECTOR DE EQUIPOS
   Datos obtenidos de /get/teams, ordenados alfabéticamente.
────────────────────────────────────────────────────── */
function populateTeamSelector() {
  const sortedTeamList = [...state.teams].sort((a, b) => {
    const na = a.name_en ?? "";
    const nb = b.name_en ?? "";
    return na.localeCompare(nb);
  });


  teamSelect.innerHTML =
    `<option value="">— Selecciona un equipo (${sortedTeamList.length}) —</option>`;

  sortedTeamList.forEach(team => {
    const opt = document.createElement("option");
    opt.value = String(team.id);
    opt.textContent = team.name_en ?? `Equipo ${team.id}`;
    teamSelect.appendChild(opt);
  });

  addEventToTeamSelect();
  teamSelect.disabled = false;
}

/* ──────────────────────────────────────────────────────
   EVENTO: cambio de equipo en el selector
────────────────────────────────────────────────────── */
function addEventToTeamSelect() {
  teamSelect.addEventListener("change", (event) => {
    const tid = teamSelect.value;

    if (!tid) {
      // si no hay equipo seleccionado, limpio la sección de partidos
      return;
    }
    state.teams.forEach(team => {
      if (String(team.id) === tid) {
        // si el equipo coincide con el seleccionado, muestro sus datos
        teamInfo.style.display = "block";
        console.log('Team', team);
        debugger;
        const flag = document.getElementById("teamFlagImg");
        const name = document.getElementById("teamName");

        flag.src = team.flag;
        flag.alt = `Bandera de ${team.name_en}`;
        name.textContent = team.name_en;
      }
    });
  });
}



/* ──────────────────────────────────────────────────────
   Init: carga inicial de los tres endpoints
────────────────────────────────────────────────────── */
async function init() {

  await fetch(`${BASE}/get/teams`)
    .then(response => response.json())
    .then(jsondata => {
      // guardo los datos de equipos en el estado global
      state.teams = jsondata.teams;
      // luego de cargar los equipos, puedo poblar el selector
      populateTeamSelector();
      populateTeamGroup();

    })
    .catch(err => {
      console.error("Error al cargar equipos:", err);
    });

}

/* Punto de entrada */
init();
// Funcion para agregar los equipos a cada grupo correspondiente. 
function populateTeamGroup() {

  const array = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
  for (const group of array) {
    const miLista = document.createElement('ul');
    miLista.textContent = `Grupo ${group}`;

    state.teams.forEach(team => {
      if (String(team.groups) === group) {
        const miElemento = document.createElement('li');
        miElemento.textContent = `${team.id} ${team.name_en} `;
        const bandera = document.createElement("img");
        bandera.src = team.flag;
        bandera.alt = `${team.name_en} flag`;
        miElemento.appendChild(bandera);
        miLista.appendChild(miElemento);
        console.log(miLista);
      }

    });
    teamGroup.appendChild(miLista);

  }

}
