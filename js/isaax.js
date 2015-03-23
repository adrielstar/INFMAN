/**
 * Created by isaacdecuba on 3/23/15.
 */

var xmlLocation = "veiligstallen.xml";
var locations = [];

/**
 * Loads an xml document to make it parsable
 *
 * @param filename
 * @returns {HTMLDocument}
 */
function loadXMLDoc(filename)
{
    if (window.XMLHttpRequest)
    {
        xhttp = new XMLHttpRequest();
    }
    else // code for IE5 and IE6
    {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET",filename,false);
    xhttp.send();
    return xhttp.responseXML;
}

/**
 * Changes the coordinates to fit the google maps convention
 *
 * @param coordinate
 * @returns {string}
 */
function changeCoordinates(coordinate) {
    var coordinate = coordinate.split(",");
    var lng = coordinate[0];
    var lat = coordinate[1];

    return lat + "," + lng;
}

/**
 * Get the latitude from coordinate
 *
 * @param coordinate
 * @returns {*}
 */
function getLat(coordinate) {
    var coordinate = coordinate.split(",");
    var lat = coordinate[1];

    return lat;
}

/**
 * Get the longitude from coordinate
 *
 * @param coordinate
 * @returns {*}
 */
function getLng(coordinate) {
    var coordinate = coordinate.split(",");
    var lng = coordinate[0];

    return lng;
}

/**
 * Output the coordinates
 */
function showCoordinates() {
    xmlDoc = loadXMLDoc(xmlLocation);

    x = xmlDoc.getElementsByTagName("Coordinaten");

    for (i = 0; i < i.length ; i++) {
        document.write("Lat, Lng: " + changeCoordinates(x[i].childNodes[0].nodeValue));
        document.write("<br>");
    }
}

/**
 * Reads the data of the xml file and fills the array locations
 * This functions loops till 582. Otherwise it wil generate an error and the map will not show
 */
function readData() {
    xmlDoc = loadXMLDoc(xmlLocation);
    x = xmlDoc.getElementsByTagName("Naam");
    y = xmlDoc.getElementsByTagName("Coordinaten");

    for (i = 0; i < 582; i++) {
        var lat = getLat(y[i].childNodes[0].nodeValue);
        var lng = getLng(y[i].childNodes[0].nodeValue);
        var name = x[i].childNodes[0].nodeValue;
        var pos = i;

        fillLocations(name, lat, lng, pos);
    }

}

/**
 * Fill the array locations
 *
 * @param name
 * @param lat
 * @param lng
 * @param pos
 */
function fillLocations(name, lat, lng, pos) {
    locations.push([name, lat, lng, pos+1]);
}