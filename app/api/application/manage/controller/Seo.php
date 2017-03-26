<?php
namespace app\manage\controller;
use think\Controller;
use think\Db;
use think\Request;
class Seo
{
	public function index($pagesize,$pagecurrent)
	{
		$pageOff = ($pagecurrent - 1) * $pagesize;
		$wheres = "";
		if(Request::instance()->has("tid"))
		{
			$wheres = "tid=" . Request::instance()->param("tid");
		}
		if(Request::instance()->has("t"))
		{
			if($wheres == "")
			{
				$wheres = "title like '%" . Request::instance()->param("t") . "%' ";
			}else
			{
				$wheres .= " and title like '%" . Request::instance()->param("t") . "%' ";
			}
			
		}
		$data = 0;
		if($wheres == "")
		{
			$total = Db::name("seo")->order('tid,id')->count();
			if($total > 0)
			{
				$data = Db::name("seo")->order('tid,id')->limit($pageOff,$pagesize)->select();
			}
		}else
		{
			$total = Db::name("seo")->where($wheres)->order('tid,id')->count();
			if($total > 0)
			{
				$data = Db::name("seo")->where($wheres)->order('tid,id')->limit($pageOff,$pagesize)->select();
			}
		}
		
		$infos = [
			'total' => $total,
			'data' => $data
		];
		return json($infos);
	}

	public function add()
	{
		$data = Db::name("seo")->insert(Request::instance()->param());
		return $data;
	}

	public function sel($id)
	{
		$data = Db::name('seo')->find($id);
		return json($data);
	}

	public function edit()
	{
		$data = Db::name("seo")->update(Request::instance()->param());
		return $data;
	}
}