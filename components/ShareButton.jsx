import React from 'react';
import Script from 'next/script';

const ShareButton = () => {
  return (
 <div>
    <div className="gap-2 a2a_kit a2a_kit_size_32 a2a_default_style">
      <a className="a2a_dd" href="https://www.addtoany.com/share"></a>
      <a className="a2a_button_facebook"></a>
      <a className="a2a_button_twitter"></a>
      <a className="a2a_button_whatsapp"></a>
    </div>
    <Script async src="https://static.addtoany.com/menu/page.js" />
 </div>
  )
}

export default ShareButton
