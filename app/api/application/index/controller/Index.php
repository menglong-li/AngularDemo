<?php
namespace app\index\controller;
use think\Controller;
use think\Db;

class Index
{
    public function index()
    {
    	$data = Db::name('news')->find();
    	echo header("Access-Control-Allow-Origin:*");
    	echo json_encode($data);
    }
    public function hello()
    {
    	return 'hello';
    }
}
