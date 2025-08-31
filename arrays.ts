type User = {
  id: number;
  name: string;
};

let users: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

users.forEach(user => {
  console.log(user.name);
});
