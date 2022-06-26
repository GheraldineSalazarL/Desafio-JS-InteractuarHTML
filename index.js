const estudiantes=[];

function ingreso(){ 
    let nomb=document.getElementById("nombre").value;
    let id=document.getElementById("ident").value;
    let cel=document.getElementById("cel").value;
    let prog=document.getElementById("prog").value;
    let est="activo";

    class estudiante{
        constructor(nombre, identificacion, celular, programa){
            this.nombre = nombre;
            this.identificacion = identificacion;
            this.celular = celular;
            this.programa = programa;
        }
    }
    estudiantes.push(new estudiante(nomb,id,cel,prog));
    
    let nombreR = document.getElementById("nombreP");
    nombreR.innerHTML = estudiantes[0].nombre;
    let identR = document.getElementById("identP");
    identR.innerHTML = estudiantes[0].identificacion;
    let celR = document.getElementById("celP");
    celR.innerHTML = estudiantes[0].celular;
    let progR = document.getElementById("progP");
    progR.innerHTML = estudiantes[0].programa;

    let divparr= document.getElementById("parr");
    let nuevoParrafo= document.createElement("p")
    nuevoParrafo.innerText="Creado el " + new Date();
    divparr.append(nuevoParrafo);
}









    

