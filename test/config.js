// ТЕСТОВАЯ ВЕРСИЯ ЛК «Старт» — работает с отдельной тестовой базой, рабочие данные не трогает.
window.START_CONFIG = {
  url: 'https://uxswtdpccezvykdqaxpr.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4c3d0ZHBjY2V6dnlrZHFheHByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTUxNjE4MDksImV4cCI6MjExMDczNzgwOX0.IzH4q0kbxeRMjJSkjnKBJHmTjDnrB1YuAsuHrZlvUhM',
  emailDomain: 'start.local'
};
// Отдельное хранение входа в браузере, чтобы тестовая и рабочая версии не мешали друг другу
(function(){
  try{
    var P = 'start-lk', T = 'TEST-start-lk', sp = Storage.prototype;
    var g = sp.getItem, s = sp.setItem, r = sp.removeItem;
    var fix = function(k){ return (typeof k === 'string' && k.indexOf(P) === 0) ? 'TEST-' + k : k; };
    sp.getItem = function(k){ return g.call(this, fix(k)); };
    sp.setItem = function(k, v){ return s.call(this, fix(k), v); };
    sp.removeItem = function(k){ return r.call(this, fix(k)); };
  }catch(e){}
})();
// Красная плашка «ТЕСТОВАЯ ВЕРСИЯ»
document.addEventListener('DOMContentLoaded', function(){
  var b = document.createElement('div');
  b.textContent = 'ТЕСТОВАЯ ВЕРСИЯ · отдельная тестовая база, рабочие данные не затрагиваются';
  b.style.cssText = 'position:fixed;left:0;right:0;bottom:0;z-index:99999;background:#d32f2f;color:#fff;font:600 13px/1.2 system-ui,sans-serif;text-align:center;padding:6px 8px;pointer-events:none';
  document.body.appendChild(b);
});
