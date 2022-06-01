import { serve } from 'https://deno.land/std@0.114.0/http/server.ts';

serve(() => {
  const visits = localStorage.getItem('visits') || 0;
  const newVisits = +visits + 1;
  localStorage.setItem('visits', String(newVisits));

  return Response.json({ visits: newVisits });
});
