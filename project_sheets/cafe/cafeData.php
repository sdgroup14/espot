<?php

	$data['post'] = file_get_contents('php://input');
    strip_tags($data['post']);

    $item = json_decode($data['post']);

    //$item->id;

	$cafe1 = new \stdClass;
	$cafe1->placeId = 11;
	$cafe1->placeTitle = 'Burger King';
	$cafe1->placeRate = 5;
	$cafe1->placeDistance = 120;
	$cafe1->placeLogo = 'id_1.png';

	$cafe1->placeGallery = ['11_01.jpg','11_02.jpg','11_03.jpg'];

	$cafe1->placeAddress = 'ул. Мечникова, 14/1';
	$cafe1->placePhone = '+38 044 223 13 83';

	$cafe1->placeHours = [
		0 => ['days' => 'пн-чт', 'hours' => '10:00 - 23:00'],
		1 => ['days' => 'пт-вс', 'hours' => '10:00 - 24:00']
	];

	$cafe1->placeService = ['cash','card','drive','deliver'];

	$cafe1->placeKitchen = ['Китайская','Американская','Итальянская'];

	$cafe1->placeMenu = [
		0 => [
			'itemTitle' => 'Первые блюда',
			'itemId' => '100',
			'itemData' => [
				0 => ['title'=>'Суп','weight'=>200,'price'=>65],
				1 => ['title'=>'Борщ зелёный','weight'=>200,'price'=>80],
				2 => ['title'=>'Борщ украинский','weight'=>200,'price'=>900]
			]
		],
		1 => [
			'itemTitle' => 'Горячее',
			'itemId' => '101',
			'itemData' => [
				0 => ['title'=>'Стейк','weight'=>100,'price'=>200],
				1 => ['title'=>'Куриная отбивная','weight'=>150,'price'=>280],
				2 => ['title'=>'Свинная отбивная','weight'=>180,'price'=>320]
			]
		]
	];

	exit(json_encode($cafe1));
	echo '<pre>';
	var_dump($cafe1);
