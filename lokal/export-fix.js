(function(){
  const $ = id => document.getElementById(id);
  function addOption(selectId, value, label){
    const el = $(selectId);
    if(!el) return;
    if(![...el.options].some(o => o.value === value)){
      const opt = document.createElement('option');
      opt.value = value;
      opt.textContent = label;
      el.appendChild(opt);
    }
  }
  addOption('ornamentStyle','vintage','Vintage Contoh');
  addOption('bottomAccessory','vintage','Vintage Heart');

  if(window.orn){
    window.orn.vintage = ['❧','❦'];
  }
  if(window.acc){
    window.acc.vintage = '❧  ♥  ❧';
  }

  function blobDownload(name, content, type){
    const blob = new Blob([content], {type});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function exportCss(){
    return `
      @page Section1 { size:21.59cm 33.33cm; margin:.5cm; }
      div.Section1 { page:Section1; }
      body { margin:0; font-family:Georgia,'Times New Roman',serif; color:#1c1712; background:#fff; }
      table.page { width:20.59cm; height:32.33cm; border-collapse:collapse; table-layout:fixed; }
      td.panel { width:10.295cm; height:16.165cm; vertical-align:top; padding:.28cm; border:1px solid #b8862f; position:relative; background:#fffdf5; overflow:hidden; text-align:center; }
      .shape { color:#b8862f; font-size:14pt; padding:0 4pt; }
      .mono { width:1.8cm; height:1.8cm; border:1px solid #b8862f; border-radius:50%; margin:0 auto 4pt; text-align:center; line-height:1.8cm; color:#b8862f; font-size:12pt; }
      .arabic { font-size:15pt; font-weight:bold; margin:2pt 0; }
      .salam { font-style:italic; font-weight:bold; font-size:8.5pt; margin:2pt 0; }
      .intro,.ayat { font-size:8.7pt; line-height:1.25; margin:3pt 0; }
      .line { color:#b8862f; text-align:center; margin:4pt 0; }
      .name { color:#b8862f; font-size:20pt; line-height:1; margin:1pt 0; font-weight:bold; }
      .name-note { font-size:8.3pt; font-weight:bold; margin:1pt 0; }
      .with { color:#b8862f; font-style:italic; font-size:12pt; margin:1pt 0; }
      .section-title { color:#b8862f; font-size:10pt; font-weight:bold; margin:4pt 0 2pt; text-transform:uppercase; }
      table.detail { width:100%; border-collapse:collapse; font-size:8.3pt; text-align:left; }
      table.detail td { border-bottom:1px solid #d6b36d; padding:1.6pt 0; vertical-align:top; }
      .ico { width:.55cm; color:#b8862f; text-align:center; }
      .lab { width:2.35cm; font-weight:bold; }
      .colon { width:.25cm; text-align:center; }
      .thanks { font-size:8.3pt; line-height:1.2; margin:4pt auto; }
      .bottom-orn,.top-orn { color:#b8862f; text-align:center; font-size:15pt; margin:4pt 0 0; }
      .closing-salam { font-size:8.8pt; font-weight:bold; margin:8pt 0; }
      .invite-title { color:#b8862f; font-style:italic; font-size:15pt; margin:8pt 0 5pt; font-weight:bold; }
      .families { font-size:8.1pt; line-height:1.2; }
      .family { border-top:1px solid #d6b36d; padding:2pt 0; }
      .family:last-child { border-bottom:1px solid #d6b36d; }
    `;
  }

  function cleanPanel(html){
    return String(html || '')
      .replaceAll('class="shape tl"','class="shape"')
      .replaceAll('class="shape tr"','class="shape"')
      .replaceAll('class="shape bl"','class="shape"')
      .replaceAll('class="shape br"','class="shape"');
  }

  function getPanels(){
    if(typeof render === 'function') render();
    const fronts = [...document.querySelectorAll('.front-card')].map(x => cleanPanel(x.innerHTML));
    const backs = [...document.querySelectorAll('.back-card')].map(x => cleanPanel(x.innerHTML));
    return {
      front: fronts[0] || '',
      back: backs[0] || ''
    };
  }

  function exportWordStable(){
    const p = getPanels();
    const html = `
      <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
      <head>
        <meta charset="utf-8">
        <title>Undangan Pernikahan</title>
        <style>${exportCss()}</style>
      </head>
      <body>
        <div class="Section1">
          <table class="page">
            <tr><td class="panel">${p.front}</td><td class="panel">${p.back}</td></tr>
            <tr><td class="panel">${p.front}</td><td class="panel">${p.back}</td></tr>
          </table>
        </div>
      </body>
      </html>`;
    blobDownload('undangan-pernikahan.doc', '\ufeff' + html, 'application/msword;charset=utf-8');
  }

  function exportHtmlStable(){
    const sheet = document.getElementById('sheet') ? document.getElementById('sheet').outerHTML : '';
    const html = `<!doctype html><html lang="id"><head><meta charset="utf-8"><title>Undangan Pernikahan</title><link rel="stylesheet" href="style.css"><link rel="stylesheet" href="print-fix.css"></head><body>${sheet}</body></html>`;
    blobDownload('undangan-pernikahan.html', html, 'text/html;charset=utf-8');
  }

  ['wordBtn','wordBtnTop'].forEach(id => { const b = $(id); if(b) b.onclick = exportWordStable; });
  ['htmlBtn','htmlBtnTop'].forEach(id => { const b = $(id); if(b) b.onclick = exportHtmlStable; });
})();
