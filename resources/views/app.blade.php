<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  @viteReactRefresh
  @vite('frontend/app.jsx')
  @inertiaHead

  @isset($meta)
  <title>{{ $meta['title'] }}</title>
  <meta name="description" content="{{ $meta['description'] }}">
  <link rel="canonical" href="{{ url($meta['canonical'])}}" />

  <meta property="og:title" content="{{ $meta['title'] }}">
  <meta property="og:description" content="{{ $meta['description'] }}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="{{ url()->current() }}">

  <meta name="twitter:card" content="summary">
  <meta name="twitter:url" content="{{ url()->current() }}">
  <meta name="twitter:title" content="{{ $meta['title'] }}">
  <meta name="twitter:description" content="{{ $meta['description'] }}">

  @if (isset($meta['image']))
  <meta property="og:image" content="{{ asset($meta['image']) }}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:image" content="{{ asset($meta['image']) }}" />
  @endif
  @endisset

  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">

  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <link rel="stylesheet" href="/css/reset.css" />
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap');
  </style>
</head>
<body>
  @inertia
  <div id="version" data-wording-version="{{ config('app.wording_version') }}"></div>
</body>
</html>
