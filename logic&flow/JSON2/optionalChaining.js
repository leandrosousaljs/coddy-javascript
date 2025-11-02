let user = {
  profile: {
    name: 'Alice',
  },
};

console.log(user.profile?.name); // "Alice"
console.log(user.profile?.age); // undefined
console.log(user.address?.city); // undefined
