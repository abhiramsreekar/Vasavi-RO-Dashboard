# Vasavi Dashboard
A dashboard to monitor various IoT nodes deployed in Vasavi College of Engineering.

The Dashboard will monitor various nodes under the smart city initiative such as Air Pollution node, Water Hardness nodes etc. 

Air Pollution nodes
- The Air Pollution nodes are built using ESP8266, SDS011 air quality sensor and a AHT10 temperature sensor.
- We gather Pm 2.5, Pm 10, Temperature values to calculate AQI.
Front-end:

ReactJS will be the framework used to build the front end of the website.
The React. js framework is an open-source JavaScript framework and library developed by Facebook. 
It's used for building interactive user interfaces and web applications quickly and efficiently 
with significantly less code than you would with vanilla JavaScript.

We have taken a leaflet approach to display the nodes, Leaflet is a ReactJS library used to display maps and markers on the map.
We have used cards to display the data of the selected node.


Backend:
For the backend we will be using NodeJS to commmunicate with MongoDB.
The Sensor data will be stored in MongoDB in JSON format, which will be retrived using HTTP calls from ReactJS.
