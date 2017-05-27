<html>
<head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title') | Desafio Web</title>
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css">
    <link rel="stylesheet" href={{url('/plugins/bootstrap/css/bootstrap.min.css')}}>
    <link rel="stylesheet" href={{url('css/form-elements.css')}}>
    <link rel="stylesheet" href={{url('css/buttons.css')}}>
    <link rel="stylesheet" href={{url('css/style.css')}}>
    @yield('head')
</head>

<body>

<!-- Top menu -->
<nav>
    <div class="container">
        <div class="row">
            <div class="col-sm-3 nav-img">
                <img src="{{url('img/logo.png')}}" >
            </div>
            <div class="col-sm-9 nav-links">
                <a class="scroll-link button-1" href="#intro-box" id="nav-apendice">Apêndice</a>
            </div>
        </div>
    </div>
</nav>

<!-- Cursos -->
<div class="video-container">
    <div class="container">
        <div class="row">
            <div class="col-sm-12 video" id="videos">
                @yield('content')
            </div>
        </div>
    </div>
</div>

<!-- Apendice -->
<div class="intro-container">
    <div class="container">
        <div class="row">
            <div class="col-sm-12 intro-box" id="intro-box">
                <h3>Desafio Web - CEFIS</h3>
            </div>
        </div>
    </div>
</div>


<!-- Footer -->
<footer>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 footer">
                Projeto de Bruno dos Santos Messias
            </div>
        </div>
    </div>
</footer>


@yield('modal')

<!-- Javascript -->
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script src={{url('js/bootstrap.min.js')}}></script>
<script src={{url('js/select2.min.js')}}></script>
<script src={{url('js/scripts.js')}}></script>
@yield('include_js')


<!--[if lt IE 10]>
<script src="assets/js/placeholder.js"></script>
<![endif]-->

</body>

</html>
