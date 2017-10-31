<?php
	$data1 = [];
	$data2 = [];
	$data3 = [];
	
	$data1['placeTitle'] = 'Burger King';
	$data1['placeRate'] = 5;
	$data1['placeDistance'] = 0.5;
	$data1['placePrice'] = 120;
	$data1['placeLogo'] = 'data/search/id_1.png';

	$data2['placeTitle'] = '3BCafe';
	$data2['placeRate'] = 3;
	$data2['placeDistance'] = 2;
	$data2['placePrice'] = 95;
	$data2['placeLogo'] = 'data/search/id_2.png';

	$data3['placeTitle'] = 'Despacito';
	$data3['placeRate'] = 4;
	$data3['placeDistance'] = 5;
	$data3['placePrice'] = 145;
	$data3['placeLogo'] = 'data/search/id_3.png';

	$data = [];
	$data[0] = $data1;
	$data[1] = $data2;
	$data[2] = $data3;
	$data[3] = $data3;
	$data[4] = $data3;
	$data[5] = $data3;
	$data[6] = $data3;
	$data[7] = $data3;
	$data[8] = $data3;
	$data[9] = $data3;

	exit(json_encode($data));
	//echo '<pre>';
	//var_dump($data);
