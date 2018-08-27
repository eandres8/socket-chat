class Usuarios {

    // ==================================================
    // Metodo constructor, inicializa el array vacio de personas
    // ==================================================
    constructor() {
        this.personas = [];
    }

    // ==================================================
    // Agrega una persona al array de personas
    // ==================================================
    agregarPersona(id, nombre, sala) {
        let persona = { id, nombre, sala };
        this.personas.push(persona);

        return this.personas;
    }

    // ==================================================
    // Retorna una persona filtrada por el :id: pasado por parametro
    // ==================================================
    getPersona(id) {
        let persona = this.personas.filter(persona => persona.id === id)[0];
        return persona;
    }

    // ==================================================
    // Retorna el array completo de personas
    // ==================================================
    getPersonas() {
        return this.personas;
    }

    // ==================================================
    // Retorna las personas que estan en una sala
    // ==================================================
    getPersonasPorSala(sala) {
        let personasEnSala = this.personas.filter(persona => persona.sala === sala);
        return personasEnSala;
    }

    // ==================================================
    // Elimina una persona almacenada en el array de personas
    // ==================================================
    borrarPersona(id) {
        let persona = this.getPersona(id);
        this.personas = this.personas.filter(persona => persona.id !== id);
        return persona;
    }

} // fin class Usuarios

module.exports = {
    Usuarios
}