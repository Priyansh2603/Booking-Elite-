import React from 'react'

export default function Why() {
    (function (global) {
        'use strict';
      
        const nonce = window['dfBootstrapNonce'];
      
        var CUSTOM_ELEMENTS_ADAPTER_URL =
            'https://static.dialogflow.com/common/messenger/webcomponentsjs/2.1.3/custom-elements-es5-adapter.js';
        var WEBCOMPONENTS_LOADER_URL =
            'https://static.dialogflow.com/common/messenger/webcomponentsjs/2.1.3/webcomponents-loader.js';
        var MESSENGER_URL =
            'https://www.gstatic.com/dialogflow-console/fast/messenger/messenger-internal.min.js?v=4';
      
        var loadDfMessenger = function () {
          var elementScript = document.createElement('script');
          elementScript.addEventListener('load', onMessengerLoaded, false);
          elementScript.src = MESSENGER_URL;
          if (nonce) {
            elementScript.setAttribute('nonce', nonce);
          }
          global.document.body.insertBefore(elementScript, null);
        };
      
        var onMessengerLoaded = function () {
          window.dispatchEvent(new Event('dfMessengerLoaded'))
        };
      
        var loadWebComponentPolyfills = function () {
          var customElementsAdapterTag = document.createElement('script');
          if (global.customElements) {
            // Import custom elements adapter which is needed for Custom element
            // classes transpiled to ES5.
            customElementsAdapterTag.src = CUSTOM_ELEMENTS_ADAPTER_URL;
            if (nonce) {
              customElementsAdapterTag.setAttribute('nonce', nonce);
            }
            document.head.appendChild(customElementsAdapterTag);
          }
          // Import web components loader which loads polyfills based on browser
          // support.
          const webComponentsLoaderTag = document.createElement('script');
          webComponentsLoaderTag.src = WEBCOMPONENTS_LOADER_URL;
          if (nonce) {
            webComponentsLoaderTag.setAttribute('nonce', nonce);
          }
          global.document.head.appendChild(webComponentsLoaderTag);
        };
      
        global.addEventListener('WebComponentsReady', loadDfMessenger, false);
      
        var raf = global.requestAnimationFrame || global.mozRequestAnimationFrame ||
            global.webkitRequestAnimationFrame || global.msRequestAnimationFrame;
        if (raf) {
          raf(function () {
            global.setTimeout(loadWebComponentPolyfills, 0);
          });
        } else {
          global.addEventListener('load', loadWebComponentPolyfills);
        }
      })(window);
      
  return (
    <div><section id="why-us" className="why-us">
    <div className="container">

        <div className="row no-gutters">

            <div className="col-lg-4 col-md-6 content-item">
                <span>01</span>
                <h4>Theme</h4>
                <p>Disability is an umbrella term, Covering Impairments, activity limitation and participation restriction </p>
            </div>

            <div className="col-lg-4 col-md-6 content-item">
                <span>02</span>
                <h4>Equality</h4>
                <p>Disable people face social stigma of inequality and descrimination on daily basis.</p>
            </div>

            <div className="col-lg-4 col-md-6 content-item">
                <span>03</span>
                <h4>Feasibility</h4>
                <p>Chetna is feasible for user as well as owner of the suitable property as there is no centralized portal for storing information. </p>
            </div>

            <div className="col-lg-4 col-md-6 content-item">
                <span>04</span>
                <h4>Praticibility</h4>
                <p>Chetna is an easy to use plateform for the disable people it has a user friendly UI, Provide an interactive map based Navigation.</p>
            </div>

            <div className="col-lg-4 col-md-6 content-item">
                <span>05</span>
                <h4>User Experience</h4>
                <p>Chetna provide only those places that have certain accessibility features, user can check the accessibility features of a place beforehand.</p>
            </div>

            <div className="col-lg-4 col-md-6 content-item">
                <span>06</span>
                <h4>Scale of Impact</h4>
                <p>Our Portal is powered especially for specially abled people to access location for themself by ensuring that it works the way it is simple.  </p>
            </div>

        </div>

    </div>
</section>
</div>
  )
}
