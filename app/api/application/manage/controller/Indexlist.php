<?php
namespace app\manage\controller;
use think\Controller;
use think\Db;
use think\Request;
class Indexlist
{
	public function delete($tname,$id)
	{
		$data = Db::name($tname)->delete($id);
		return $data;
	}

	public function delall($tname,$id)
	{
		$data = Db::name($tname)->delete($id);
		return $data;
	}

	public function onall($tname,$id)
	{
		$data = Db::name($tname)->where("id","in",$id)->update(["state" => "1"]);
		return $data;
	}

	public function offall($tname,$id)
	{
		$data = Db::name($tname)->where("id","in",$id)->update(["state" => "0"]);
		return $data;
	}
}