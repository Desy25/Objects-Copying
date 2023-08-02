const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  };
  
  const person2 = person1;
  
  // Modify the property `firstName` of the `person2` in "Simon".
  person2.firstName = "Simon";
  
  console.log(person1);
  console.log(person2);

// Spiegazione:
// Quando assegnamo person2 a person1 (person2 = person1), non stiamo creando un nuovo oggetto.
// Perchè sia person1 che person2 fanno riferimento allo stesso oggetto in memoria.
// Quindi, eventuali modifiche apportate a person2 influenzeranno direttamente anche person1,
// perché entrambi puntano allo stesso oggetto sottostante.
// Per modificare una copia di un oggetto senza influenzare l'originale, potremmo creare un nuovo oggetto
// utilizzando un metodo come lo spread operator ({ ...person1 }) per copiare superficialmente le proprietà.
// Questo crea un nuovo oggetto in memoria con gli stessi valori delle proprietà di person1.
// Ma questa volta, quando andremo a modificare le proprietà dell'oggetto copiato (person2), l'oggetto originale (person1) rimane inalterato.
