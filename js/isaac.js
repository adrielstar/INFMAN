/**
 * Created by isaacdecuba on 3/16/15.
 */
function loadMarkers() {
    xmlDoc = loadXMLDoc("veiligstallen.xml");

    var x = xmlDoc.getElementsByTagName("Fietsenstalling");
    document.write(x[0].childNodes[0].nodeValue);
    for (var i = 0; i < 5; i++)
    {
        document.write(x[i].childNodes[0].nodeValue);
        document.write("<br>");
    }
}

function loadXMLDoc(filename)
{
    if (window.XMLHttpRequest)
    {
        xhttp=new XMLHttpRequest();
    }
    else // code for IE5 and IE6
    {
        xhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET",filename,false);
    xhttp.send();
    return xhttp.responseXML;
}

function loadXMLString(txt)
{
    if (window.DOMParser)
    {
        parser=new DOMParser();
        xmlDoc=parser.parseFromString(txt,"text/xml");
    }
    else // code for IE
    {
        xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async=false;
        xmlDoc.loadXML(txt);
    }
    return xmlDoc;
}

google.maps.event.addDomListener(window, 'load', loadMarkers);