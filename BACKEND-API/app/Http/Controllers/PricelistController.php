<?php

namespace App\Http\Controllers;

use App\Models\Pricelist;
use Illuminate\Http\Request;

class PricelistController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $response = [
            "error" => null,
            "status" => true,
            "data" => [
                "result" => Pricelist::all(),
                "page" => 1,
                "pageSize" => 1000,
                "totalPage" => 0,
                "total" => count(Pricelist::all()),
                "cursor" => "",
            ],
        ];

        return $response;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Pricelist  $pricelist
     * @return \Illuminate\Http\Response
     */
    public function show(Pricelist $pricelist)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Pricelist  $pricelist
     * @return \Illuminate\Http\Response
     */
    public function edit(Pricelist $pricelist)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Pricelist  $pricelist
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pricelist $pricelist)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Pricelist  $pricelist
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pricelist $pricelist)
    {
        //
    }
}
