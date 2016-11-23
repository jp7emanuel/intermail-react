var elixir = require('laravel-elixir');

elixir.config.assetsPath = 'src/styles';

elixir((mix) => {
  mix.sass([
    'app.scss'
  ], 'public/css/3rd-party.css');
});
