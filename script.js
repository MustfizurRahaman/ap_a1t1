var mymap = L.map('mapid').setView([38.6270, -90.1994], 12);
//https://a.tile.openstreetmap.org/{z}/{x}/{y}.png
//'http://a.tile.stamen.com/toner/{z}/{x}/{y}.png'
//https://wiki.openstreetmap.org/wiki/Tile_servers
L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map tiles by Stamen Design, under CC BY 3.0.',
        maxZoom: 18
}).addTo(mymap);

var arch = L.icon({iconUrl:'https://s7d2.scene7.com/is/image/TWCNews/0125_STL_arch', 
                   iconSize: [50, 50], // Size of the icon
                   iconAnchor: [16, 32] 
                  });

var slu = L.icon({
    iconUrl: 'https://www.slu.edu/about/images/business-school.jpg', 
    iconSize: [50, 50], 
    iconAnchor: [16, 32] 
});

var zoo = L.icon({
    iconUrl: 'https://www.tripsavvy.com/thmb/r8PGjOsc_JQcAGin7oA2XHaXPzA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/group-of-penguins-at-the-st--louis-zoo-139981921-5aab5dbdff1b7800365b4f20.jpg', 
    iconSize: [50, 50], 
    iconAnchor: [16, 32] 
});

var tgp = L.icon({
    iconUrl: 'https://lh3.googleusercontent.com/p/AF1QipOL9FESawE3B-aoEcrVBNBXccYFCMH1QWdLZuzl=s680-w680-h510', 
    iconSize: [50, 50],
    iconAnchor: [16, 32] 
});

var esri = L.icon({
    iconUrl: 'https://www.esri.com/content/dam/esrisites/en-us/about/about/about-2022/assets/about-locations-5050-hq.jpg', 
    iconSize: [50, 50],
    iconAnchor: [16, 32] 
});

var markerGatewayArch = L.marker([38.6247, -90.1848],{icon: arch}).addTo(mymap);
var markerStLouisZoo = L.marker([38.6351, -90.2928], {icon: zoo}).addTo(mymap);
var markerTowerGrovePark = L.marker([38.6070, -90.2578], {icon: tgp}).addTo(mymap);
var markerStLouisUniversity = L.marker([38.6365, -90.2332], {icon: slu}).addTo(mymap);
var markerESRI = L.marker([38.6280, -90.1994], {icon: esri}).addTo(mymap);


markerGatewayArch.bindPopup("<b>Monument!</b><br>The Gateway Arch").openPopup();
markerStLouisZoo.bindPopup("<b>Zoo!</b><br>Saint Louis Zoo!.").openPopup();
markerTowerGrovePark.bindPopup ("<b>Park!</b><br>Tower Grove Park.").openPopup();
markerStLouisUniversity.bindPopup("<b>University!</b><br>Saint Louis University.").openPopup();
markerESRI.bindPopup("<b>Office!</b><br>Esri Office.").openPopup();
