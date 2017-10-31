<?php

	$kitchen1 = new \stdClass;
	$kitchen1->kitchenTitle = 'Армянская';
	$kitchen1->kitchenCount = 15;

	$kitchen2 = new \stdClass;
	$kitchen2->kitchenTitle = 'Азиатская';
	$kitchen2->kitchenCount = 8;

	$kitchen3 = new \stdClass;
	$kitchen3->kitchenTitle = 'Американская';
	$kitchen3->kitchenCount = 3;

	$kitchen4 = new \stdClass;
	$kitchen4->kitchenTitle = 'Вегетарианская';
	$kitchen4->kitchenCount = 6;

	$kitchen5 = new \stdClass;
	$kitchen5->kitchenTitle = 'Восточная';
	$kitchen5->kitchenCount = 25;

	$kitchen = [];

	$kitchen['a'][0] = $kitchen1;
	$kitchen['a'][1] = $kitchen2;
	$kitchen['a'][2] = $kitchen3;

	$kitchen['в'][0] = $kitchen4;
	$kitchen['в'][1] = $kitchen5;



	exit(json_encode($kitchen));
	//echo '<pre>';
	//var_dump($kitchen);
