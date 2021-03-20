<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->date('delivery_date');
            $table->string('fabric_type');
            $table->string('kurta_types_id')->nullable();
            $table->integer('kurta_quantity')->nullable();
            $table->float('kurta_amount')->nullable();
            $table->float('kurta_total')->nullable();
            $table->string('pyjama_types_id')->nullable();
            $table->integer('pyjama_quantity')->nullable();
            $table->float('pyjama_amount')->nullable();
            $table->float('pyjama_total')->nullable();
            $table->float('total')->nullable();
            $table->foreignId('customers');
            $table->foreignId('measurements');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
