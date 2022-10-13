import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Configurator() {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "/build/Newfolder.loader.js",
    dataUrl: "/build/webgl.data",
    frameworkUrl: "/build/build.framework.js",
    codeUrl: "/build/build.wasm",
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
      <Unity className="unity" unityProvider={unityProvider} />
    </div>
  );
}
