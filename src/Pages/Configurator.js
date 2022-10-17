import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Configurator() {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "/build/configurator/Build2.loader.js",
    dataUrl: "/build/configurator/webglconfig.data",
    frameworkUrl: "/build/configurator/Build2.framework.js",
    codeUrl: "/build/configurator/Build2.wasm",
  });
  // We'll round the loading progression to a whole number to represent the
  // percentage of the Unity Application that has loaded.
  const loadingPercentage = Math.round(loadingProgression * 100);

  return (
    <div className="container">
      {isLoaded === false && (
        // We'll conditionally render the loading overlay if the Unity
        // Application is not loaded.
        <div className="loading-overlay">
          <p>Loading... ({loadingPercentage}%)</p>
        </div>
      )}
      <Unity
        className="unity"
        style={{ height: window.innerHeight, width: window.innerWidth - 100 }}
        unityProvider={unityProvider}
      />
    </div>
  );
}
