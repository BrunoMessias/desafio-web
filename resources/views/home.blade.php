@extends('layouts.app')

@section('title','Home')

@section('head')
<link rel="stylesheet" type="text/css" href={{url('css/slick.css')}}>
<link rel="stylesheet" type="text/css" href={{url('css/slick-theme.css')}}>
<link rel="stylesheet" type="text/css" href={{url('css/home.css')}}>
@endsection

@section('modal')
<!-- Modal -->
<div id="modal">

</div>
@endsection

@section('include_js')
<script src={{url('js/slick.min.js')}}></script>
<script src={{url('js/home.js')}}></script>
@endsection
