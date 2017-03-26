<?php
namespace app\manage\controller;
use think\Controller;
use think\Db;
use think\Request;
class About
{
	public function index()
	{
		return "manage/about/index";
	}

	public function add()
	{
		$data = Db::name("about")->insert(Request::instance()->param());
		return $data;//json(Request::instance()->param());
	}

	public function edit()
	{
		$data = Db::name("about")->where('id',$_POST['s'])->find();
		if($data != "")
		{
			print_r($_POST);
		}
	}
}