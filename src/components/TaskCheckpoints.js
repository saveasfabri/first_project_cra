

const TaskCheckpoints=()=> {
  return (
    <div className="TaskCheckpoints">
      <h2>Checkpoints de Tarea</h2>
      <p className="textTask">Al contador de clics que desarrollamos hoy, agregarle una función llamada decrease que reste la cantidad de clics del estado. Debe renderizar números negativos inclusive.</p>
      <p className="textTask">Declarar un estado a través de un hook que tenga una variable llamada info junto con su setter correspondiente. El estado inicial debe ser un objeto con dos keys: name y age.  La key name debe tener el nombre de ustedes en diminutivo (o su apodo). El seter debe ejecutarse cliquear un botón llamado Change Info, debe recuperar el estado inicial y debe cambiar el nombre en diminutivo (o apodo) por el nombre completo y debe agregar la key lastName con su correspondiente valor. Por ejemplo (i.e), en mi caso, el objeto inicial quedaría como: &#123; name: "Fabi", age: 28 &#125; y luego del seteo del estado debe quedar &#123; name: "Fabián", age: 28, lastName: Tureo &#125;. Mostrar el estado del hook por consola.</p>
      <p className="textTask">Declarar un estado que tenga una variable llamada loading junto con su setter correspondiente. El estado inicial debe ser false y al cliquear un botón llamado Change Loading debe cambiar al contrario del estado. Si inicia en false, debe cambiar a true y si está en true, debe cambiar a false. Mostrar el estado del hook por consola.</p>
      <p className="textTask">Declarar un estado que tenga una variable llamada animals junto con su setter correspondiente. El estado inicial debe ser un array con un elemento de tipo string y cuyo valor sea "Raccoon" (Aguanten los Guardianes de la Galaxia :cohete:). Al ejecutar el seteo del estado a través de un botón llamado Add Animals, se debe conservar el primer elemento y se debe agregar un array de cinco animales que puede estar guardado en una variable extra o no. El resultado final debe mostrarse por consola y debe contener un array de seis elementos.</p>
    </div>
  );
};

export default TaskCheckpoints;