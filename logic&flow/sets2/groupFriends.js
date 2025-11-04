/* Challenge

Create a function named analyzeFriendGroups that takes two arrays of names (representing two different friend groups) as parameters. The function should convert the arrays to sets and returns an object containing the following information (in this exact order):

mutualFriends: The number of people who are in both friend groups
exclusiveToFirst: The number of people who are only in the first group
exclusiveToSecond: The number of people who are only in the second group
potentialConnections: The number of unique connections that could be made between exclusive members of each group 
isSubset: Boolean indicating if one group is entirely contained within the other */

function analyzeFriendGroups(group1, group2) {
  let set1 = new Set(group1);
  let set2 = new Set(group2);
  // Write your code here

  const mutualFriends = [...set1].filter(name => set2.has(name)).length;

  const exclusiveToFirst = [...set1].filter(name => !set2.has(name)).length;

  const exclusiveToSecond = [...set2].filter(name => !set1.has(name)).length;

  const potentialConnections = exclusiveToFirst * exclusiveToSecond;

  const isSubset = [...set1].every(el => set2.has(el)) || [...set2].every(el => set1.has(el));

  return {
    mutualFriends,
    exclusiveToFirst,
    exclusiveToSecond,
    potentialConnections,
    isSubset,
  };
}
