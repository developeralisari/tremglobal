<?php

namespace App\Http\Controllers;

use App\Models\Register;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RestController extends Controller
{
    public function index(Request $r)
    {
        try{
            DB::beginTransaction();

            $new = new Register;
            $new->fill($r->all());
            $new->save();

            DB::commit();

            return "ok";
        }catch(Exception $e){
            DB::rollback();
            return $e->getMessage();
        }
    }
}
