<?php

function get_omschrijving() 
{
 //    $html = "";
	// $url = 'http://ows.gis.rotterdam.nl/cgi-bin/mapserv.exe?map=d:\gwr\webdata\mapserver\map\vzg_pub.map&amp=&SERVICE=WFS&amp=&VERSION=1.0.0&amp=&REQUEST=getfeature&amp=&TYPENAME=sdo_rdam_vzg_2000087&amp=&MAXFEATURES=100';
	// 	$xml = simpleXML_load_file($url,"SimpleXmlElement");
	// 	foreach ($xml->children('gml', TRUE)->featureMember as $oms) 
	// 	{
	// 		echo "<strong>Type Omschrijving:</strong> ".$oms->children('ms', TRUE)->sdo_rdam_vzg_2000087->TYPE_OMSCHRIJVING."<br/>";

	// 		echo "<strong>Omschrijving:</strong> ".$oms->children('ms', TRUE)->sdo_rdam_vzg_2000087->OMSCHRIJVING."<br/>";


	// 		echo "<strong>Postcode:</strong> ".$oms->children('ms', TRUE)->sdo_rdam_vzg_2000087->POSTCODE."<br/>";

	// 		echo "<strong>Huisnr:</strong> ".$oms->children('ms', TRUE)->sdo_rdam_vzg_2000087->HUISNR."<br/>";

	// 		echo "<strong>Huisnummer:</strong> ".$oms->children('ms', TRUE)->sdo_rdam_vzg_2000087->HUISNUMMER."<br/>";

	// 		echo "</p>";
	// 	}

	 $html = "";
	$url = 'http://www.veiligstallen.nl/veiligstallen.xml';
		$xml = simpleXML_load_file($url,"SimpleXmlElement");
		foreach ($xml->Fietsenstalling as $oms) 
		{
			echo "<strong>Naam:</strong> ".$oms->Naam."<br/>";
			echo "<strong>Omschrijving:</strong> ".$oms->Omschrijving."<br/>";
			echo "<strong>ID:</strong> ".$oms->ID."<br/>";
			echo "<strong>Gemeente:</strong> ".$oms->Gemeente."<br/>";
			echo "<strong>Straat:</strong> ".$oms->Straat."<br/>";
			echo "<strong>Postcode:</strong> ".$oms->Postcode."<br/>";

			echo "</p>";
		}
		
}


function get_postcode() 
{
//     $html = "";
// 	$content = @file_get_contents('http://ows.gis.rotterdam.nl/cgi-bin/mapserv.exe?map=d:\gwr\webdata\mapserver\map\vzg_pub.map&amp=&SERVICE=WFS&amp=&VERSION=1.0.0&amp=&REQUEST=getfeature&amp=&TYPENAME=sdo_rdam_vzg_2000087&amp=&MAXFEATURES=100');
// 	if ($content != FALSE) {
// 		$xml = new SimpleXmlElement($content);
// 		for($i = 0; $i < 10; $i++)
// 		{
// 		$postcode = $xml->children('gml', TRUE)->featureMember->children('ms', TRUE)->sdo_rdam_vzg_2000087->POSTCODE;

// 		 $html .= "<p>$postcode</p>";

// 	}
// }
// 	echo $html;
// }

	 $html = "";
	$url = 'http://ows.gis.rotterdam.nl/cgi-bin/mapserv.exe?map=d:\gwr\webdata\mapserver\map\vzg_pub.map&amp=&SERVICE=WFS&amp=&VERSION=1.0.0&amp=&REQUEST=getfeature&amp=&TYPENAME=sdo_rdam_vzg_2000087&amp=&MAXFEATURES=100';
		$xml = simpleXML_load_file($url,"SimpleXmlElement");
		foreach ($xml->children('gml', TRUE)->featureMember as $oms) 
		{

			echo "<strong>Bounded Coords:</strong> ".$oms->children('ms', TRUE)->sdo_rdam_vzg_2000087->children('gml', TRUE)->boundedBy->Box->coordinates."<br/>";

			echo "<strong>GEOM Coords:</strong> ".$oms->children('ms', TRUE)->sdo_rdam_vzg_2000087->GEOM->children('gml', TRUE)->Point->coordinates."<br/>";

			echo "</p>";
		}
		
}



?>
