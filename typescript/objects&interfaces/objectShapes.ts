/* Challenge

Create an interface named Computer with the following properties and methods:

id of type number (readonly)
brand of type string
ramInGB of type number (optional)
isLaptop of type boolean
boot method that takes no parameters and returns void
Create an interface named Server with the following properties and methods:

hostname of type string (readonly)
operatingSystem of type string
maxConnections of type number (optional)
isOnline of type boolean
restart method that takes no parameters and returns void
getStatus method that takes no parameters and returns a string
Using your interfaces, create the following variables:

Create a variable named workstation of type Computer with id 1001, brand "Dell", ramInGB 16, isLaptop false, and a boot method that prints "Dell workstation is booting up..."
Create a variable named laptop of type Computer with id 1002, brand "MacBook", isLaptop true, and a boot method that prints "MacBook laptop is starting..."
Create a variable named webServer of type Server with hostname "web-01", operatingSystem "Ubuntu", maxConnections 1000, isOnline true, a restart method that prints "Restarting web-01 server...", and a getStatus method that returns "web-01 is online"
Create a function named checkComputerSpecs that accepts a parameter of type Computer and returns a string. The function should return the computer's brand and type in the format "[brand] [laptop/desktop]" (use "laptop" if isLaptop is true, otherwise use "desktop").

Create a function named getServerInfo that accepts a parameter of type Server and returns a string in the format "[hostname] runs [operatingSystem]".

Print the following outputs on separate lines:

Call the boot method on workstation
Call the boot method on laptop
Call checkComputerSpecs with workstation and print the result
Call checkComputerSpecs with laptop and print the result
Call the getStatus method on webServer and print the result
Call getServerInfo with webServer and print the result
Print the id of workstation
Call the restart method on webServer */

// TODO: Write your code here
// Create the Computer interface with the required properties and methods
interface Computer {
  readonly id: number;
  brand: string;
  ramInGB?: number;
  isLaptop: boolean;
  boot(): void;
}
// Create the Server interface with the required properties and methods
interface Server {
  readonly hostname: string;
  operatingSystem: string;
  maxConnections?: number;
  isOnline: boolean;
  restart(): void;
  getStatus(): string;
}
// Create the workstation, laptop, and webServer variables
let workstation: Computer = {
  id: 1001,
  brand: 'Dell',
  ramInGB: 16,
  isLaptop: false,
  boot() {
    console.log('Dell workstation is booting up...');
  },
};

let laptop: Computer = {
  id: 1002,
  brand: 'MacBook',
  isLaptop: true,
  boot() {
    console.log('MacBook laptop is starting...');
  },
};

let webServer: Server = {
  hostname: 'web-01',
  operatingSystem: 'Ubuntu',
  maxConnections: 1000,
  isOnline: true,
  restart() {
    console.log('Restarting web-01 server...');
  },
  getStatus() {
    return 'web-01 is online';
  },
};
// Create the checkComputerSpecs and getServerInfo functions
const checkComputerSpecs = (pc: Computer): string => `${pc.brand} ${pc.isLaptop ? 'laptop' : 'desktop'}`;
const getServerInfo = (server: Server): string => `${server.hostname} runs ${server.operatingSystem}`;
// Print all the required outputs
workstation.boot();
laptop.boot();
console.log(checkComputerSpecs(workstation));
console.log(checkComputerSpecs(laptop));
console.log(webServer.getStatus());
console.log(getServerInfo(webServer));
console.log(workstation.id);
webServer.restart();
