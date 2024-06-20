function WindowCloak(url) {
    function checkPopupPermissions() {
      var isAllowed = false;
      var popup = window.open("", "_blank", "width=100,height=100");
  
      if (popup) {
        popup.close();
        isAllowed = true;
      }
  
      return isAllowed;
    }
  
    if (checkPopupPermissions()) {
        var newWindow = window.open("", "newWindow", "width=1200,height=750");
        newWindow.document.write(`
        <html>
      <head>
        <style>
          body {
            margin: 0;
            padding: 0;
            height: 100vh;
          }
          
          iframe {
            width: 100%;
            height: 100vh;
            border: none;
          }
    
        </style>
        <title>Home</title>
        <link rel="icon" type="image/png" href="https://ssl.gstatic.com/classroom/favicon.png">
      </head>
      <body>
        <iframe src='${url}'>
      </body>
     </html>
        `);
        window.location.href = "../ ";
    }
  }
  
  function TabCloak(url) {
    const popup=open('about:blank','_blank')
if(!popup||popup.closed){alert('Please allow popups and redirects.')}else{const doc=popup.document
const iframe=doc.createElement('iframe')
const style=iframe.style
const link=doc.createElement('link')
const name=localStorage.getItem('name')||'My Drive - Google Drive'
const icon=localStorage.getItem('icon')||'https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png'
doc.title=name
link.rel='icon'
link.href=icon
iframe.src=url
style.position='fixed'
style.top=style.bottom=style.left=style.right=0
style.border=style.outline='none'
style.width=style.height='100%'
doc.head.appendChild(link)
doc.body.appendChild(iframe)
const script=doc.createElement('script')
script.textContent=`
      window.onbeforeunload = function (event) {
        const confirmationMessage = 'Leave Site?';
        (event || window.event).returnValue = confirmationMessage;
        return confirmationMessage;
      };
    `
}};