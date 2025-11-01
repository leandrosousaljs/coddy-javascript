/* Challenge

Create a function called mergeSettings that takes three parameters:

An object defaultSettings containing default application settings
An object userSettings containing user's custom settings
An object temporarySettings containing temporary settings
The function should:

Merge all three settings objects using the spread operator
Make sure temporarySettings take highest priority, followed by userSettings, and finally defaultSettings
Return the merged settings object
Example Input:

defaultSettings = { theme: "light", fontSize: 12, notifications: true };
userSettings = { theme: "dark", fontSize: 14 };
temporarySettings = { notifications: false };
Expected Output:

{ theme: "dark", fontSize: 14, notifications: false } */

function mergeSettings(defaultSettings, userSettings, temporarySettings) {
  return { ...defaultSettings, ...userSettings, ...temporarySettings };
}
