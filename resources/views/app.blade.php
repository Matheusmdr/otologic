<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Otologic - Otorrinolaringologia e Audiologia') }}</title>


    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">


    <meta name="description" content="A Clínica Otologic é referência em saúde e bem-estar, especializada em Otorrinolaringologia e Audiologia. Oferecemos atendimento completo e personalizado, abrangendo consultas clínicas para crianças e adultos, cirurgias e exames especializados.">
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:type" content="website" />
    <meta
        property="og:title"
        content="Otologic - Otorrinolaringologia e Audiologia" />
    <meta
        property="og:description"
        content="A Clínica Otologic é referência em saúde e bem-estar, especializada em Otorrinolaringologia e Audiologia. Oferecemos atendimento completo e personalizado, abrangendo consultas clínicas para crianças e adultos, cirurgias e exames especializados." />

    <meta property="og:site_name" content="Otologic - Otorrinolaringologia e Audiologia" />
    <meta
        name="twitter:title"
        content="Otologic - Otorrinolaringologia e Audiologia" />
    <meta
        name="twitter:description"
        content="A Clínica Otologic é referência em saúde e bem-estar, especializada em Otorrinolaringologia e Audiologia. Oferecemos atendimento completo e personalizado, abrangendo consultas clínicas para crianças e adultos, cirurgias e exames especializados." />
    <meta name="twitter:card" content="summary" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>