// Настройки подключения ЛК «Старт» к Supabase.
// Где взять: Supabase → Project Settings → API (или Data API).
window.START_CONFIG = {
  // Project URL, например https://abcdefghijkl.supabase.co
  url: 'https://rysvdbfvltvrwhihnumx.supabase.co/rest/v1/',
  // anon / public key (длинная строка, начинается с eyJ...). Его можно хранить открыто.
  // НЕ вставляйте сюда service_role key!
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5c3ZkYmZ2bHR2cndoaWhudW14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI1NzU1NDQsImV4cCI6MjEwODE1MTU0NH0.XAopMUMGzRw14KlTsFo9AFtLI02RTyzOZGOlwkyOhzo',
  // Логины превращаются в адреса вида login@start.local. Менять не нужно.
  emailDomain: 'start.local'
};
