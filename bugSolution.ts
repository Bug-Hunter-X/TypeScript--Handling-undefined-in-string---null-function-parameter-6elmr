function printName(name: string | null | undefined): void {
  if (name === undefined) {
    console.log('No name provided');
    return;
  }
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log('No name provided');
  }
}

printName(null); // Works fine
printName(undefined); // Works fine now
printName('John'); // Works fine