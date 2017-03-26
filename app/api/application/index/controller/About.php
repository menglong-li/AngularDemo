<?php
namespace app\index\controller;
use think\Controller;
use think\Db;
echo header("Access-Control-Allow-Origin:*");
echo header('Access-Control-Allow-Headers: X-Requested-With');
class About
{
    public function index()
    {
    	return 'about';
    }
    public function view($tid)
    {
    	$data = Db::name("about")->where('tid',$tid)->find();
    	echo json_encode($data);
    }
    public function edit()
    {
    	$about = Db::name("about")->where('tid',$_POST['tid'])->find();
    	$off = 0;
    	if($about != "")
    	{
    		$about['content'] = $_POST['content'];
    		$off = Db::update($about);
    	}else
    	{
    		$data = [
    			'tid' => $_POST['tid'],
    			'content' => $_POST['content']
    		];
    		$off = Db::name('about')->insert($data);
    	}
    	return $off;
    }
}